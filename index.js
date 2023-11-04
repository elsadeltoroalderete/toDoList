function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'refactor the To Do List Code',
      isCompleted: false,
    },
    {
      text: 'style the To Do List Code',
      isCompleted: false,
    },
    {
      text: 'finish todo app',
      isCompleted: false,
    },
    {
      text: 'upload the app to a GitHub Repository',
      isCompleted: false,
    },
    {
      text: 'share the result in the MIT xPRO discussion board',
      isCompleted: false,
    }          
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
