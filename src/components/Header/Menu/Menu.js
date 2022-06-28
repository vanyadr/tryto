import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css"



export function Menu(){
    return (
        <div className={ styles.holder }>
            <div className={ styles.butt}>
                <Link to="/">Board</Link>
            </div>
            <div className={ styles.butt }>
                <Link to="/add">Add Task</Link>
            </div>
            <div className={ styles.butt }>
                <Link to="/contacts">Contacts</Link>
            </div>
        </div>
    );
}
