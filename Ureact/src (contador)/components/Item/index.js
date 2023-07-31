import React from "react";
import "./style.css"
export default function Item() {
    return (
        <li key = {props.key}>{props.valor}</li>
    );
}