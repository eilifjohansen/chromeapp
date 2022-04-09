import React from "react";
import { Panel, Heading, Link } from "@navikt/ds-react";
import { CardHeading, EditSiteLinks, HotjarLinks, AmplitudeLinks, SiteimproveLinks } from "../Variations"

function SiteAreaCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.match('www.nav.no') &&
                <Panel border className="rediger">
                    <CardHeading className="rediger" siteUrl={siteUrl} />
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <AmplitudeLinks siteUrl={siteUrl} />
                        <SiteimproveLinks siteUrl={siteUrl} />
                    </ul>
                </Panel>
            }
        </>
    );
}

export default SiteAreaCards;