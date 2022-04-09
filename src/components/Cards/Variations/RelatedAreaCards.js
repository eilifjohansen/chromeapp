import React from "react";
import { Panel, Heading } from "@navikt/ds-react";
import { Shortcuts } from "../Variations"

function RelatedSiteCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {!siteUrl.match('www.nav.no') && !siteUrl.match('aksel.nav.no') && !siteUrl.match('arbeidsplassen.nav') && !siteUrl.match('deterdinpensjon.no') && !siteUrl.match('idebanken.org') &&
                <Panel border className="rediger">
                    <Heading spacing className="ardsubtitlesolo" size="xsmall" level="2">Snarveier</Heading>
                    <Shortcuts siteUrl={siteUrl} />
                </Panel>
            }
        </>
    );
}

export default RelatedSiteCards;