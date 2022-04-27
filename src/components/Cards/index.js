import React from "react";
import { LovdataCards, ToolInfoCards, SiteCards } from "./Variations"

function MyCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            <SiteCards siteUrl={siteUrl} />
            <LovdataCards siteUrl={siteUrl} />
            <ToolInfoCards siteUrl={siteUrl} />
        </>
    );
}

export default MyCards;