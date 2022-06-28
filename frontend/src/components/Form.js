import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/task", {
      title: title
    });
    e.target.reset();
  }
  return (
    <div className='container'>
      <Form method='post' onSubmit={handleSubmit}>
        <Input id='title' name='title' onChange={(e) => setTitle(e.target.value)} placeholder='Enter Your Task Here' />
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
