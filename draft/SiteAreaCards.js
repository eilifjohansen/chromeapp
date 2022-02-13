import React, { useState, useEffect } from "react";
import { Panel, Heading, Link } from "@navikt/ds-react";
import axios from 'axios';

function SiteAreaCars(props) {
    const siteUrl = props.siteUrl;
    
    function gotoSiteimprove(siteUrl) {
            axios.get('http://127.0.0.1:1880/siteimprove?url=' + siteUrl)
                .then(response => {
                    console.log("Status: ", response.status);
                    console.log(response.data.siteimproveurl);
                    if (response.data.siteimproveurl) {
                        window.open(
                            response.data.siteimproveurl,
                            '_blank' // <- This is what makes it open in a new window.
                          );
                    } else {
                        window.open(
                            'https://my2.siteimprove.com/Auth/Saml2/6274809',
                            '_blank' // <- This is what makes it open in a new window.
                          );
                    } 
                }).catch(error => {
                    window.open(
                        'https://my2.siteimprove.com/Auth/Saml2/6274809',
                        '_blank' // <- This is what makes it open in a new window.
                      );
                    console.error('Something went wrong!', error);
                });     
    }

    const [siteimproveUrl, setSiteimproveUrl] = useState("");
    const hotjarHeatLink = "https://insights.hotjar.com/sites/118350/heatmap/view?url=" + encodeURI(props.siteUrl) + '&match=simple_match&device=desktop&type=click&filters=%7B"DAYS_AGO":%7B"created":90%7D%7D'
    const hotjarRecordingLink = 'https://insights.hotjar.com/sites/118350/playbacks/list?sort_by=-relevance_score&filters=%7B%22AND%22:%5B%7B%22DAYS_AGO%22:%7B%22created%22:90%7D%7D,%7B%22CONTAINS%22:%7B%22all_page_paths%22:%22' + encodeURI(props.siteUrl) + '%22%7D%7D%5D%7D'


    useEffect(() => {
       /* if (siteUrl.match(/www.nav.no/) && !siteUrl.match(/siteimprove.com/)) {
            axios.get('http://127.0.0.1:1880/siteimprove?url=' + siteUrl)
                .then(response => {
                    console.log("Status: ", response.status);
                    console.log(response.data.siteimproveurl);
                    if (response.data.siteimproveurl) {
                        setSiteimproveUrl(response.data.siteimproveurl);
                    } else {
                        console.log("No Siteimprove URL")
                    }
                    
                }).catch(error => {
                    console.error('Something went wrong!', error);
                });
        }*/
    })
    return (
        <>

            {siteUrl.endsWith('/person') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/cluster/5e7e9bb9-276b-459d-9ce5-0298e2aa1d8a">Team Personbruker</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/7lllvwk/all">Amplitude</Link> (webstatistikk)</li>
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>       
                    </ul>
                </Panel>
            }

             {siteUrl.match('no/samarbeidspartner') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/cluster/5e7e9bb9-276b-459d-9ce5-0298e2aa1d8a">Team Personbruker</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/7lllvwk/all">Amplitude</Link> (webstatistikk)</li> */}
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }              

            {siteUrl.match('pensjon') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/686e93e9-0fab-46d3-9a9c-975a8b502bed">PO Pensjon</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02J5RJ7LPJ">Slackdialog om innhold</Link></li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35453259282/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/5ba8k03/all">Amplitude</Link> (webstatistikk)</li>
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }

            {siteUrl.match('aap') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/fd6b7cda-0659-46c8-ad3e-a78f96689022">PO AAP</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01KEH6C05S">Slackdialog om innhold</Link></li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30010109885/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/kn0mtnk/all">Amplitude</Link> (webstatistikk)</li>
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>  
                    </ul>
                </Panel>
            }

            {siteUrl.match('familie.nav') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }

            {siteUrl.match('nav.no/familie') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }

            {siteUrl.match('tar-vare-pa') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }

            {siteUrl.match('alene-med-barn') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }

            {siteUrl.match('mistet-noen') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }

            {siteUrl.match('no/arbeid') && !siteUrl.match('syk') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">PO Arbeid</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CDJAEFN6S">Slackdialog om innhold</Link></li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35336718942/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }  

            {siteUrl.match('arbeidsplassen.nav') && !siteUrl.match('syk') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">PO Arbeid</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/23679828077/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                   </ul>
                </Panel>
            }  

            {siteUrl.match('nais.io') &&
                   <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/5ade590e-3bc4-47fb-8b8d-552392f46376">NAIS</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C5KUST8N6">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://github.com/nais/doc/">GitHub</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                   </ul>
                </Panel>
            }  

            {siteUrl.match('no/bedrift') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/2b4149d1-b18b-4111-923f-d7bcfdd55ba1">PO Arbeidsgiver</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01SA8B837U">Slackdialog om innhold</Link></li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/38614244255/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }  

            {siteUrl.match('syk') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/6b149078-927b-4570-a1ce-97bbb9499fb6">PO Helse</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02PPGC3DB6">Slackdialog om innhold</Link></li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35337084802/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/jp7wtu8/all">Amplitude</Link> (webstatistikk)</li>
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }         

            {siteUrl.match('hjelpemidler') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/68e0bd42-dc4f-4ea3-b7a8-24e211d1e657">Team Hjelpemiddelbehov</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02HE2S5HRA">Slackdialog om innhold</Link></li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/36725293144/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/akyf4sp/all">Amplitude</Link> (webstatistikk)</li>
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }    

            {siteUrl.match('sosialhjelp') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/12cad6ff-6629-4d0a-b651-66850fc360aa">Team Digisos</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35335689602/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/v5he9hy/all">Amplitude</Link> (webstatistikk)</li>
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }    

            {siteUrl.match('okonomi-og-gjeld') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/12cad6ff-6629-4d0a-b651-66850fc360aa">Team Digisos</Link> 
                    </Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35335689602/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/v5he9hy/all">Amplitude</Link> (webstatistikk)</li>
                        <li>Hotjar <Link target="_blank" href={hotjarHeatLink}>varmekart</Link> og <Link target="_blank" href={hotjarRecordingLink}>opptak</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }   

            {siteUrl.match('design.nav.no') && !siteUrl.match('design.nav.no/designsystem') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Team Aksel/Designsystemet</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://github.com/navikt/Designsystemet">Github</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }

            {siteUrl.match('design.nav.no/designsystem') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Team Aksel/Designsystemet</Link> 
                    </Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://github.com/navikt/Designsystemet">Github</Link></li>
                        <li><Link target="_blank" href="https://grafana.nais.io/d/I_jLx_07k/designsystemet-bruk-av-komponenter-i-nav?orgId=1">Monitorering av komponenter</Link></li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li> 
                    </ul>
                </Panel>
            }
        </>
    );
}

export default SiteAreaCars;