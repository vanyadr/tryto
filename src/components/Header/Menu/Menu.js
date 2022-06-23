import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./Menu.module.css"
import { TaskAdder } from "../../../pages"



export function Menu(){
    return (
        <div className={ styles.holder }>
            <div className={ styles.butt}>
                <a href="/">Board</a>
            </div>
            <div className={ styles.butt }>
                <a href="/add">Add Task</a>
            </div>
            <div className={ styles.butt }>
                <a href="/contacts">Contacts</a>
            </div>
        </div>
    );
}
