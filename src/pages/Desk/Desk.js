import React from 'react';
import { bigState } from '../../components';
import { Task } from '../../components'


export function Desk() {
    console.log(bigState)
    return (
        <div>
            <Task/>
        </div>
    );
}