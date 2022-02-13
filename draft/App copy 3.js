/*global chrome*/
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { LinkPanel, Accordion, Link, Alert, SearchField, Heading, Button, Label, Panel } from "@navikt/ds-react";
import { System, Search, Close, Hamburger, Filter } from "@navikt/ds-icons";
import JSONDATA from "./tools.json";
import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header";
import Footer from "./components/Footer";

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

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // Get tab info
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (activeTab) => {
        const siteURL = activeTab[0].url
        setSiteUrl(activeTab[0].url);

        if (siteURL.match(/www.nav.no/) && !siteURL.match(/siteimprove.com/)) {
          axios.get(siteURL)
            .then(response => {
              console.log("Status: ", response.status);
              //console.log("Data: ", response.data);
              if (response.data.match(/"_id":"(.*?)"/)) {
                var smile = response.data.match(/"_id":"(.*?)"/)[0];
                var smile2 = smile.replace('"_id":"', '');
                var smile3 = smile2.replace('"', '');
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

        if (siteURL.match('lovdata.no/dokument') && !siteURL.match(/siteimprove.com/)) {
          var smile = siteURL.replace('dokument', 'pro');
          setSiteRedirectUrl(smile);
          console.log(smile)
        }

        if (siteURL.match(/www.idebanken.org/) && !siteURL.match(/siteimprove.com/)) {
          axios.get(siteURL)
            .then(response => {
              console.log("Status: ", response.status);
              //console.log("Data: ", response.data);
              if (response.data.match(/name="pageId" content="(.*?)"/)) {
                var smile = response.data.match(/name="pageId" content="(.*?)"/)[0];
                var smile2 = smile.replace('name="pageId" content="', '');
                var smile3 = smile2.replace('"', '');
                var smile4 = "https://idebanken-xp7prod.customer.enonic.io/admin/tool/com.enonic.app.contentstudio/main#/default/edit/" + smile3
                const siteRedirectUrl = (smile4);
                setSiteRedirectUrl(siteRedirectUrl);
              } else {
                setSiteError("Sanity?");
              }

            }).catch(error => {
              console.error('Something went wrong!', error);
            });
        }

        if (siteURL.match('design.nav.no/designsystem') && !siteURL.match(/siteimprove.com/)) {
          axios.get(siteURL)
            .then(response => {
              console.log("Status: ", response.status);
              //console.log("Data: ", response.data);
              if (response.data.match(/ds_component_page/)) {
                if (response.data.match(/"_id":"(.*?)"/)) {
                  var smile = response.data.match(/"_id":"(.*?)"/)[0];
                  var smile2 = smile.replace('"_id":"', '');
                  var smile3 = smile2.replace('"', '');
                  var smile4 = "https://verktoykasse.sanity.studio/desk/designsystemet;innhold;komponentArtikler;publisert;" + smile3
                  const siteRedirectUrl = (smile4);
                  setSiteRedirectUrl(siteRedirectUrl);
                } else {
                  setSiteError("Sanity?");
                }
              } else {
                if (response.data.match(/"_id":"(.*?)"/)) {
                  var smile = response.data.match(/"_id":"(.*?)"/)[0];
                  var smile2 = smile.replace('"_id":"', '');
                  var smile3 = smile2.replace('"', '');
                  var smile4 = "https://verktoykasse.sanity.studio/desk/designsystemet;innhold;artikler;publisert;" + smile3
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
      <Header />
      <div className="site-info">
        <div className="enonic">

          <div class="sokeboks navds-form-field navds-form-field--medium navds-search-field"><label for="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" class="navds-text-field__label navds-label">Verktøysøk </label><>{!search && (<>| <Link href="#" className="kategorilenke" onClick={() => setSearch("True")}>Vis kategorier</Link></>)}</>
            <div class="navds-search-field__input-wrapper">
              <input id="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" autofocus="autofocus" aria-invalid="false" type="search" role="searchbox" class="navds-search-field__input navds-text-field__input navds-body-short navds-body-medium" value={value} onChange={handleSearchChange} />
              {!!value && (
                <button onClick={() => setValue("") & setSearch("") & setError("")} class="navds-search-field__clear-button navds-button navds-button--secondary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.385L13.385 12 21 19.615 19.615 21 12 13.385 4.385 21 3 19.615 10.615 12 3 4.385 4.385 3 12 10.615 19.615 3 21 4.385z" fill="currentColor"></path></svg></span></button>
              )}
              <button onClick={() => setError("noresults")} class="navds-search-field__button navds-button navds-button--primary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 0a9 9 0 017.039 14.61L24 22.57 22.571 24l-7.962-7.961A9 9 0 119 0zm0 2a7 7 0 100 14A7 7 0 009 2z" fill="currentColor"></path></svg> Søk</span></button></div>
            <div id="searchfield-error-60202ff8-10db-4da7-985e-542dd3957b0e" aria-relevant="additions removals" aria-live="polite"></div></div>

          {error && !value &&
              <Alert className="rediger" variant="error">
                <Heading spacing size="small" level="3">
                  Søkefeltet kan ikke være tomt. Forsøk å søke etter et verktøy.
                </Heading>
                <p>Dersom noe er uklart <Link target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">tips oss gjerne</Link> så forbedrer vi løsningen. Hilsen Team ResearchOps.</p>
              </Alert>
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
                  <LinkPanel className="rediger" href="https://sosialhjelp-veiviser.sanity.studio/production/desk" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Rediger denne siden
                    </LinkPanel.Title>
                  </LinkPanel>
              }

              {siteUrl.match('familie.nav.no') &&
                  <LinkPanel className="rediger" href="https://portal-admin.oera.no/admin/tool" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Rediger denne siden
                    </LinkPanel.Title>
                  </LinkPanel>
              }

              {siteUrl.match('www.nav.no/okonomi-og-gjeld') &&
                  <LinkPanel className="rediger" href="https://www.nav.no/okonomi-og-gjeld/studio/desk" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Rediger denne siden
                    </LinkPanel.Title>
                  </LinkPanel>
              }

              {siteUrl.match('www.nav.no/arbeid') &&
                  <LinkPanel className="rediger" href="https://nav-inkludering.sanity.studio/desk" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Rediger denne siden
                    </LinkPanel.Title>
                  </LinkPanel>
              }

              {siteUrl.match('siteimprove.com') &&
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
              }

              {siteUrl.match('amplitude.com') &&
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
              }

              {siteUrl.match('(.*?).google.com') &&
                  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CB75V4761" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                      #analytics-diskusjon
                    </LinkPanel.Description>
                  </LinkPanel>
              }

              {siteUrl.match('hotjar.com') &&
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
              }

              {siteUrl.match('taskanalytics.com') &&
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
              }

              {siteUrl.match('figma.com') &&
                <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C01AE0M1421" target="_blank" rel="noreferrer">
                  <LinkPanel.Title>
                    Slackdialog
                  </LinkPanel.Title>
                  <LinkPanel.Description>
                    #support-figma
                  </LinkPanel.Description>
                </LinkPanel>
              }

              {siteUrl.match('mural.co') &&
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
              }

              {siteUrl.match('stackoverflow.com') &&
                  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C60FFACN5" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                      #utviklerrommet
                    </LinkPanel.Description>
                  </LinkPanel>
              }

              {siteUrl.match('github') &&
                  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C60FFACN5" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                      #utviklerrommet
                    </LinkPanel.Description>
                  </LinkPanel>
              }

              {siteUrl.match('uutilsynet.no') &&
                  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C7MANSGLS" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                      #nav-uu
                    </LinkPanel.Description>
                  </LinkPanel>
              }

              {siteUrl.match('w3.org') &&
                  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C7MANSGLS" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                      #nav-uu
                    </LinkPanel.Description>
                  </LinkPanel>
              }

              {siteRedirectUrl && siteUrl.match(/www.nav.no/) &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                  <LinkPanel.Title>
                    Rediger denne siden
                  </LinkPanel.Title>
                  <LinkPanel.Description>
                    <Alert variant="info" inline size="small" >Krever at du er <Link target="_blank" href="https://portal-admin.oera.no/admin/tool">innlogget i Enonic</Link></Alert>
                  </LinkPanel.Description>
                </LinkPanel>
              }

              {siteRedirectUrl && siteUrl.match('design.nav.no/designsystem') &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                  <LinkPanel.Title>
                    Rediger denne siden
                  </LinkPanel.Title>
                </LinkPanel>
              }

              {siteUrl.match(/design.nav.no/) && !siteUrl.match('design.nav.no/designsystem') &&
                <LinkPanel className="rediger" href="https://verktoykasse.sanity.studio/desk" target="_blank" rel="noreferrer">
                  <LinkPanel.Title>
                    Rediger denne siden
                  </LinkPanel.Title>
                </LinkPanel>
              }

              {siteRedirectUrl && siteUrl.match(/idebanken.org/) &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                  <LinkPanel.Title>
                    Rediger denne siden
                  </LinkPanel.Title>
                  <LinkPanel.Description>
                    <Alert variant="info" inline size="small" >Krever at du er <Link target="_blank" href="https://idebanken-xp7prod.customer.enonic.io/admin/tool">innlogget i Enonic</Link></Alert>
                  </LinkPanel.Description>
                </LinkPanel>
              }

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
                  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CEHSHMNBF" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                      #teknologiradar
                    </LinkPanel.Description>
                  </LinkPanel>
              }

              {siteUrl.match('teamkatalog') &&
                  <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CG2S8D25D" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                      #teamkatalogen
                    </LinkPanel.Description>
                  </LinkPanel>
              }

              {siteUrl.match('lovdata.no/nav/nav-loven') &&
                  <LinkPanel className="rediger" href="https://lovdata.no/pro/#document/NL/lov/2006-06-16-20" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Åpne i Lovdata Pro
                    </LinkPanel.Title>
                  </LinkPanel>
              }

              {siteUrl.match('lovdata.no/nav/folketrygdloven') &&
                  <LinkPanel className="rediger" href="https://lovdata.no/pro/#document/NL/lov/1997-02-28-19" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Åpne i Lovdata Pro
                    </LinkPanel.Title>
                  </LinkPanel>
              }

              {siteRedirectUrl && siteUrl.match('lovdata.no/dokument') &&
                  <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                      Åpne i Lovdata Pro
                    </LinkPanel.Title>
                  </LinkPanel>
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

              {siteUrl.match('sketch') &&
                  <Alert className="rediger" variant="warning">
                    <Heading spacing size="small" level="3">
                      Teknologiradarvarsel
                    </Heading>
                    <p>Dette verktøyet har fått status "Hold" i Teknologiradaren: "Dette er ting vi ikke har tro på å bruke (mer av)."</p>
                    <p>For mer informasjon <Link target="_blank" href="https://teknologiradaren.labs.nais.io/">se Teknologiradaren.</Link></p>
                  </Alert>
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
              <Alert className="rediger" variant="error">
                <Heading spacing size="small" level="3">
                  Ingen resultater funnet
                </Heading>
                <p>Vi legger stadig til nye verktøy, <Link target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">tips oss gjerne</Link> hva du forsøkte å søke etter, så legger vi det til. Hilsen Team ResearchOps.</p>
              </Alert>
          }
        </div>

          <Footer />
      </div>
    </div>
  );
}

export default App;