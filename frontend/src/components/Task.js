import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const Task = (props) => {
  const { task } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const resetTask = (id) => {
    axios.put(`http://localhost:5000/api/task/reset/${id}`)
  }
  const taskDone = (id) => {
    axios.put(`http://localhost:5000/api/task/done/${id}`)
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/task/delete/${id}`);
  }
  const handleEdit = async (id) => {
    await axios.put(`http://localhost:5000/api/task/update/${id}`, {
      title: title
    });
  }
  return (
    <Fragment>
      <Item className={`${isEdit === true ? 'd-none': ''}`}>
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
                  <span title="Reset Task" className="material-icons">remove</span>
                </DoneButton>
              ) : (
                <DoneButton onClick={() => taskDone(task._id)}>
                  <span title="Task Is Done" className="material-icons">done</span>
                </DoneButton>
            )
          }
          <UpdateButton onClick={() => setIsEdit(true)}>
            <span title="Update Task" className="material-icons">edit</span>
          </UpdateButton>
          <DeleteButton onClick={() => handleDelete(task._id)}>
            <span title="Remove Task" className="material-icons">delete</span>
          </DeleteButton>
        </div>
      </Item>
      <Item className={`${isEdit === true ? '': 'd-none'}`}>
        <Form onSubmit={() => handleEdit(task._id)}>
          <Input type='text' onChange={(e) => setTitle(e.target.value)} defaultValue={task.title} />
          <UpdateButtonSubmit type='submit'>update</UpdateButtonSubmit>
          <UpdateButtonCancel onClick={() => setIsEdit(false)}>cancel</UpdateButtonCancel>
        </Form>
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

const Form = styled.form `
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  &:focus {
    outline: none
  }
`

const UpdateButtonSubmit = styled.button`
  background: #008000;
  color: #fff;
  padding: 0 15px;
  margin-inline: 10px;
  text-transform: capitalize;
`

const UpdateButtonCancel = styled.button`
  background: #eee;
  color: #000;
  padding: 0 15px;
  text-transform: capitalize;
`

export default Task;
