import { styled } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)(() => ({
    color: "orange",
    textDecoration: "none",

    "&.active": {
        color: "red",
        textDecoration: "underline",
    }
}));