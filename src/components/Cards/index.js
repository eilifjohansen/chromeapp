import React from "react";
import { LovdataCards, SiteAreaCards, TeknologiradarCards, ToolInfoCards } from "./Variations"

function MyCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {!siteUrl.match('siteimprove') && !siteUrl.match('hotjar') &&
                <SiteAreaCards siteUrl={siteUrl} />
            }
            <LovdataCards siteUrl={siteUrl} />
            <ToolInfoCards siteUrl={siteUrl} />
            <TeknologiradarCards siteUrl={siteUrl} />
        </>
    );
}

export default MyCards;