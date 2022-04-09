import React, { useState, useEffect } from "react";
import { Panel, Heading, Link } from "@navikt/ds-react";
import { EditSiteLinks, HotjarLinks } from "../Variations"
import { CoApplicant } from "@navikt/ds-icons";
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
    return (
        <>
            {siteUrl.endsWith('/person') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/cluster/5e7e9bb9-276b-459d-9ce5-0298e2aa1d8a">Team Personbruker</Link>
                    </Heading>
                    {/* <div className="rediger">
                     <b>Slack:</b> <Link target="_blank" href="https://nav-it.slack.com/archives/C9CJ794PP">#team-personbruker</Link> 
                    </div> */}
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />              
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://nav-it.slack.com/archives/C9CJ794PP">Slackdialog</Link> #team-personbruker</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/7lllvwk/all">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('no/samarbeidspartner') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/cluster/5e7e9bb9-276b-459d-9ce5-0298e2aa1d8a">Team Personbruker</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/7lllvwk/all">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('pensjon') && siteUrl.match('nav.no') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/686e93e9-0fab-46d3-9a9c-975a8b502bed">PO Pensjon</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                    {/* <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02J5RJ7LPJ">Slack</Link> (dialog om innhold)</li>
                        <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35453259282/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/5ba8k03/all">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('aap') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/fd6b7cda-0659-46c8-ad3e-a78f96689022">PO AAP</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01KEH6C05S">Slack</Link> (dialog om innhold)</li> */}
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30010109885/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/kn0mtnk/all">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('familie.nav') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
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
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('tar-vare-pa') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('alene-med-barn') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('mistet-noen') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/30348849863/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('no/bedrift') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/2b4149d1-b18b-4111-923f-d7bcfdd55ba1">PO Arbeidsgiver</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01SA8B837U">Slack</Link> (dialog om innhold)</li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/38614244255/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('syk') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/6b149078-927b-4570-a1ce-97bbb9499fb6">PO Helse</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02PPGC3DB6">Slack</Link> (dialog om innhold)</li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35337084802/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/jp7wtu8/all">Amplitude</Link> (webstatistikk)</li>>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('hjelpemidler') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/68e0bd42-dc4f-4ea3-b7a8-24e211d1e657">Team Hjelpemiddelbehov</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02HE2S5HRA">Slack</Link> (dialog om innhold)</li>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/36725293144/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/akyf4sp/all">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('sosialhjelp') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/12cad6ff-6629-4d0a-b651-66850fc360aa">Team Digisos</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35335689602/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/v5he9hy/all">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('okonomi-og-gjeld') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/12cad6ff-6629-4d0a-b651-66850fc360aa">Team Digisos</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <HotjarLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/35335689602/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/space/v5he9hy/all">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('no/arbeid') && !siteUrl.match('syk') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">PO Arbeid</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CDJAEFN6S">Slack</Link> (dialog om innhold)</li>
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
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        {/* <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/23679828077/Dashboard/Index">Siteimprove</Link> (kvalitetsikring og UU)</li> */}
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('nais.io') && !siteUrl.match('labs') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/5ade590e-3bc4-47fb-8b8d-552392f46376">NAIS</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C5KUST8N6">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://github.com/nais/doc/">GitHub</Link> (kildekode)</li>
                        <li><Link target="_blank" href="https://analytics.amplitude.com/nav/chart/2mp45xe?source=space">Amplitude</Link> (webstatistikk)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('teknologiradaren.labs.nais.io') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/f7bc1e10-763f-4071-bf18-ee7f585eda9f">Teknologiredaksjonen</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://confluence.adeo.no/display/ITAVD/Teknologiradar">Confluence</Link> (introduksjon)</li>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CEHSHMNBF">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://github.com/navikt/teknologiradaren">GitHub</Link> (kildekode)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('teamkatalog.nais.adeo.no') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/264cebfa-ad46-4af9-8867-592f99f491e6">Datajegerne</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CG2S8D25D">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://navikt.github.io/naka/teamkatalog">NAKA</Link> (dokumentasjon)</li>
                        <li><Link target="_blank" href="https://github.com/navikt/team-catalog">GitHub</Link> (kildekode)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('idebanken.org') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://www.idebanken.org/kontakt-oss">Kommunikasjonsavdelingen</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('deterdinpensjon.no') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://www.idebanken.org/kontakt-oss">Kommunikasjonsavdelingen</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://www.deterdinpensjon.no/wp-login.php">WordPress</Link> (CMS-systemet)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('design.nav.no') && !siteUrl.match('design.nav.no/designsystem') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Team Aksel/Designsystemet</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://github.com/navikt/Designsystemet">Github</Link> (kildekode)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('design.nav.no/designsystem') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Team Aksel/Designsystemet</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                    </ul>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="3">Snarveier</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://github.com/navikt/Designsystemet">Github</Link> (kildekode)</li>
                        <li><Link target="_blank" href="https://grafana.nais.io/d/I_jLx_07k/designsystemet-bruk-av-komponenter-i-nav?orgId=1">Grafana</Link> (bruk av komponenter)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }
        </>
    );
}

export default SiteAreaCars;