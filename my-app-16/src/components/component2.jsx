import {
  myStore, setMyStore
} from './store'

const Component2 = props => {
  return (
    <div>
        <h2>Component2</h2>  
        <div>{ JSON.stringify(myStore) }</div>    
    </div>
  );
}
export default Component2