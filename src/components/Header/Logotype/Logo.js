import React, { Component } from "react";
import styles from "./Logo.module.css"
import { ReactComponent as Logo } from './logo1.svg';


export function Logotype(){
    return (
        <div>
            <div className={ styles.logo }>
                <Logo className={ styles.logoPic } />
            </div>
        </div>
    );
}
