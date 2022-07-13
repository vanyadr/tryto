import {useRoutes} from "react-router-dom";
import { Board, TaskAdder, Desk } from "../../pages"


export function RouterSist() {
    let element = useRoutes([
        {
            path: "/",
            element: <Board />,
            children: [
                { path: "add", element: <TaskAdder /> },
                { path: "desk", element: <Desk /> },
            ],
        },
    ]);

    return element;
}