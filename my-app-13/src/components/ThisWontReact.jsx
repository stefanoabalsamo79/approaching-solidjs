const ThisWontReact = (props) => {
  const { disclaimer, prop1, counter, ...others } = props
  return <div class="container">
    <div>{ disclaimer }</div>
    <div>{ prop1 }</div>
    <div>{ counter }</div>
  </div>
}

export default ThisWontReact