import { splitProps } from "solid-js";

const ThisWillReact = (props) => {
  const [local, others] = splitProps(props, ['disclaimer', 'prop1', 'counter'])
  return <div class="container">
    <div>{ local.disclaimer }</div>
    <div>{ local.prop1 }</div>
    <div>{ local.counter }</div>
  </div>
}

export default ThisWillReact