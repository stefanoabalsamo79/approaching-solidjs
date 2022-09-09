import { mergeProps } from "solid-js";

const MergingComponent = (props) => {
  const merged = mergeProps({ 
    name: "'some default name'", 
    surname: "'some default surname'" }, 
  props)
  return <h3>Hi {merged.name} {merged.surname}</h3>
}
export default MergingComponent