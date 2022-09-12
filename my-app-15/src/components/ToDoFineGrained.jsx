import { For, createSignal } from "solid-js";

const ToDoFineGrained = props => {
  let input
  let todoId = 0
  const [todos, setTodos] = createSignal([])
  const addTodo = (text) => {
    const [completed, setCompleted] = createSignal(false)
    setTodos([...todos(), { id: ++todoId, text, completed, setCompleted }])
  };
  const toggleTodo = (id) => {
    const todo = todos().find((t) => t.id === id)
    if (todo) todo.setCompleted(!todo.completed())
  }

  return (
    <div class="todo">
      <div>
        <h3>{ props.title }</h3>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return
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
              checked={todo.completed()}
              onchange={[toggleTodo, id]}
            />
            <span
              class={ todo.completed() ? "completed" : "not-completed"}
            >{text}</span>
          </div>
        }}
      </For>
    </div>
  );
}
export default ToDoFineGrained