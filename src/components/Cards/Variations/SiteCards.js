import React from "react";
import { Panel, Heading, Link } from "@navikt/ds-react";
import { HotjarLinks, EditSiteLinks, SiteimproveLinks, AmplitudeLinks } from "."

function SiteCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.match('www.nav.no') &&
                <Panel border className="rediger">
                    <Heading className="cardsubtitle" spacing size="xsmall" level="2">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/21766831756/Dashboard/Index">Siteimprove kvalitetsjekk</Link></li>
                        <HotjarLinks siteUrl={siteUrl} />
                        <li><Link target="_blank" href="https://analytics.eu.amplitude.com/nav/team-spaces">Amplitude webstatistikk</Link></li>
                    </ul>
                </Panel>
            }

            {siteUrl.match('arbeidsplassen.nav') && !siteUrl.match('syk') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">PO Arbeid</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="2">Åpne siden i</Heading>
                    <ul>
                        <SiteimproveLinks siteUrl={siteUrl} />
                        <AmplitudeLinks siteUrl={siteUrl} />
                    </ul>
                </Panel>
            }

            {siteUrl.match('idebanken.org') &&
                <Panel border className="rediger">
                    <Heading className="cardsubtitle" spacing size="xsmall" level="2">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <SiteimproveLinks siteUrl={siteUrl} />
                    </ul>
                </Panel>
            }

            {siteUrl.match('deterdinpensjon.no') &&
                <Panel border className="rediger">
                    <Heading spacing size="small" level="2">
                        <Link target="_blank" href="https://www.idebanken.org/kontakt-oss">Kommunikasjonsavdelingen</Link>
                    </Heading>
                    <Heading className="cardsubtitle" spacing size="xsmall" level="2">Åpne siden i</Heading>
                    <ul>
                        <li><Link target="_blank" href="https://www.deterdinpensjon.no/wp-login.php">WordPress</Link> (CMS-systemet)</li>
                        <SiteimproveLinks siteUrl={siteUrl} />
                    </ul>
                </Panel>
            }

            {siteUrl.match('aksel.nav.no') &&
                <Panel border className="rediger">
                    <Heading className="cardsubtitle" spacing size="xsmall" level="2">Åpne siden i</Heading>
                    <ul>
                        <EditSiteLinks siteUrl={siteUrl} />
                        <li><Link target="_blank" href="https://my2.siteimprove.com/Dashboard/5765905975/30048105178/Dashboard/Index">Siteimprove kvalitetsjekk</Link></li>
                    </ul>
                </Panel>
            }
        </>
    );
}

export default SiteCards;