import { createEffect, children } from "solid-js";

const ItemList = props => {
  const c = children(() => props.children)
  createEffect(() => c().forEach(item => item.style.color = props.color))
  return <>{c()}</>
}
export default ItemList