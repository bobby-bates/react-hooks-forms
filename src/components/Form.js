// import { useState } from "react";

function Form({ 
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange
}) {
  
  /*
  Moved to ParentComponent.js
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  const handleFirstNameChange = event => setFirstName(event.target.value)
  const handleLastNameChange = event => setLastName(event.target.value)
  */

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
