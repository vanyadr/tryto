import React from "react";
import styles from "./Task.module.css"
import { bigState } from '../TaskAdd';




export function Task(){

    const listItems = bigState.map((elem) =>
        <li>{elem.name} - {elem.text}</li>
    );
    console.log(listItems)
    return (
        <div className={ styles.holder }>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
