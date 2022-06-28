import React, { Fragment } from "react";
import styled from "styled-components";
import axios from "axios";


const Task = (props) => {
  const { task } = props;
  const resetTask = (id) => {
    axios.put(`http://localhost:5000/api/task/reset/${id}`)
  }
  const taskDone = (id) => {
    axios.put(`http://localhost:5000/api/task/done/${id}`)
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/task/delete/${id}`);
  }
  return (
    <Fragment>
      <Item>
        <Text>
          {
            task.isDone === "true"
            ? (<del>{task.title}</del>)
            : (task.title)
          }
        </Text>
        <div>
        {
            task.isDone === "true"
            ? (
                <DoneButton onClick={() => resetTask(task._id)}>
                  <span title="Reset Task" className="material-icons">close</span>
                </DoneButton>
              ) : (
                <DoneButton onClick={() => taskDone(task._id)}>
                  <span title="Task Is Done" className="material-icons">done</span>
                </DoneButton>
            )
          }
          
          <UpdateButton>
            <span title="Update Task" className="material-icons">edit</span>
          </UpdateButton>
          <DeleteButton onClick={() => handleDelete(task._id)}>
            <span title="Remove Task" className="material-icons">delete</span>
          </DeleteButton>
        </div>
      </Item>
    </Fragment>
  )
}

const Item = styled.li `
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding: 10px 0;
  align-items: center;
`

const Text = styled.span `
  font-size: 1.5rem;
`

const DoneButton = styled.button `
  background: #FF0266;
  color: #fff;
  font-size: 1rem;
  padding: 5px 15px
`

const UpdateButton = styled.button `
  background: #3722f6;
  color: #fff;
  margin: 0 5px;
  font-size: 1rem;
  padding: 5px 15px
`

const DeleteButton = styled.button `
  background: #B00020;
  color: #fff;
  font-size: 1rem;
  padding: 5px 15px
`

export default Task;
