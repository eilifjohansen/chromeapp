/*global chrome*/
import React, { useEffect, useState } from "react";
import {Header, Search, Cards, Footer} from "./components"
import "@navikt/ds-css";
import "./App.css";

function App() {
  const [siteUrl, setSiteUrl] = useState("");

  // Get URL from tab info
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        setSiteUrl(activeTab[0].url);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <div id="cards" className="site-info enonic">
          <Search />
          <Cards siteUrl={siteUrl} />
          {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;