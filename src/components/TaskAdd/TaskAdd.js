import React from "react";
import styles from "./TaskAdd.module.css"
import { TaskAddHeader } from "./TaskAddHeader"
import { TaskAddForm } from "./TaskAddForm"


export let bigState = [];

export function AddState(props) {
    bigState.push(props.task)
}

export function TaskAdd(){
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <TaskAddHeader />
            </div>
            <div className={styles.form}>
                <TaskAddForm/>
            </div>
        </div>
    );
}
