/*global chrome*/
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [siteUrl, setSiteUrl] = useState("");
  const [siteLogo, setSiteLogo] = useState("");
  const [siteTitle, setSiteTitle] = useState("");
  const [siteHTML, setSiteHTML] = useState("");

  const [data, updateData] = useState({
    text: "",
    description: "",
  });

  const [ho, setHo] = useState("");
  const [text, setText] = useState("<a(|\\s+[^>]*)>(.*?)<\\/a\\s*>");
  const [description, setDescription] = useState("");

  function onChange(event) {
    event.preventDefault();
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    data.text = e.target.text.value;
    data.description = e.target.description.value;

    var regEx = new RegExp(data.text, "gi");

    if (data.description.match(regEx)) {
      setHo(data.description.match(regEx));
    } else {
      setHo(["Error, RegEX not valid"]);
    }
  }

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // Get HTML
    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "getSource") {
        const message = request.source;
        setSiteHTML(message);
        setDescription(message);
        console.log(message.match(/<p>(.*?)<\/p>/g));
      }
    });
    chrome.tabs.executeScript(
      null,
      {
        file: "getPagesSource.js",
      },
      function () {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
          const message =
            "There was an error injecting script : \n" +
            chrome.runtime.lastError.message;
          setSiteHTML(message);
          setDescription(message);
        }
      }
    );

    // Get tab info
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        console.log(activeTab);

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
        <div className="site-info">
          <p className="site-info-item">{siteTitle}</p>

          <form className="w-full mt-3 max-w-2xl" onSubmit={submitForm}>
            <div className="mt-3 flex flex-wrap mb-1">
              <label className="w-full pb-3" htmlFor="userinput">
                RegEX:
              </label>
              <div className="w-full md:w-3/4">
                /{" "}
                <input
                  className="appearance-none placeholder-gray-800 inline-block w-full py-3 px-4 mb-4 md:mb-0 text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none"
                  type="text"
                  id="userinput"
                  onChange={(event) => {
                    setText(event.target.value);
                    onChange(event);
                  }}
                  name="text"
                  required
                  aria-label="Insert text"
                  value={text}
                />{" "}
                /g
              </div>
              <div className="w-full md:w-3/4">
                <input
                  className="appearance-none placeholder-gray-800 inline-block w-full py-3 px-4 mb-4 md:mb-0 text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none"
                  type="hidden"
                  onChange={(event) => {
                    setDescription(event.target.value);
                    onChange(event);
                  }}
                  value={description}
                  name="description"
                  id="userinput"
                  required
                  aria-label="Insert link text"
                />
              </div>
              <div className="w-full">
                <br />
                <button
                  name="submit"
                  type="submit"
                  className="font-medium mt-8 py-4 px-4 leading-none text-white rounded bg-gray-800 hover:bg-gray-900"
                >
                  <span>Go go</span>
                </button>
              </div>
            </div>
          </form>

          {ho && ho.length > 0 && <h2>Results</h2>}

          {ho && ho.length > 0 && <h3>Count: {ho.length}</h3>}

          {ho && ho.length > 0 && (
            <div className="site-info-html">
              {ho &&
                ho.length > 0 &&
                ho.map((person) => <p key={uuidv4()}>{person}</p>)}
            </div>
          )}

          <br />
          <br />
        </div>
      </header>
    </div>
  );
}

// <label className="w-full pb-3 pt-3" htmlFor="description">HTML:</label>
//          <p className="site-info-item">{siteUrl}</p>
//         <div className="site-info-html">{siteHTML}</div>

export default App;
