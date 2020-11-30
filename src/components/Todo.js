import React from 'react';
import styled from 'styled-components';
const StyledTodo = styled.div`
.item {
    background-color: #e64944;
    width: 45%;
    text-align: left;
    margin: 4px 0;
    padding-left: 8px;
    cursor: pointer;
  }

`
const Todo = props => {
    const handleClick = ()=>{
        props.handleToggle(props.item.id)
    }
    return (
        <StyledTodo onClick={handleClick} className={`item${props.item.completed ? 'completed' : ''}`}>
            <p>{props.item.name}</p>
        </StyledTodo>
    )
}
export default Todo;