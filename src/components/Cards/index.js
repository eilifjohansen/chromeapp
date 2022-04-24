import React from "react";
import { LovdataCards, ToolInfoCards, NavAreaCards } from "./Variations"

function MyCards(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            <NavAreaCards siteUrl={siteUrl} />
            <LovdataCards siteUrl={siteUrl} />
            <ToolInfoCards siteUrl={siteUrl} />
        </>
    );
}

export default MyCards;