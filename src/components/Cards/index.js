import React from "react";
import { LovdataCards, ToolInfoCards, NavAreaCards, RelatedAreaCards } from "./Variations"

function MyCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            <NavAreaCards siteUrl={siteUrl} />
            <LovdataCards siteUrl={siteUrl} />
            <ToolInfoCards siteUrl={siteUrl} />
            <RelatedAreaCards siteUrl={siteUrl} />
        </>
    );
}

export default MyCards;