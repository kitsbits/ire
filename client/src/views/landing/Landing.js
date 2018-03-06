import React from "react";
import glamorous from "glamorous";

export default function Landing() {
    const overlay = require("./assets/lorem-overlay.png");
    const LandingContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minHeight: "500px",
        width: "100vw",
        background: `url(${overlay}) no-repeat center`,
        backgroundSize: "cover",
    });
    return (
        <LandingContainer>

        </LandingContainer>
    );
}
