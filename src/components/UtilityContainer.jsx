import React from "react";
import Navbar from "./Navbar";
import "../styles/UtilityContainer.css";

export default function UtilityContainer({ children }) {
    return (
        <>
            <Navbar brandName="Dev Utilities" githubLink="https://github.com/prathammore301" />
            <div className="container utility-container">
                {children} {/* Har utility ka content yahan render hoga */}
            </div>
        </>
    );
}
