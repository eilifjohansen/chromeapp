import React from "react";
import { Panel, Heading, Link } from "@navikt/ds-react";

function ToolInfoCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.match('siteimprove.com') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://my2.siteimprove.com/Auth/Saml2/6274809">Siteimprove</Link>
                    </Heading>
                    <p className="rediger">Siteimprove gir oss en oversikt over problemer og forbedringsområder i forhold til: kvalitetssikring av innhold, universell utforming og søketrafikk.</p>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C019SQF5AD8">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://jira.adeo.no/plugins/servlet/desk/portal/581/create/4322">Kurs og opplæring</Link></li>
                        <li><Link target="_blank" href="https://jira.adeo.no/plugins/servlet/desk/portal/581/create/2641">Tilganger</Link></li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('amplitude.com') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        Amplitude
                    </Heading>
                    <p className="rediger">Amplitude ble kjøpt inn for å måle hvordan folk bruker våre tjenester og kan brukes både i frontend og backend-applikasjoner.</p>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CMK1SCBP1">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://aksel.nav.no/artikkel/m%C3%A5le-brukeratferd-med-amplitude?tema=brukerinnsikt">Veiledninger</Link></li>
                        <li><Link target="_blank" href="https://jira.adeo.no/plugins/servlet/desk/portal/581/create/4322">Kurs og opplæring</Link></li>
                        <li><Link target="_blank" href="https://jira.adeo.no/plugins/servlet/desk/portal/581/create/2641">Tilganger</Link></li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('hotjar.com') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        Hotjar
                    </Heading>
                    <p className="rediger">Hotjar brukes til å gjennomføre spørreundersøkelser på nettsidene. Det kan også brukes til å ta opptak av hvordan folk navigerer på sidene, og se forskjeller i bruksmønster på mobil og p</p>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CB75V4761">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://aksel.nav.no/artikkel/oppsett-og-bruk-av-hotjar?tema=brukerinnsikt">Veiledninger</Link></li>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02UGFS2J4B">Kurs og opplæring</Link></li>
                        <li><Link target="_blank" href="https://jira.adeo.no/plugins/servlet/desk/portal/581/create/2641">Tilganger</Link></li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('taskanalytics.com') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        Task Analytics
                    </Heading>
                    <p className="rediger">Task Analytics er et verktøy laget for å utføre målinger med toppoppgavemetoden.</p>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/CB75V4761">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://aksel.nav.no/artikkel/toppoppgaver-og-task-analytics?tema=brukerinnsikt">Veiledninger</Link></li>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C02UGFS2J4B">Kurs og opplæring</Link></li>
                        <li><Link target="_blank" href="https://jira.adeo.no/plugins/servlet/desk/portal/581/create/2641">Tilganger</Link></li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('mural.co') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        Mural
                    </Heading>
                    <p className="rediger">Mural er et skybasert verktøy for aktivt samarbeid, en digital whiteboard som ligger tilgjengelig for deltagerne ute på internett.</p>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C013GARULKE">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://www.youtube.com/watch?v=mhslj4-OSRM">Introduksjonsvideo</Link></li>
                        <li><Link target="_blank" href="https://myapplications.microsoft.com/">Tilganger</Link></li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('figma.com') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        Figma
                    </Heading>
                    <p className="rediger">Figma er verktøy hvor du designer prototyper til websider, mobile apper etc.</p>
                    <ul>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01AE0M1421">Slackdialog</Link></li>
                        <li><Link target="_blank" href="https://nav-it.slack.com/archives/C01AE0M1421">Tilganger</Link></li>
                    </ul>
                </Panel>
            }
        </>
    );
}

export default ToolInfoCards;