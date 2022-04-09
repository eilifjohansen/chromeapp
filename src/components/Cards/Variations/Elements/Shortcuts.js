import React from "react";
import { Link } from "@navikt/ds-react";
import { AmplitudeLinks, SiteimproveLinks } from "../../Variations"

function Shortcuts(props) {
    const siteUrl = props.siteUrl;
    return (
        <ul>
            <AmplitudeLinks siteUrl={siteUrl} />
            <SiteimproveLinks siteUrl={siteUrl} />
            <li><Link target="_blank" href="https://insights.hotjar.com/sites/118350/surveys/list">Hotjar</Link> (undersøkelser)</li>
            <li><Link target="_blank" href="https://admin.taskanalytics.com/org/12559963/dashboard">Task Analytics</Link> (toppoppgaver)</li>
            {/* <li><Link target="_blank" href="https://github.com/navikt">Github</Link> (NAV IT kildekode)</li>  */}
            {/* <li><Link target="_blank" href="https://aksel.nav.no/">Aksel</Link> (Produktutvikling i praksis)</li> */}
        </ul>
    );
}

export default Shortcuts;