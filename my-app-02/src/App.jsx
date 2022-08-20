import { createSignal, createMemo } from "solid-js";

const App = () => {
  const [ name, setName ] = createSignal('')
  const [ surname, setSurname ] = createSignal('')
  const fullName = createMemo(() => `${name()} ${surname()}`);

  return (
    <div>
      <div>
        <label for="name">Name:</label>
        <input
          id="name"
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label for="surname">Surname:</label>
        <input 
          id="surname"
          onInput={(e) => setSurname(e.target.value)}
        />
      </div>
      <div>
        <label for="fullname">Fullname:</label>
        <input 
          id="fullname" 
          value={fullName()}
        />
      </div>
    </div>
  )
}

export default App;
