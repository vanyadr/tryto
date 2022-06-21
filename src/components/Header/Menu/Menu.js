import React, { Component } from "react";
import "./Menu.module.css"


export function Menu(){
    return (
        <div className="holder">
            <div className="butt">
                <a href="/">Home</a>
            </div>
            <div className="butt">
                <a href="/about">About</a>
            </div>
            <div className="butt">
                <a href="/contacts">Contacts</a>
            </div>
        </div>
    );
}
