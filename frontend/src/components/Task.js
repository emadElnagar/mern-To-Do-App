import React, { Fragment } from "react";
import styled from "styled-components";

const Task = (props) => {
  const { task } = props;
  return (
    <Fragment>
      <Item>
        <Text>{task.title}</Text>
        <div>
          <DoneButton>
            <span className="material-icons">done</span>
          </DoneButton>
          <UpdateButton>
            <span className="material-icons">edit</span>
          </UpdateButton>
          <DeleteButton>
            <span className="material-icons">delete</span>
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
  background: #F10086;
  color: #fff;
  font-size: 1rem;
  padding: 5px 15px
`

const UpdateButton = styled.button `
  background: #00AFC1;
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
