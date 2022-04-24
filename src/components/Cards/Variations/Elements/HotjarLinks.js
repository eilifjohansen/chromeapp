import React from "react";
import { Link } from "@navikt/ds-react";

function HotjarLinks(props) {
    const hotjarHeatLink = "https://insights.hotjar.com/sites/118350/heatmap/view?url=" + encodeURI(props.siteUrl) + '&match=simple_match&device=desktop&type=click&filters=%7B"DAYS_AGO":%7B"created":90%7D%7D'
    const hotjarRecordingLink = 'https://insights.hotjar.com/sites/118350/playbacks/list?sort_by=-relevance_score&filters=%7B%22AND%22:%5B%7B%22DAYS_AGO%22:%7B%22created%22:90%7D%7D,%7B%22CONTAINS%22:%7B%22all_page_paths%22:%22' + encodeURI(props.siteUrl) + '%22%7D%7D%5D%7D'
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.match(/www.nav.no/) && !siteUrl.match('no/arbeid') &&
                <>
                    <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> / <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                </>
            }
        </>
    );
}

export default HotjarLinks;