
export default function Abstract(props : {first : string, bolded : string, last: string}) {
  return <div><p>{props.first}<b> {props.bolded} </b>{props.last}</p></div>
}
  
