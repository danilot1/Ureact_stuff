import React from "react";
import Item from "../Item";
export default function Lista(props) {
    return (
        <ol>
            {props.taredas.map(item => {
                return (
                    <Item item={item} />
                );
            })}
        </ol>
    );
}