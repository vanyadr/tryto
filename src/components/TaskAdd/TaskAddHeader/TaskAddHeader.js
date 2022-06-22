import React from "react";
import styles from "./TaskAddHeader.module.css"


export function TaskAddHeader(){
    return (
        <div className={styles.body}>
            <h1 className={ styles.header }>Add new task to board</h1>
        </div>
    );
}
