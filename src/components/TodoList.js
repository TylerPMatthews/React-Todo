import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
const StyledList = styled.div`
.shopping-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;

    
  }
  .clear-btn {
    margin-top: 16px;
  }
  .item.purchased {
    background-color: #d17d7c;
    text-decoration: line-through;
  }
`
const TodoList = props => {
    return (
        <StyledList>
            <div>
            {props.whatIsToDo.map(item => (
                <Todo key={item.id} item={item} handleToggle={props.handleToggle}/>
            ))}
            <button onClick={props.handleDone} className="clear-btn">Clear Done</button>
            </div>
        </StyledList>
    )
}
export default TodoList;