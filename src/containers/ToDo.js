import React from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

// class ToDo extends Component {
//   constructor(props) {
//     super(props)
//   }
//
//   clickToDo = (e) => {
//     this.props.toggleComplete(this.props.id)
//     console.log(this.props.completed)
//   }
//
//   render() {
//     const completedStatus = this.props.todo.completed ? "completed" : "not-completed"
//     console.log(this.props)
//     return (
//       <li
//         className={completedStatus}
//         onClick={this.clickToDo}
//       >
//         {this.props.todo}
//       </li>
//     )
//   }
// }

const ToDo = ({ id, todo, completed, toggleComplete }) => {
  console.log(completed)
  return (
    <li
      className={completed ? 'completed' : 'not-completed'}
      onClick={() => toggleComplete(id)}
    >
    {todo}
  </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch( toggleComplete(id) )
})

// const mapStateToProps = state => ({
//   todos: state.todos
// });

export default connect(null, mapDispatchToProps)(ToDo);
