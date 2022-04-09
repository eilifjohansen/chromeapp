import React, { useState, useEffect } from "react";
import { LinkPanel, Accordion } from "@navikt/ds-react";

function AnalyseSiteCards(props) {
  const siteUrl = props.siteUrl;
  const [siteRedirectUrl, setSiteRedirectUrl] = useState("");
  useEffect(() => {
    if (siteUrl.match('lovdata.no/dokument') && !siteUrl.match(/siteimprove.com/)) {
      var smile = siteUrl.replace('dokument', 'pro');
      setSiteRedirectUrl(smile);
      console.log(smile)
    }
  })
  return (
    <>
      <Accordion className="rediger">
        <Accordion.Item>
          <Accordion.Header id="myaccordion">
            Analyser siden
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
    </>
  );
}

export default AnalyseSiteCards;