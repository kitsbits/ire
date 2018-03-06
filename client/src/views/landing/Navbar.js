import React from "react";
import glamorous from "glamorous";
import { colors } from "../../utils";

export default function Navbar() {
    // STYLES \\
    const NavbarContainer = glamorous.div({
        height: "65px",
        backgroundColor: "#ffffff",
    });

    const Logo = glamorous.h1({
        color: colors.lightOrange,
        textShadow: `1px 1px ${colors.darkOrange}`,
        marginLeft: "2%",
    });
    ///////////////////////////

    return (
        <NavbarContainer>
            <Logo>[f]IRE</Logo>
        </NavbarContainer>
    )
}
