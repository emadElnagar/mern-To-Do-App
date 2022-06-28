import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Task from "./Task";
import axios from 'axios';


const ToDoList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/task').then((tasks) => {
      setList(tasks.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <div className="container">
      <List>
        {
          list.map((task) => (
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
