import React, { useState, useEffect } from "react";
import { LinkPanel, Alert, Link } from "@navikt/ds-react";
import { Edit } from "@navikt/ds-icons";
import axios from 'axios';

function EditExternalSiteCars(props) {
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

        </>
    );
}

export default EditExternalSiteCars;