import React from 'react';
import styled from 'styled-components';

const TodoForm = () => {
  return (
    <div className='container'>
      <Form>
        <Input placeholder='Enter Your Task Here' />
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
  background: #B00020;
  padding: 0 20px;
  color: #fff;
`

export default TodoForm;
