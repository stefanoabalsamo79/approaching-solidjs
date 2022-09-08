import { For } from "solid-js";

const Info = (props) => {
  const { name, surname } = props
  const tableHeader = <tr><For each={Object.keys(props)}>{(col) => <td>{ col }</td> }</For></tr>
  return <>
    <h2>Info</h2>
    <table>
      <tbody>
        { tableHeader }
        <tr>
          <td>{ name }</td>
          <td>{ surname }</td>
        </tr>
      </tbody>
    </table>
  </>
}

export default Info