export default function AlertButton(props){

    function showAlerAndClinInputs() {
        alert(`Hi ${props.inputName}, ${props.inputSurname}`);
        props.clearInputName();
        props.clearInputSurname()
      }

   return (
    <button onClick={()=> showAlerAndClinInputs()}>Alert and Clean</button>
   )
}
