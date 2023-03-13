export default function AlertButton(props){

    function showAlerAndClinInputs() {
        alert(`Hi ${props.value}`);
        props.afterAlert()
      }

   return (
    <button onClick={showAlerAndClinInputs}>Alert and Clean</button>
   )
}
