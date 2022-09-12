import { For, createSignal } from "solid-js";

const ToDoNotFineGrained = props => {
  let input
  let todoId = 0
  const [todos, setTodos] = createSignal([])

  const addTodo = (text) => {
    setTodos([...todos(), { id: ++todoId, text, completed: false }])
  }
  const toggleTodo = (id) => {
    setTodos(todos().map((todo) => (
      todo.id !== id ? todo : { ...todo, completed: !todo.completed }
    )));
  }

  return (
    <div class="todo">
      <div>
        <h3>{ props.title }</h3>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value)
            input.value = ''
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`)
          return <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onchange={[toggleTodo, id]}
            />
            <span
              class={ todo.completed ? "completed" : "not-completed"}
            >{text}</span>
          </div>
        }}
      </For>
    </div>
  );
}
export default ToDoNotFineGrained