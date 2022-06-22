import React from "react";
import styles from "./TaskAdd.module.css"
import { TaskAddHeader } from "./TaskAddHeader"
import { TaskAddForm } from "./TaskAddForm"


export function TaskAdd(){
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <TaskAddHeader />
            </div>
            <div className={styles.form}>

            </div>
        </div>
    );
}
