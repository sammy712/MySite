import React from "react";
import aSide from "./Asidebar.module.css";

const Article = () => {
    return (
        <article className={aSide.content}>
            <h1>2 column, header and footer</h1>
            <p>This example uses line-based positioning, to position the header and footer, stretching them across the
                grid.</p>
        </article>
    )
}