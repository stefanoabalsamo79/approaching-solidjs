function Input(props) {
  const { value } = props
  const derivedSignal = () => value() * 2
  return (<input 
            style='margin: 20px;display: block;' 
            value={ derivedSignal() }
          >
          </input>)
}

export default Input
