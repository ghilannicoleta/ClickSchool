export default function InputWithClean(props){
   return (
    <div>
        <input placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        <button onClick={props.clearInput}>Clean</button>
    </div>
   )
 }
 