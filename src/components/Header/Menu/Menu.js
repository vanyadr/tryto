import React, { Component } from "react";
import styles from "./Menu.module.css"


export function Menu(){
    return (
        <div className={ styles.holder }>
            <div className={ styles.butt}>
                <a href="/">Board</a>
            </div>
            <div className={ styles.butt }>
                <a href="/about">Add Task</a>
            </div>
            <div className={ styles.butt }>
                <a href="/contacts">Contacts</a>
            </div>
        </div>
    );
}
