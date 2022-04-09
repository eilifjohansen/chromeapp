import React from "react";
import { Panel, Heading, Link } from "@navikt/ds-react";
import { EditSiteLinks } from "../Variations"
import axios from 'axios';

function RelatedSiteCards(props) {
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
            {siteUrl.match('arbeidsplassen.nav') && !siteUrl.match('syk') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">PO Arbeid</Link>
                    </Heading>
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
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slack</Link> (dialog om Designsystemet)</li>
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
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C7NE7A8UF">Slack</Link> (dialog om Designsystemet)</li>
                        <li><Link target="_blank" href="https://github.com/navikt/Designsystemet">Github</Link> (kildekode)</li>
                        <li><Link target="_blank" href="https://grafana.nais.io/d/I_jLx_07k/designsystemet-bruk-av-komponenter-i-nav?orgId=1">Grafana</Link> (bruk av komponenter)</li>
                        <li><Link onClick={() => gotoSiteimprove(siteUrl)} href="#">Siteimprove</Link> (kvalitetsikring og UU)</li>
                    </ul>
                </Panel>
            }
        </>
    );
}

export default RelatedSiteCards;