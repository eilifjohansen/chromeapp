import React from "react";
import { Heading, Link } from "@navikt/ds-react";

function CardHeading(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.endsWith('/person') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/cluster/5e7e9bb9-276b-459d-9ce5-0298e2aa1d8a">Team Personbruker</Link>
                </Heading>
            }

            {siteUrl.match('no/samarbeidspartner') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/cluster/5e7e9bb9-276b-459d-9ce5-0298e2aa1d8a">Team Personbruker</Link>
                </Heading>
            }

            {siteUrl.match('pensjon') && siteUrl.match('nav.no') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/686e93e9-0fab-46d3-9a9c-975a8b502bed">PO Pensjon</Link>
                </Heading>
            }

            {siteUrl.match('aap') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/fd6b7cda-0659-46c8-ad3e-a78f96689022">PO AAP</Link>
                </Heading>
            }

            {siteUrl.match('familie.nav') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                </Heading>
            }

            {siteUrl.match('nav.no/familie') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                </Heading>
            }

            {siteUrl.match('tar-vare-pa') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                </Heading>
            }

            {siteUrl.match('alene-med-barn') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                </Heading>
            }

            {siteUrl.match('mistet-noen') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/30d55ecc-1bf0-4bfc-8c6b-1985038f8460">PO Familie</Link>
                </Heading>
            }

            {siteUrl.match('no/bedrift') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/2b4149d1-b18b-4111-923f-d7bcfdd55ba1">PO Arbeidsgiver</Link>
                </Heading>
            }

            {siteUrl.match('syk') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/6b149078-927b-4570-a1ce-97bbb9499fb6">PO Helse</Link>
                </Heading>
            }

            {siteUrl.match('hjelpemidler') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/68e0bd42-dc4f-4ea3-b7a8-24e211d1e657">Team Hjelpemiddelbehov</Link>
                </Heading>
            }

            {siteUrl.match('sosialhjelp') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/12cad6ff-6629-4d0a-b651-66850fc360aa">Team Digisos</Link>
                </Heading>
            }

            {siteUrl.match('okonomi-og-gjeld') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/12cad6ff-6629-4d0a-b651-66850fc360aa">Team Digisos</Link>
                </Heading>
            }

            {siteUrl.match('no/arbeid') && !siteUrl.match('syk') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">PO Arbeid</Link>
                </Heading>
            }

            {siteUrl.match('arbeidsplassen.nav') && !siteUrl.match('syk') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/area/e168f684-f3ad-4f89-a73d-fac0d7cbbc68">PO Arbeid</Link>
                </Heading>
            }

            {siteUrl.match('nais.io') && !siteUrl.match('labs') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/5ade590e-3bc4-47fb-8b8d-552392f46376">NAIS</Link>
                </Heading>
            }

            {siteUrl.match('teknologiradaren.labs.nais.io') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/f7bc1e10-763f-4071-bf18-ee7f585eda9f">Teknologiredaksjonen</Link>
                </Heading>
            }

            {siteUrl.match('teamkatalog.nais.adeo.no') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/264cebfa-ad46-4af9-8867-592f99f491e6">Datajegerne</Link>
                </Heading>
            }

            {siteUrl.match('idebanken.org') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://www.idebanken.org/kontakt-oss">Kommunikasjonsavdelingen</Link>
                </Heading>
            }

            {siteUrl.match('deterdinpensjon.no') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://www.idebanken.org/kontakt-oss">Kommunikasjonsavdelingen</Link>
                </Heading>
            }

            {siteUrl.match('design.nav.no') && !siteUrl.match('design.nav.no/designsystem') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Team Aksel/Designsystemet</Link>
                </Heading>
            }

            {siteUrl.match('design.nav.no/designsystem') &&
                <Heading spacing size="small" level="2">
                    <Link target="_blank" href="https://teamkatalog.nais.adeo.no/team/602c8ad5-00b5-47cd-87a3-d19175397e23">Team Aksel/Designsystemet</Link>
                </Heading>
            }

        </>
    );
}

export default CardHeading;