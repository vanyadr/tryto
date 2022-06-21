import React, { Component } from "react";
import "./Header.module.css"
import { Logotipe } from "./Logotipe"
import { Menu } from "./Menu"


export function Header(){
    return (
        <div className="head">
            <div className="link">
                <Logotipe />
            </div>
            <div className="link">
                <Menu />
            </div>
        </div>
    );
}
