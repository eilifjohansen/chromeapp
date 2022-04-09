import React from "react";
import { Alert, Heading, Link } from "@navikt/ds-react";

function TeknologiradarCars(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.match('sketch') &&
                <Alert className="rediger" variant="warning">
                    <Heading spacing size="small" level="3">
                        Teknologiradarvarsel
                    </Heading>
                    <p>Dette verktøyet har fått status "Hold" i Teknologiradaren: "Dette er ting vi ikke har tro på å bruke (mer av)."</p>
                    <p>For mer informasjon <Link target="_blank" href="https://teknologiradaren.labs.nais.io/">se Teknologiradaren.</Link></p>
                </Alert>
            }
        </>
    );
}

export default TeknologiradarCars;