import React from "react";
import {EditSiteLinks, AmplitudeLinks} from "."

function SiteCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.match('www.nav.no') &&
                <>
                    <EditSiteLinks siteUrl={siteUrl}/>
                    {/*<AmplitudeLinks siteUrl={siteUrl}/>*/}
                </>
            }

            {siteUrl.match('idebanken.org') &&
                <EditSiteLinks siteUrl={siteUrl}/>
            }

            {siteUrl.match('deterdinpensjon.no') &&
                <EditSiteLinks siteUrl={siteUrl}/>
            }

            {siteUrl.match('aksel.nav.no') &&
                <EditSiteLinks siteUrl={siteUrl}/>

            }
        </>
    );
}

export default SiteCards;