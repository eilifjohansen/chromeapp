/*global chrome*/
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [siteRedirectUrl, setSiteRedirectUrl] = useState("");
  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // Get tab info
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        const siteRedirectUrl = "http://127.0.0.1:1880/enonic?url=" + activeTab[0].url;
        setSiteRedirectUrl(siteRedirectUrl);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="navicon.png" className="App-logo" alt="logo" />
        <div className="site-info">
            {siteRedirectUrl && siteRedirectUrl.match(/nav.no/) &&
            <div class="enonic">
            <a href={siteRedirectUrl} target="_blank" rel="noreferrer">
              Åpne siden i CMS-systemet
              </a></div>
            }
        </div>
      </header>
    </div>
  );
}

export default App;