import React from "react";
import { Link } from "@navikt/ds-react";

function MyFooter() {
  return (
    <div className="personvern"><Link rel="noopener noreferrer" className="personvernlenke" target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">Gi innspill</Link><Link rel="noopener noreferrer" target="_blank" href="https://www.nav.no/no/nav-og-samfunn/om-nav/personvern-i-arbeids-og-velferdsetaten">Personvern</Link></div>
  );
}

export default MyFooter;