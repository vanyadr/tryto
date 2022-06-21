import React, { Component } from "react";
import "./Header.css"
import { ReactComponent as Logo } from './logo1.svg';


export default class Header extends Component {
    render() {
        return (
            <div className="head">
                <div className="links">
                    <div className="link" id="logo">
                        <Logo id="logoPic" />
                    </div>
                    <div className="link">
                        <a href="/">Home</a>
                    </div>
                    <div className="link">
                        <a href="/about">About</a>
                    </div>
                    <div className="link">
                        <a href="/contacts">Contacts</a>
                    </div>
                </div>
            </div>
        )
    }
}