import ToDoNotFineGrained from "./ToDoNotFineGrained";
import ToDoFineGrained from "./ToDoFineGrained";
import './styles.css'

const App = () => {
  return <div class="app-container">
    <ToDoNotFineGrained title="Not Fine Grained"/>
    <ToDoFineGrained title="Fine Grained"/>
  </div>
}
export default App;
