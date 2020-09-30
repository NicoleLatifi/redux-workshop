export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now() , todo: action.todo, completed: false }];
    case 'TOGGLE_COMPLETE':
      // const newState = [...state]
      // newState.forEach(todo => {
      //   if(todo.id === action.id) {
      //     // console.log('yoyo')
      //     todo.completed = !todo.completed
      //     // [...state, { id: todo.id, todo: todo.id, completed: !todo.completed }]
      //   }
      //   console.log(newState)
      //   // console.log(action)
      // })
      // return newState;
      state.map(todo => {
        if(todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    default:
      return state;
  }
}
