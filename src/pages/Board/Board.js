import React from 'react';
import { Header } from '../../components';
import {Outlet} from "react-router-dom";


export function Board() {
    return (
        <div>
            <Header/>
            Hello
            Hello
            Hello
            <p>Hello</p>
            <Outlet/>
        </div>
    );
}