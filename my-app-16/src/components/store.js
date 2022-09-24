import { createStore } from "solid-js/store";
const objectToStore = {
  activeElement: 'element1',
  element1: { x: 0, y: 0 },
  element2: { x: 0, y: 0 },
  element3: { x: 0, y: 0 }
}

const [ myStore, setMyStore ] = createStore (objectToStore)
export {
  myStore, setMyStore
} 