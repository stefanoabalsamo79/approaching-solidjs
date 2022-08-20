function Button(props) {
  const { onClick } = props
  return (<button 
            style='margin: 20px;display: block;' 
            onClick={ onClick }
          >
            Increment
          </button>)
}

export default Button
