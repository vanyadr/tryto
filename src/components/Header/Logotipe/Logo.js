import React, { Component } from "react";
import "./Logo.module.css"
import { ReactComponent as Logo } from './logo1.svg';


export function Logotipe(){
    return (
        <div>
            <div id="logo">
                <Logo id="logoPic" />
            </div>
        </div>
    );
}
