import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            textInput:''
        }
    }
    handleChanges = e => {
        this.setState({
            textInput: e.target.value
        })
    }

    //class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.textInput)
        this.setState({
            textInput: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.textInput} onChange={this.handleChanges} type='text' name='item'/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;