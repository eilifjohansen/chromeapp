/*global chrome*/
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { LinkPanel, Accordion, Link, Alert, SearchField, Heading, Button, Label, Panel } from "@navikt/ds-react";
import { Dropdown, Header } from "@navikt/ds-react-internal";
import { System, Search, Close, Hamburger, Filter } from "@navikt/ds-icons";
import JSONDATA from "./tools.json";
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";

import "./App.css";

function App() {
  const [siteRedirectUrl, setSiteRedirectUrl] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [siteError, setSiteError] = useState("");
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const people = JSONDATA;

  const filtered = !value
  ? people
  : people.filter((tool) =>
      tool.name.toLowerCase().includes(value.toLowerCase()) || tool.category.toUpperCase().includes(value)
    );

const handleSearchChange = (e) => {
  setValue(e.target.value)
  setError("")
};

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // Get tab info
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        const siteURL = activeTab[0].url
        setSiteUrl(activeTab[0].url);
    //    axios.get('http://127.0.0.1:1880/fun?url=' + siteURL)
     //   .then(response => {
      //  }).catch(error => {
    //      console.error('Something went wrong!', error);
  //  });

        if (siteURL.match(/www.nav.no/) && !siteURL.match(/siteimprove.com/)){
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

  if (siteURL.match('lovdata.no/dokument') && !siteURL.match(/siteimprove.com/)){
   // https://lovdata.no/dokument/SF/forskrift/2013-06-21-732?q=wcag
   var smile = siteURL.replace('dokument', 'pro');
   setSiteRedirectUrl(smile);
   console.log(smile)
  }


  if (siteURL.match(/www.idebanken.org/) && !siteURL.match(/siteimprove.com/)){
    axios.get(siteURL)
    .then(response => {
      console.log("Status: ", response.status);
      //console.log("Data: ", response.data);

      if (response.data.match(/name="pageId" content="(.*?)"/)){
      var smile = response.data.match(/name="pageId" content="(.*?)"/)[0];
            var smile2 = smile.replace('name="pageId" content="', '');
            var smile3 = smile2.replace( '"', '');
            var smile4 = "https://idebanken-xp7prod.customer.enonic.io/admin/tool/com.enonic.app.contentstudio/main#/default/edit/" + smile3
            
            console.log(smile)
            console.log(smile2)
            console.log(smile3)
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


if (siteURL.match('design.nav.no/designsystem') && !siteURL.match(/siteimprove.com/)){
  axios.get(siteURL)
  .then(response => {
    console.log("Status: ", response.status);
    //console.log("Data: ", response.data);


    if (response.data.match(/ds_component_page/)){
    if (response.data.match(/"_id":"(.*?)"/)){
      var smile = response.data.match(/"_id":"(.*?)"/)[0];
            var smile2 = smile.replace( '"_id":"', '');
            var smile3 = smile2.replace( '"', '');
          var smile4 = "https://verktoykasse.sanity.studio/desk/designsystemet;innhold;komponentArtikler;publisert;" + smile3
          
          console.log(smile)
          console.log(smile2)
          console.log(smile3)
          console.log(smile4)

        const siteRedirectUrl = (smile4);
        setSiteRedirectUrl(siteRedirectUrl);
      } else {
        setSiteError("Sanity?");
      }
    } else {
      if (response.data.match(/"_id":"(.*?)"/)){
        var smile = response.data.match(/"_id":"(.*?)"/)[0];
              var smile2 = smile.replace( '"_id":"', '');
              var smile3 = smile2.replace( '"', '');
            var smile4 = "https://verktoykasse.sanity.studio/desk/designsystemet;innhold;artikler;publisert;" + smile3
            
            console.log(smile)
            console.log(smile2)
            console.log(smile3)
            console.log(smile4)
  
          const siteRedirectUrl = (smile4);
          setSiteRedirectUrl(siteRedirectUrl);
        } else {
          setSiteError("Sanity?");
        }
      }

  }).catch(error => {
    console.error('Something went wrong!', error);
});
}

      });
  
  }, []);

  return (
    <div className="App">
      <Header>
 
      <Header.Title id="myheader" href="#" onClick={() => setValue("") & setSearch("") & setError("")}>
        <div id="mybutton">
     

     <svg width="3.25em" height="3.25em" viewBox="0 0 269 169" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" aria-label="NAV"><path d="M0 121.359L17.265 78.6299H33.854L16.611 121.359H0Z" fill="white"></path><path d="M213.044 121.359L230.088 78.6299H239.132L222.089 121.359H213.044Z" fill="white"></path><path d="M246.563 121.359L263.604 78.6299H268.407L251.364 121.359H246.563Z" fill="white"></path><path d="M197.36 78.6299H182.344C182.344 78.6299 181.309 78.6299 180.943 79.5439L172.633 104.983L164.33 79.5439C163.964 78.6299 162.923 78.6299 162.923 78.6299H134.051C133.426 78.6299 132.902 79.1519 132.902 79.7729V88.4119C132.902 81.5589 125.61 78.6299 121.34 78.6299C111.778 78.6299 105.377 84.9279 103.384 94.5029C103.276 88.1509 102.748 85.8749 101.037 83.5439C100.251 82.4019 99.1154 81.4419 97.8784 80.6479C95.3314 79.1559 93.0444 78.6299 88.1294 78.6299H82.3584C82.3584 78.6299 81.3154 78.6299 80.9474 79.5439L75.6964 92.5569V79.7729C75.6964 79.1519 75.1764 78.6299 74.5524 78.6299H61.1984C61.1984 78.6299 60.1674 78.6299 59.7924 79.5439L54.3334 93.0749C54.3334 93.0749 53.7884 94.4279 55.0344 94.4279H60.1674V120.212C60.1674 120.852 60.6714 121.359 61.3144 121.359H74.5524C75.1764 121.359 75.6964 120.852 75.6964 120.212V94.4279H80.8564C83.8174 94.4279 84.4444 94.5089 85.5964 95.0459C86.2904 95.3079 86.9154 95.8379 87.2564 96.4489C87.9544 97.7629 88.1294 99.3409 88.1294 103.994V120.212C88.1294 120.852 88.6434 121.359 89.2784 121.359H101.966C101.966 121.359 103.4 121.359 103.967 119.943L106.779 112.993C110.518 118.23 116.672 121.359 124.32 121.359H125.991C125.991 121.359 127.434 121.359 128.005 119.943L132.902 107.815V120.212C132.902 120.852 133.426 121.359 134.051 121.359H147.003C147.003 121.359 148.432 121.359 149.006 119.943C149.006 119.943 154.186 107.082 154.206 106.985H154.214C154.413 105.915 153.061 105.915 153.061 105.915H148.438V83.8469L162.983 119.943C163.551 121.359 164.983 121.359 164.983 121.359H180.284C180.284 121.359 181.724 121.359 182.292 119.943L198.417 80.0139C198.975 78.6299 197.36 78.6299 197.36 78.6299ZM132.902 105.915H124.202C120.739 105.915 117.922 103.111 117.922 99.6438C117.922 96.1828 120.739 93.3608 124.202 93.3608H126.635C130.089 93.3608 132.902 96.1828 132.902 99.6438V105.915ZM125.309 168.942C78.6681 168.942 40.8491 131.125 40.8491 84.477C40.8491 37.824 78.6681 0 125.309 0C171.967 0 209.79 37.824 209.79 84.477C209.79 131.125 171.967 168.942 125.309 168.942Z" fill="white"></path></svg>
      
        <h1 class="iFscnB navds-heading--small">Verktøy<p class="designsystem__ScBodyShort-sc-ztlcd4-9 cWyNNJ navds-body-short">Beta</p></h1>

   
       
        </div>
        </Header.Title>
 

{/*
        {!search &&   
  <Header.Button style={{ marginLeft: "auto" }} onClick={() => setSearch("true")}>
  <Filter
    style={{ fontSize: "1.5rem" }}
    title="Søk"
  />
  </Header.Button>
}


    <Dropdown>
      {!search &&      
    <Header.Button style={{ marginLeft: "auto" }}
      as={Dropdown.Toggle}
     
    >
      <Hamburger
        style={{ fontSize: "1.5rem" }}
        title="Meny"
      />
    </Header.Button>
}

{search &&      
    <Header.Button style={{ marginLeft: "auto" }}
      as={Dropdown.Toggle}
     
    >
      <Hamburger
        style={{ fontSize: "1.5rem" }}
        title="Meny"
      />
    </Header.Button>
}
    <Dropdown.Menu>
      <Dropdown.Menu.GroupedList>
        <Dropdown.Menu.GroupedList.Item>
          Om Webguiden
        </Dropdown.Menu.GroupedList.Item>
        <Dropdown.Menu.GroupedList.Item>
          Tilgjengelighetserklæring
        </Dropdown.Menu.GroupedList.Item>
        <Dropdown.Menu.GroupedList.Item>
          Gi innspill
        </Dropdown.Menu.GroupedList.Item>
      </Dropdown.Menu.GroupedList>
    </Dropdown.Menu>
  </Dropdown>
*/}

      </Header>
        <div className="site-info">
   
            <div className="enonic"> 



            <div class="sokeboks navds-form-field navds-form-field--medium navds-search-field"><label for="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" class="navds-text-field__label navds-label">Verktøysøk </label><>{!search && ( <>| <Link href="#" className="kategorilenke" onClick={() => setSearch("True")}>Vis kategorier</Link></>)}</>
            <div class="navds-search-field__input-wrapper">
              <input id="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" autofocus="autofocus" aria-invalid="false" type="search" role="searchbox" class="navds-search-field__input navds-text-field__input navds-body-short navds-body-medium" value={value} onChange={handleSearchChange}/>
              {!!value && (
              <button onClick={() => setValue("") & setSearch("") & setError("")} class="navds-search-field__clear-button navds-button navds-button--secondary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.385L13.385 12 21 19.615 19.615 21 12 13.385 4.385 21 3 19.615 10.615 12 3 4.385 4.385 3 12 10.615 19.615 3 21 4.385z" fill="currentColor"></path></svg></span></button>
                )}
              <button onClick={() => setError("noresults")} class="navds-search-field__button navds-button navds-button--primary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 0a9 9 0 017.039 14.61L24 22.57 22.571 24l-7.962-7.961A9 9 0 119 0zm0 2a7 7 0 100 14A7 7 0 009 2z" fill="currentColor"></path></svg> Søk</span></button></div>
                <div id="searchfield-error-60202ff8-10db-4da7-985e-542dd3957b0e" aria-relevant="additions removals" aria-live="polite"></div></div>


            {/*
            {!value && !search && siteUrl.match('/person/pensjon/') &&
              <div className="rediger">
              Redaktør: <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/686e93e9-0fab-46d3-9a9c-975a8b502bed">PO Pensjon</Link>
              </div>
              } 
           
           <label for="smile" class="navds-text-field__label navds-label">Verktøysøk {!search && ( <span>| <Link className="kategorilenke" onClick={() => setSearch("True")}>Vis kategorier</Link></span>)}</label>
           
           <SearchField className="sokeboks">
  <SearchField.Input id="smile"autofocus="autofocus" value={value} onChange={handleSearchChange} />
    
  {!value && !search && (
    <SearchField.Clear title="Vis kategorier" onClick={() => setSearch("True")}>
      <Filter />
    </SearchField.Clear>
    
  )} 
  {!!value && (
    <SearchField.Clear onClick={() => setValue("") & setSearch("")}>
      <Close />
    </SearchField.Clear>
  )}
  <SearchField.Button>
    <Search /> Søk
  </SearchField.Button>
</SearchField>
*/}

{error && !value &&
    <div>
      <Alert variant="error">
        <Heading spacing size="small" level="3">
          Søkefeltet kan ikke være tomt. Forsøk å søke etter et verktøy.
        </Heading>
        <p>Dersom noe er uklart <Link target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">tips oss gjerne</Link> så forbedrer vi løsningen. Hilsen Team ResearchOps.</p>
      </Alert>
      <br />
    </div>        
}


{search && !value &&
<>
<Label className="kataloglabel" size="medium">Kategorier</Label>

<Button className="rediger" id="searchsuggestion" onClick={() => setValue("ANALYSE")}>Analyse</Button>
<Button className="rediger" id="searchsuggestion" onClick={() => setValue("DESIGN")}>Design</Button>
<Button className="rediger" id="searchsuggestion" onClick={() => setValue("KATALOG")}>Kataloger</Button>
<Button className="rediger" id="searchsuggestion" onClick={() => setValue("NETTSIDER")}>NAV relaterte nettsider</Button>

</>
}

{!value && !search &&
<div>
{siteUrl.match(/deterdinpensjon.no/) &&
<LinkPanel className="rediger" href="https://www.deterdinpensjon.no/wp-login.php" target="_blank" rel="noreferrer">
  <LinkPanel.Title>
    Rediger denne siden
  </LinkPanel.Title>
</LinkPanel>
}

{siteUrl.match('www.nav.no/sosialhjelp') &&
    <div>
        <LinkPanel className="rediger" href="https://sosialhjelp-veiviser.sanity.studio/production/desk" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Rediger denne siden
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}

{siteUrl.match('familie.nav.no') &&
    <div>
        <LinkPanel className="rediger" href="https://portal-admin.oera.no/admin/tool" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Rediger denne siden
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}

{siteUrl.match('www.nav.no/okonomi-og-gjeld') &&
    <div>
        <LinkPanel className="rediger" href="https://www.nav.no/okonomi-og-gjeld/studio/desk" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Rediger denne siden
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}

{siteUrl.match('www.nav.no/arbeid') &&
    <div>
        <LinkPanel className="rediger" href="https://nav-inkludering.sanity.studio/desk" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Rediger denne siden
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}


{siteUrl.match('siteimprove.com') &&
    <div>
      {/*  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C019SQF5AD8" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #siteimprove-brukere
        </LinkPanel.Description>
      </LinkPanel>
*/}
      <Panel border className="rediger">
      <Heading spacing size="small" level="2">
        Siteimprove
      </Heading>
      <p className="rediger">Siteimprove gir oss en oversikt over problemer og forbedringsområder i forhold til: kvalitetssikring av innhold, universell utforming og søketrafikk.</p>
      <ul>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C019SQF5AD8">Slackdialog</Link></li>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02UGFS2J4B">Kurs og opplæring</Link></li>
        <li><Link target="_blank" href="https://forms.office.com/r/rsWY1L0C1d?lang=nb-NO">Tilganger</Link></li>
      </ul>
      </Panel>
    </div>        
}

{siteUrl.match('amplitude.com') &&
    <div>
      {/*
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CMK1SCBP1" target="_blank" rel="noreferrer">
        <LinkPanel.Title>ƒ
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #amplitude
        </LinkPanel.Description>
      </LinkPanel>

      */}
      <Panel border className="rediger">
      <Heading spacing size="small" level="2">
        Amplitude
      </Heading>
      <p className="rediger">Amplitude ble kjøpt inn for å måle hvordan folk bruker våre tjenester og kan brukes både i frontend og backend-applikasjoner.</p>
      <ul>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CMK1SCBP1">Slackdialog</Link></li>
        <li><Link target="_blank" href="https://old-design-nav.vercel.app/god-praksis/amplitude">Veiledninger</Link></li>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02UGFS2J4B">Kurs og opplæring</Link></li>
        <li><Link target="_blank" href="https://forms.office.com/r/w5tzpk04T7?lang=nb-NO">Tilganger</Link></li>
      </ul>
      </Panel>
    </div>        
}

{siteUrl.match('(.*?).google.com') && 
    <div>
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CB75V4761" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #analytics-diskusjon
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}

{siteUrl.match('hotjar.com') && 
    <div>
      {/*
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CB75V4761" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #analytics-diskusjon
        </LinkPanel.Description>
      </LinkPanel>

    */}
      <Panel border className="rediger">
      <Heading spacing size="small" level="2">
        Hotjar
      </Heading>
      <p className="rediger">Hotjar brukes til å gjennomføre spørreundersøkelser på nettsidene. Det kan også brukes til å ta opptak av hvordan folk navigerer på sidene, og se forskjeller i bruksmønster på mobil og p</p>
      <ul>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CB75V4761">Slackdialog</Link></li>
        <li><Link target="_blank" href="https://old-design-nav.vercel.app/god-praksis/hotjar">Veiledninger</Link></li>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02UGFS2J4B">Kurs og opplæring</Link></li>
        <li><Link target="_blank" href="https://forms.office.com/r/851T0ErnNy?lang=nb-NO">Tilganger</Link></li>
      </ul>
      </Panel>
    </div>        
}

{siteUrl.match('taskanalytics.com') && 
    <div>
        {/*
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CB75V4761" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #analytics-diskusjon
        </LinkPanel.Description>
      </LinkPanel>
    */}
      <Panel border className="rediger">
      <Heading spacing size="small" level="2">
        Task Analytics
      </Heading>
      <p className="rediger">Task Analytics er et verktøy laget for å utføre målinger med toppoppgavemetoden.</p>
      <ul>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CB75V4761">Slackdialog</Link></li>
        <li><Link target="_blank" href="https://old-design-nav.vercel.app/god-praksis/task-analytics">Veiledninger</Link></li>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02UGFS2J4B">Kurs og opplæring</Link></li>
        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02UGFS2J4B">Tilganger</Link></li>
      </ul>
      </Panel>
    </div>          
}

{siteUrl.match('figma.com') && 
    <div>
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C01AE0M1421" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #support-figma
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}

{siteUrl.match('mural.co') && 
    <div>
      <Panel border className="rediger">
<Heading spacing size="small" level="2">
  Mural
</Heading>
<p className="rediger">Mural er et skybasert verktøy for aktivt samarbeid, en digital whiteboard som ligger tilgjengelig for deltagerne ute på internett.</p>
<ul>
  <li><Link target="_blank" href="https://nav-it.slack.com/archives/C013GARULKE">Slackdialog</Link></li>
  <li><Link target="_blank" href="https://www.youtube.com/watch?v=mhslj4-OSRM">Introduksjonsvideo</Link></li>
  <li><Link target="_blank" href="  https://myapplications.microsoft.com/">Tilganger</Link></li>
</ul>
</Panel>
    </div>        
}

{siteUrl.match('stackoverflow.com') && 
    <div>
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C60FFACN5" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #utviklerrommet
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}

{siteUrl.match('github') && 
    <div>
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C60FFACN5" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #utviklerrommet
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}

{siteUrl.match('uutilsynet.no') && 
    <div>
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C7MANSGLS" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #nav-uu
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}

{siteUrl.match('w3.org') && 
    <div>
        <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C7MANSGLS" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Slackdialog
        </LinkPanel.Title>
        <LinkPanel.Description>
        #nav-uu
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}
        
{siteRedirectUrl && siteUrl.match(/www.nav.no/) &&
    <div>
            
      <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Rediger denne siden
        </LinkPanel.Title>
        <LinkPanel.Description>
        <Alert variant="info" inline size="small" >Krever at du er <Link target="_blank" href="https://portal-admin.oera.no/admin/tool">innlogget i Enonic</Link></Alert>
      </LinkPanel.Description>
      </LinkPanel>
    
    </div>        
}

{siteRedirectUrl && siteUrl.match('design.nav.no/designsystem') &&
    <div>
      <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Rediger denne siden
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}

{siteUrl.match(/design.nav.no/) && !siteUrl.match('design.nav.no/designsystem') &&
    <LinkPanel className="rediger" href="https://verktoykasse.sanity.studio/desk" target="_blank" rel="noreferrer">
      <LinkPanel.Title>
        Rediger denne siden
      </LinkPanel.Title>
    </LinkPanel>
    }

{siteRedirectUrl && siteUrl.match(/idebanken.org/) &&
    <div>
      <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Rediger denne siden
        </LinkPanel.Title>
        <LinkPanel.Description>
        <Alert variant="info" inline size="small" >Krever at du er <Link target="_blank" href="https://idebanken-xp7prod.customer.enonic.io/admin/tool">innlogget i Enonic</Link></Alert>
      </LinkPanel.Description>
      </LinkPanel>
    </div>        
}
{/*
{siteUrl.match('/designsystem/side/komponenter') &&
    <div>
        <LinkPanel className="rediger" href="https://grafana.nais.io/d/I_jLx_07k/designsystemet-bruk-av-komponenter-i-nav?orgId=1" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Monitorering av komponentene
        </LinkPanel.Title>
        <LinkPanel.Description>
        Monitorering av komponentene
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}


{siteUrl.match('design.nav.no') &&
    <div>
    <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C7NE7A8UF" target="_blank" rel="noreferrer">
    <LinkPanel.Title>
    Slackdialog
    </LinkPanel.Title>
    <LinkPanel.Description>
    #designsystem
    </LinkPanel.Description>
  </LinkPanel>
</div>  
}

{siteUrl.match('design.nav.no') &&
    <div>
    <LinkPanel className="rediger" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23" target="_blank" rel="noreferrer">
    <LinkPanel.Title>
    Teamkatalogen
    </LinkPanel.Title>
    <LinkPanel.Description>
    Designsystemet
    </LinkPanel.Description>
  </LinkPanel>
</div>  
}
*/}


{siteUrl.match('design.nav.no') && !siteUrl.match('design.nav.no/designsystem') &&
<Panel border className="rediger">
<Heading spacing size="small" level="2">
  Verktøykassa
</Heading>
<ul>
  <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slackdialog</Link></li>
  <li><Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Teamkatalogen</Link></li>
  <li><Link target="_blank" href="https://github.com/navikt/Designsystemet">Github</Link></li>
</ul>
</Panel>
}


{siteUrl.match('design.nav.no/designsystem') &&
<Panel border className="rediger">
<Heading spacing size="small" level="2">
  Designsystemet
</Heading>
<ul>
  <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slackdialog</Link></li>
  <li><Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Teamkatalogen</Link></li>
  <li><Link target="_blank" href="https://github.com/navikt/Designsystemet">Github</Link></li>
  <li><Link target="_blank" href="https://grafana.nais.io/d/I_jLx_07k/designsystemet-bruk-av-komponenter-i-nav?orgId=1">Monitorering av komponenter</Link></li>
</ul>
</Panel>
}

{siteUrl.match('teknologiradaren.labs.nais.io') &&
    <div>
    <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CEHSHMNBF" target="_blank" rel="noreferrer">
    <LinkPanel.Title>
    Slackdialog
    </LinkPanel.Title>
    <LinkPanel.Description>
    #teknologiradar
    </LinkPanel.Description>
  </LinkPanel>
</div>  
}

{siteUrl.match('teamkatalog') &&
    <div>
    <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CG2S8D25D" target="_blank" rel="noreferrer">
    <LinkPanel.Title>
    Slackdialog
    </LinkPanel.Title>
    <LinkPanel.Description>
    #teamkatalogen
    </LinkPanel.Description>
  </LinkPanel>
</div>  
}


{siteUrl.match('lovdata.no/nav/nav-loven') &&
    <div>
      <LinkPanel className="rediger" href="https://lovdata.no/pro/#document/NL/lov/2006-06-16-20" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Åpne i Lovdata Pro
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}

{siteUrl.match('lovdata.no/nav/folketrygdloven') &&
    <div>
      <LinkPanel className="rediger" href="https://lovdata.no/pro/#document/NL/lov/1997-02-28-19" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Åpne i Lovdata Pro
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}

{siteRedirectUrl && siteUrl.match('lovdata.no/dokument') &&
    <div>
      <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Åpne i Lovdata Pro
        </LinkPanel.Title>
      </LinkPanel>
    </div>        
}

{!value && !search && siteUrl.match('pensjon') &&
<Panel border className="rediger">
<Heading spacing size="small" level="2">
PO Pensjon
</Heading>
<ul>
  <li><Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/686e93e9-0fab-46d3-9a9c-975a8b502bed">Teamkatalogen</Link></li>
  <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02J5RJ7LPJ">Slackdialog om innhold</Link></li>
  <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35453259282/Dashboard/Index">Siteimprove</Link></li>
  <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/5ba8k03/all">Amplitude</Link></li>
</ul>
</Panel>
} 

{!value && !search && siteUrl.match('aap') &&
<Panel border className="rediger">
<Heading spacing size="small" level="2">
PO AAP
</Heading>
<ul>
  <li><Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/fd6b7cda-0659-46c8-ad3e-a78f96689022">Teamkatalogen</Link></li>
  <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01KEH6C05S">Slackdialog om innhold</Link></li>
  <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30010109885/Dashboard/Index">Siteimprove</Link></li>
  <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/kn0mtnk/all">Amplitude</Link></li>
</ul>
</Panel>
} 

{!value && !search && siteUrl.match('familie') &&
<Panel border className="rediger">
<Heading spacing size="small" level="2">
PO Familie
</Heading>
<ul>
  <li><Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">Teamkatalogen</Link></li>
  <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link></li>
</ul>
</Panel>
} 

{/*
{!value && !search && siteUrl.match('arbeid') &&
<Panel border className="rediger">
<Heading spacing size="small" level="2">
PO Arbeid
</Heading>
<ul>
  <li><Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">Teamkatalogen</Link></li>
  <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01KEH6C05S">Slackdialog om innhold</Link></li>
  <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35336718942/Dashboard/Index">Siteimprove</Link></li>
</ul>
</Panel>
} 
*/}

{!value && !search && siteUrl.match('sykmeldt') &&
<Panel border className="rediger">
<Heading spacing size="small" level="2">
PO Helse
</Heading>
<ul>
  <li><Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/6b149078-927b-4570-a1ce-97bbb9499fb6">Teamkatalogen</Link></li>
  <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02PPGC3DB6">Slackdialog om innhold</Link></li>
  <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35337084802/Dashboard/Index">Siteimprove</Link></li>
  <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/jp7wtu8/all">Amplitude</Link></li>
</ul>
</Panel>
} 


{/*
{siteUrl.match('amplitude.com') &&
    <div>
        <LinkPanel className="rediger" href="https://old-design-nav.vercel.app/god-praksis/amplitude" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        God praksis
        </LinkPanel.Title>
        <LinkPanel.Description>
        Amplitude
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}

{siteUrl.match('hotjar.com') &&
    <div>
        <LinkPanel className="rediger" href="https://old-design-nav.vercel.app/god-praksis/hotjar" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        God praksis
        </LinkPanel.Title>
        <LinkPanel.Description>
        Hotjar
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}

{siteUrl.match('taskanalytics.com') &&
    <div>
        <LinkPanel className="rediger" href="https://old-design-nav.vercel.app/god-praksis/task-analytics" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        God praksis
        </LinkPanel.Title>
        <LinkPanel.Description>
        Task Analytics
        </LinkPanel.Description>
      </LinkPanel>
    </div>        
}
*/}
{/*
{siteUrl.match(/nav.no/) && !siteUrl.match('siteimprove.com') &&
<Accordion className="rediger">
    <Accordion.Item>
      <Accordion.Header id="myaccordion">
        Analyseverktøy
      </Accordion.Header>
      <Accordion.Content>
      <LinkPanel href="https://analytics.amplitude.com/nav/workspace" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Amplitude
        </LinkPanel.Title>
      </LinkPanel>
      <LinkPanel href="https://my2.siteimprove.com/Auth/Saml2/6274809" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Siteimprove
        </LinkPanel.Title>
      </LinkPanel>
      <LinkPanel href="https://insights.hotjar.com/sites/148751/dashboard" target="_blank" rel="noreferrer">
        <LinkPanel.Title>
        Hotjar
        </LinkPanel.Title>
      </LinkPanel>
      </Accordion.Content>
    </Accordion.Item>   
    </Accordion>      
}*/}

{siteUrl.match('sketch') &&
    <div>
      <Alert variant="warning">
        <Heading spacing size="small" level="3">
          Teknologiradarvarsel
        </Heading>
        <p>Dette verktøyet har fått status "Hold" i Teknologiradaren: "Dette er ting vi ikke har tro på å bruke (mer av)."</p>
        <p>For mer informasjon <Link target="_blank" href="https://teknologiradaren.labs.nais.io/">se Teknologiradaren.</Link></p>
      </Alert>
      <br />
    </div>        
}






</div>
}

{value &&
        filtered.map((tool) => {
          return (
              <LinkPanel key={uuidv4()} className="rediger" href={tool.link} target="_blank" rel="noopener noreferrer">
                <LinkPanel.Title>
                  {tool.name}
                </LinkPanel.Title>
              </LinkPanel>
          );
        })}

{error && value &&
    <div>
      <Alert variant="error">
        <Heading spacing size="small" level="3">
          Ingen resultater funnet
        </Heading>
        <p>Vi legger stadig til nye verktøy, <Link target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">tips oss gjerne</Link> hva du forsøkte å søke etter, så legger vi det til. Hilsen Team ResearchOps.</p>
      </Alert>
      <br />
    </div>        
}
        </div>

      <div className="personvern"><Link rel="noopener noreferrer" className="personvernlenke" target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">Gi innspill</Link><Link rel="noopener noreferrer" target="_blank" href="https://www.nav.no/no/nav-og-samfunn/om-nav/personvern-i-arbeids-og-velferdsetaten">Personvern</Link></div>
    </div>
    </div>
  );
}


export default App;