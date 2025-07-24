import React from "react";

export function TodoItem({todo}){
    const {id,task} = todo;
    return (<li className="list-group-item">{task}</li>);
}