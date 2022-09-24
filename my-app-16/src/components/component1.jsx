import Component2 from './component2'
import {
  myStore, setMyStore
} from './store'

const getActiveElement = () => myStore.activeElement
const increaseValue = (valueKey) => {
  setMyStore(getActiveElement(), valueKey, myStore[getActiveElement()][valueKey] + 1)
}
const decreaseValue = valueKey => {
  setMyStore(getActiveElement(), valueKey, myStore[getActiveElement()][valueKey] - 1)
} 

const Component1 = props => {
  return (
    <div>
        <h2>Component1</h2>      
        <div class="buttonGroup">
          <button onClick={() => setMyStore('activeElement', 'element1')}>element1</button>
          <button onClick={() => setMyStore('activeElement', 'element2')}>element2</button>
          <button onClick={() => setMyStore('activeElement', 'element3')}>element3</button>
        </div>
        <div class="buttonGroup">
          <button onClick={() => increaseValue('x')}>Increase x</button>
          <button onClick={() => decreaseValue('x')}>Decrease x</button>
        </div>
        <div class="buttonGroup">  
          <button onClick={() => increaseValue('y')}>Increase y</button>
          <button onClick={() => decreaseValue('y')}>Decrease y</button>
        </div>
        <Component2/>
    </div>
  );
}
export default Component1