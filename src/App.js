/*global chrome*/
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [siteUrl, setSiteUrl] = useState("");
  const [siteLogo, setSiteLogo] = useState("");
  const [siteTitle, setSiteTitle] = useState("");
  const [siteHTML, setSiteHTML] = useState("");

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    
    // Get HTML
    chrome.runtime.onMessage.addListener(function(request, sender) {
      if (request.action == "getSource") {
        const message = request.source;
        setSiteHTML(message);
        console.log(message.match(/<p>(.*?)<\/p>/g));
      }
    });            
    chrome.tabs.executeScript(null, {
      file: "getPagesSource.js"
    }, function() {
      // If you try and inject into an extensions page or the webstore/NTP you'll get an error
      if (chrome.runtime.lastError) {
        const message = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        setSiteHTML(message);
      }
    });

    // Get tab info
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        console.log(activeTab)

        const siteUrl = activeTab[0].url;
        const siteLogo = activeTab[0].favIconUrl;
        const siteTitle = activeTab[0].title;
        
        setSiteTitle(siteTitle);
        setSiteUrl(siteUrl);
        setSiteLogo(siteLogo);
  
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={siteLogo} className="App-logo" alt="logo" />
        <div className="site-info" >
          <p className="site-info-item">{siteTitle}</p>
          <p className="site-info-item">{siteUrl}</p>
         
          <div className="site-info-html">
          {siteHTML}
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;