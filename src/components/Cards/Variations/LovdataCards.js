import React, { useState, useEffect } from "react";
import { LinkPanel } from "@navikt/ds-react";

function LovdataCars(props) {
    const siteUrl = props.siteUrl;
    const [siteRedirectUrl, setSiteRedirectUrl] = useState("");
    useEffect(() => {
        if (siteUrl.match('lovdata.no/dokument') && !siteUrl.match(/siteimprove.com/)) {
            var path = siteUrl.replace('dokument', 'pro');
            setSiteRedirectUrl(path);
        }
    })
    return (
        <>
            {siteUrl.match('lovdata.no/nav/nav-loven') &&
                <LinkPanel className="rediger" href="https://lovdata.no/pro/#document/NL/lov/2006-06-16-20" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Lovdata Pro
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteUrl.match('lovdata.no/nav/folketrygdloven') &&
                <LinkPanel className="rediger" href="https://lovdata.no/pro/#document/NL/lov/1997-02-28-19" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Lovdata Pro
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteRedirectUrl && siteUrl.match('lovdata.no/dokument') &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Lovdata Pro
                    </LinkPanel.Title>
                </LinkPanel>
            }
        </>
    );
}

export default LovdataCars;