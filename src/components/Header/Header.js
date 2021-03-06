import React, { Component } from "react";
import styles from "./Header.module.css"
import { Logotype } from "./Logotype"
import { Menu } from "./Menu"


/**
 * Шапка.
 * */
export const Header = () => {
    return (
            <div className={ styles.head }>
                <div className={ styles.link }>
                    <Logotype />
                </div>
                <div className={ styles.link }>
                    <Menu />
                </div>
            </div>

    );
}

Header.displayName = 'Header'