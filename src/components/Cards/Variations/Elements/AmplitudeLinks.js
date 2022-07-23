import React from "react";
import {LinkPanel} from "@navikt/ds-react";

function AmplitudeLinks() {
    return (<LinkPanel className="rediger" href="https://analytics.eu.amplitude.com/nav/team-spaces?source=sidebar"
                       target="_blank" rel="noreferrer">
            <LinkPanel.Title>
                Webstatistikk
            </LinkPanel.Title>
        </LinkPanel>);
}

export default AmplitudeLinks;