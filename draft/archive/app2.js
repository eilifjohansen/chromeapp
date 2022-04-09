/*global chrome*/
import React, { useEffect, useState } from "react";
import "@navikt/ds-css";
import "@navikt/ds-css";
import { Header } from "@navikt/ds-react";
import axios from 'axios';
import "./App.css";

function App() {
  const [siteRedirectUrl, setSiteRedirectUrl] = useState("");
  const [siteError, setSiteError] = useState("");
  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // Get tab info
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        const siteURL = activeTab[0].url

        if (siteURL.match(/nav.no/)){
        axios.get(siteURL)
        .then(response => {
          console.log("Status: ", response.status);
          //console.log("Data: ", response.data);
  
          if (response.data.match(/"_id":"(.*?)"/)){
          var smile = response.data.match(/"_id":"(.*?)"/)[0];
                var smile2 = smile.replace( '"_id":"', '');
                var smile3 = smile2.replace( '"', '');
                var smile4 = "https://portal-admin.oera.no/admin/tool/com.enonic.app.contentstudio/main#/default/edit/" + smile3
                console.log(smile4)

              const siteRedirectUrl = (smile4);
              setSiteRedirectUrl(siteRedirectUrl);
            } else {
              setSiteError("Sanity?");
            }

        }).catch(error => {
          console.error('Something went wrong!', error);
    });
  }
      });

  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header className="sandbox-header">
            <Header.Title as="h1">Sykepenger</Header.Title>
        </Header>

        <img src="navicon.png" className="App-logo" alt="logo" />
        <div className="site-info">
            {siteRedirectUrl &&
            <div class="enonic">
            <a href={siteRedirectUrl} target="_blank" rel="noreferrer">
              Åpne siden i CMS-systemet
              </a></div>
            }
             {siteError &&
            <div class="enonic">
            Sanity?</div>
            }
        </div>
      </header>
    </div>
  );
}

export default App;

{siteError &&
  <div class="enonic">
  Sanity?</div>
  }