import React, {useState, useEffect} from "react";
import {Link, LinkPanel} from "@navikt/ds-react";
import axios from 'axios';

function EditSiteCars(props) {
    const siteUrl = props.siteUrl;
    const [siteRedirectUrl, setSiteRedirectUrl] = useState("");
    const [siteError, setSiteError] = useState("");

    useEffect(() => {
        if (siteUrl.match(/www.nav.no/) && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
                .then(response => {
                    // console.log("Status: ", response.status);
                    //console.log("Data: ", response.data);
                    if (response.data.match(/"_id":"(.*?)"/)) {
                        var step = response.data.match(/"_id":"(.*?)"/)[0];
                        var step2 = step.replace('"_id":"', '');
                        var step3 = step2.replace('"', '');
                        var step4 = "https://portal-admin.oera.no/admin/tool/com.enonic.app.contentstudio/main#/default/edit/" + step3
                        const siteRedirectUrl = (step4);
                        setSiteRedirectUrl(siteRedirectUrl);
                    } else {
                        setSiteError("Error, could not get URL");
                    }
                }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }

        if (siteUrl.match(/www.idebanken.org/) && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
                .then(response => {
                    if (response.data.match(/name="pageId" content="(.*?)"/)) {
                        var step = response.data.match(/name="pageId" content="(.*?)"/)[0];
                        var step2 = step.replace('name="pageId" content="', '');
                        var step3 = step2.replace('"', '');
                        var step4 = "https://idebanken-xp7prod.customer.enonic.io/admin/tool/com.enonic.app.contentstudio/main#/default/edit/" + step3
                        const siteRedirectUrl = (step4);
                        setSiteRedirectUrl(siteRedirectUrl);
                    } else {
                        setSiteError("Error, could not get URL");
                    }

                }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }

        if (siteUrl.match('aksel.nav.no/artikkel') && !siteUrl.match('aksel.nav.no/designsystem')) {
            axios.get(siteUrl)
                .then(response => {
                    if (response.data.match(/"_id":"(.*?)"/)) {
                        var step = response.data.match(/"_id":"(.*?)"/)[0];
                        var step2 = step.replace('"_id":"', '');
                        var step3 = step2.replace('"', '');
                        var step4 = "https://verktoykasse.sanity.studio/desk/innholdAksel;artikler;" + step3
                        const siteRedirectUrl = (step4);
                        setSiteRedirectUrl(siteRedirectUrl);
                    } else {
                        setSiteError("Error, could not get URL");
                    }
                }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }

        if (siteUrl.match('aksel.nav.no/tema') && !siteUrl.match('aksel.nav.no/designsystem')) {
            axios.get(siteUrl)
                .then(response => {
                    if (response.data.match(/"_id":"(.*?)"/)) {
                        var step = response.data.match(/"_id":"(.*?)"/)[0];
                        var step2 = step.replace('"_id":"', '');
                        var step3 = step2.replace('"', '');
                        var step4 = "https://verktoykasse.sanity.studio/desk/innholdAksel;tema;" + step3
                        const siteRedirectUrl = (step4);
                        setSiteRedirectUrl(siteRedirectUrl);
                    } else {
                        setSiteError("Error, could not get URL");
                    }
                }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }

        if (siteUrl.match('aksel.nav.no/blogg') && !siteUrl.match('aksel.nav.no/designsystem')) {
            axios.get(siteUrl)
                .then(response => {
                    if (response.data.match(/"_id":"(.*?)"/)) {
                        var step = response.data.match(/"_id":"(.*?)"/)[0];
                        var step2 = step.replace('"_id":"', '');
                        var step3 = step2.replace('"', '');
                        var step4 = "https://verktoykasse.sanity.studio/desk/innholdAksel;blogg;" + step3
                        const siteRedirectUrl = (step4);
                        setSiteRedirectUrl(siteRedirectUrl);
                    } else {
                        setSiteError("Error, could not get URL");
                    }
                }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }

        if (siteUrl.match('aksel.nav.no/designsystem') && !siteUrl.match(/siteimprove.com/)) {
            axios.get(siteUrl)
                .then(response => {
                    if (!response.data.match(/ds_artikkel/)) {
                        setSiteRedirectUrl("https://verktoykasse.sanity.studio/desk/designsystemPortal");
                    } else {
                        if (response.data.match(/"_id":"(.*?)"/)) {
                            var step = response.data.match(/"_id":"(.*?)"/)[0];
                            var step2 = step.replace('"_id":"', '');
                            var step3 = step2.replace('"', '');
                            var step4 = "https://verktoykasse.sanity.studio/desk/designsystemPortal;innhold;artikler;" + step3
                            const siteRedirectUrl = (step4);
                            setSiteRedirectUrl(siteRedirectUrl);
                        } else {
                            setSiteError("Error, could not get URL");
                        }
                    }

                }).catch(error => {
                console.error('Something went wrong!', error);
            });
        }
    })
    return (
        <>
            {siteRedirectUrl && siteUrl.match(/www.nav.no/) &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Rediger siden
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteRedirectUrl && siteUrl.match('aksel.nav.no/designsystem') &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Rediger siden
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteUrl.match(/aksel.nav.no/) && !siteUrl.match('aksel.nav.no/designsystem') &&
                <>
                    {siteRedirectUrl ? (
                        <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                            <LinkPanel.Title>
                                Rediger siden
                            </LinkPanel.Title>
                        </LinkPanel>) : (
                        <LinkPanel className="rediger" href="https://verktoykasse.sanity.studio/desk" target="_blank"
                                   rel="noreferrer">
                            <LinkPanel.Title>
                                Rediger siden
                            </LinkPanel.Title>
                        </LinkPanel>)
                    }
                </>
            }

            {siteUrl.match(/deterdinpensjon.no/) &&
                <LinkPanel className="rediger" href="https://www.deterdinpensjon.no/wp-admin" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Rediger siden
                    </LinkPanel.Title>
                </LinkPanel>
            }

            {siteRedirectUrl && siteUrl.match(/idebanken.org/) &&
                <LinkPanel className="rediger" href={siteRedirectUrl} target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Rediger siden
                    </LinkPanel.Title>
                </LinkPanel>
            }
        </>
    );
}

export default EditSiteCars;