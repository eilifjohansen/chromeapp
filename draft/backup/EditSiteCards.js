import React, { useState, useEffect } from "react";
import { LinkPanel } from "@navikt/ds-react";
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

        if (siteUrl.match(/www.idebanken.org/) && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
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

        if (siteUrl.match('design.nav.no/designsystem') && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
                .then(response => {
                    console.log("Status: ", response.status);
                    //console.log("Data: ", response.data);
                    if (response.data.match(/ds_component_page/)) {
                        if (response.data.match(/"_id":"(.*?)"/)) {
                            var smile = response.data.match(/"_id":"(.*?)"/)[0];
                            var smile2 = smile.replace('"_id":"', '');
                            var smile3 = smile2.replace('"', '');
                            var smile4 = "https://verktoykasse.sanity.studio/desk/designsystemPortal;innhold;komponentArtikler;" + smile3
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
                            var smile4 = "https://verktoykasse.sanity.studio/desk/designsystemPortal;innhold;artikler;" + smile3
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
    })
    return (
        <>
            {siteUrl.match(/deterdinpensjon.no/) &&
                <LinkPanel className="rediger" href="https://www.deterdinpensjon.no/wp-login.php" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Wordpress
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteUrl.match('www.nav.no/sosialhjelp') &&
                <LinkPanel className="rediger" href="https://sosialhjelp-veiviser.sanity.studio/production/desk" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                    Åpne siden i Sanity
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteUrl.match('familie.nav.no') &&
                <LinkPanel className="rediger" href="https://portal-admin.oera.no/admin/tool" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                       Åpne siden i Enonic
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteUrl.match('www.nav.no/okonomi-og-gjeld') &&
                <LinkPanel className="rediger" href="https://www.nav.no/okonomi-og-gjeld/studio/desk" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Sanity
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteUrl.match('www.nav.no/arbeid') &&
                <LinkPanel className="rediger" href="https://nav-inkludering.sanity.studio/desk" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Sanity
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteRedirectUrl && siteUrl.match(/www.nav.no/) && !siteUrl.match('no/arbeid') &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Enonic
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteRedirectUrl && siteUrl.match('design.nav.no/designsystem') &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Sanity
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteUrl.match(/design.nav.no/) && !siteUrl.match('design.nav.no/designsystem') &&
                <LinkPanel className="rediger" href="https://verktoykasse.sanity.studio/desk" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Sanity
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteRedirectUrl && siteUrl.match(/idebanken.org/) &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Åpne siden i Enonic
                    </LinkPanel.Title>
                    {/* <LinkPanel.Description>
                        <Alert variant="info" inline size="small" >Krever at du er <Link target="_blank" href="https://idebanken-xp7prod.customer.enonic.io/admin/tool">innlogget i Enonic</Link></Alert>
                    </LinkPanel.Description> */}
                </LinkPanel>
            }
        </>
    );
}

export default EditSiteCars;