import React from "react";
import styled from "styled-components";
import Task from "./Task";

const ToDoList = () => {
  const Tasks = [
    {_id: 1, title: "Task 1"},
    {_id: 2, title: "Task 2"},
    {_id: 3, title: "Task 3"},
    {_id: 4, title: "Task 4"},
  ]
  return (
    <div className="container">
      <List>
        {
          Tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))
        }
      </List>
    </div>
  )
}

const List = styled.ul `
  padding: 0;
`

export default ToDoList;
