import React, { useState, useEffect } from "react";
import { Link } from "@navikt/ds-react";
import axios from 'axios';

function EditSiteCars(props) {
    const siteUrl = props.siteUrl;
    const [siteRedirectUrl, setSiteRedirectUrl] = useState("");
    const [siteError, setSiteError] = useState("");

    useEffect(() => {
        if (siteUrl.match(/www.nav.no/) && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
                .then(response => {
                    console.log("Status: ", response.status);
                    //console.log("Data: ", response.data);
                    if (response.data.match(/"_id":"(.*?)"/)) {
                        var step = response.data.match(/"_id":"(.*?)"/)[0];
                        var step2 = step.replace('"_id":"', '');
                        var step3 = step2.replace('"', '');
                        var step4 = "https://portal-admin.oera.no/admin/tool/com.enonic.app.contentstudio/main#/default/edit/" + step3
                        console.log(step4)
                        const siteRedirectUrl = (step4);
                        setSiteRedirectUrl(siteRedirectUrl);
                    } else {
                        setSiteError("Sanity?");
                    }
                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }

        if (siteUrl.match(/www.idebanken.org/) && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
                .then(response => {
                    console.log("Status: ", response.status);
                    //console.log("Data: ", response.data);
                    if (response.data.match(/name="pageId" content="(.*?)"/)) {
                        var step = response.data.match(/name="pageId" content="(.*?)"/)[0];
                        var step2 = step.replace('name="pageId" content="', '');
                        var step3 = step2.replace('"', '');
                        var step4 = "https://idebanken-xp7prod.customer.enonic.io/admin/tool/com.enonic.app.contentstudio/main#/default/edit/" + step3
                        const siteRedirectUrl = (step4);
                        setSiteRedirectUrl(siteRedirectUrl);
                    } else {
                        setSiteError("Sanity?");
                    }

                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }

        if (siteUrl.match('aksel.nav.no/designsystem') && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
                .then(response => {
                    console.log("Status: ", response.status);
                    //console.log("Data: ", response.data);
                    if (response.data.match(/ds_component_page/)) {
                        if (response.data.match(/"_id":"(.*?)"/)) {
                            var step = response.data.match(/"_id":"(.*?)"/)[0];
                            var step2 = step.replace('"_id":"', '');
                            var step3 = step2.replace('"', '');
                            var step4 = "https://verktoykasse.sanity.studio/desk/designsystemPortal;innhold;komponentArtikler;" + step3
                            const siteRedirectUrl = (step4);
                            setSiteRedirectUrl(siteRedirectUrl);
                        } else {
                            setSiteError("Sanity?");
                        }
                    } else {
                        if (response.data.match(/"_id":"(.*?)"/)) {
                            var step = response.data.match(/"_id":"(.*?)"/)[0];
                            var step2 = step.replace('"_id":"', '');
                            var step3 = step2.replace('"', '');
                            var step4 = "https://verktoykasse.sanity.studio/desk/designsystemPortal;innhold;artikler;" + step3
                            const siteRedirectUrl = (step4);
                            setSiteRedirectUrl(siteRedirectUrl);
                        } else {
                            setSiteError("Sanity?");
                        }
                    }

                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }
    })
    return (
        <>
            {siteUrl.match('www.nav.no/sosialhjelp') &&
                <li><Link target="_blank" href="https://sosialhjelp-veiviser.sanity.studio/production/desk" rel="noreferrer">Sanity CMS</Link></li>
            }

            {siteUrl.match('familie.nav.no') &&
                <li><Link target="_blank" href="https://portal-admin.oera.no/admin/tool" rel="noreferrer">Enonic CMS</Link></li>
            }

            {siteUrl.match('www.nav.no/okonomi-og-gjeld') &&
                <li><Link target="_blank" href="https://www.nav.no/okonomi-og-gjeld/studio/desk" rel="noreferrer">Sanity CMS</Link></li>
            }

            {siteUrl.match('www.nav.no/arbeid') &&
                <li><Link target="_blank" href="https://nav-inkludering.sanity.studio/desk" rel="noreferrer">Sanity CMS</Link></li>
            }

            {siteRedirectUrl && siteUrl.match(/www.nav.no/) && !siteUrl.match('no/arbeid') &&
                <li><Link target="_blank" href={siteRedirectUrl} rel="noreferrer">Enonic CMS</Link></li>
            }

            {siteRedirectUrl && siteUrl.match('aksel.nav.no/designsystem') &&
                <li><Link target="_blank" href={siteRedirectUrl} rel="noreferrer">Sanity CMS</Link></li>
            }

            {siteUrl.match(/aksel.nav.no/) && !siteUrl.match('aksel.nav.no/designsystem') &&
                <li><Link target="_blank" href="https://verktoykasse.sanity.studio/desk" rel="noreferrer">Sanity CMS</Link></li>
            }

            {siteRedirectUrl && siteUrl.match(/idebanken.org/) &&
                <li><Link target="_blank" href={siteRedirectUrl} rel="noreferrer">Enonic CMS</Link></li>
            }
        </>
    );
}

export default EditSiteCars;