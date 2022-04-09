import React, { useState } from 'react';
import styled from 'styled-components';
import { addTask } from '../api/task';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { result } = await addTask(task);
      console.log(result);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status < 500) {
        alert(error);
      } else {
        console.log(error);
      }
    }
  }
  return (
    <div className='container'>
      <Form method='post' onSubmit={handleSubmit}>
        <Input id='title' name='title' onChange={(e) => setTask(e.target.value)} placeholder='Enter Your Task Here' />
        <Button type='submit'>
          <span className="material-icons">add</span>
        </Button>
      </Form>
    </div>
  )
}

const Form = styled.form `
  display: flex
`

const Input = styled.input `
  width: 100%;
  padding: 15px 10px;
  &:focus {
    outline: none
  }
`

const Button = styled.button `
  background: #3700B3;
  padding: 0 20px;
  color: #fff;
`

export default TodoForm;
