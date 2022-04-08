import React from "react";
import styled from "styled-components";
import Task from "./Task";

const ToDoList = () => {
  const Tasks = []
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
