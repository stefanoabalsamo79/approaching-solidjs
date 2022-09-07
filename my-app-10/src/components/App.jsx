import { createSignal } from "solid-js";
import "./styles.css";

const getTextCase = (n) => (n() % 2) ? 'uppercase' : 'lowercase'
const getColor = (n) => (n() % 2) ? 'black' : 'red'
const getNumber = (from, to) => Math.floor(Math.random() * from) + to

function App() {
  const [n, setN] = createSignal(20);
  const [leader, setLeader] = createSignal("")
  setInterval(() => setN(getNumber(50, 15)), 1000)
  return <>
    <button 
      onClick={() => setLeader('ID1')}
      class={leader() === 'ID1' ? 'selected' : ''}
    >
      ID1{leader() === 'ID1' ? ' - I have been selected' : ''}
    </button>
    <button 
      onClick={() => setLeader('ID2')}
      class={leader() === 'ID2' ? 'selected' : ''}
    >
      ID2{leader() === 'ID2' ? ' - I have been selected' : ''}
    </button>
    <button 
      onClick={() => setLeader('ID3')}
      class={leader() === 'ID3' ? 'selected' : ''}
    >
      ID3{leader() === 'ID3' ? ' - I have been selected' : ''}
    </button>

    <div 
      style={{'border': `solid ${getColor(n)} 3px`,
        'color': getColor(n),
        'width': 'fit-content',
        'font-size': `${n()}px`,
      'text-transform': getTextCase(n)}}
    >Text {n()}</div>
  </>
}
export default App;
