import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ fName: '',secName: '', age: 100 });
  function handleFirstName(e) {
    setPerson({ ...person,fName: e.target.value});
  }
  function handleSecondName(e){
    setPerson({ ...person,secName: e.target.value});
    

  }

  const handleIncreaseAge = () => {
    
    setPerson({ ...person,age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  

  return (
    <>
      <h1>{person.fName} {person.secName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <div>
        <div>
          <label htmlFor="fName">Enter Your First Name : </label>
          <input type="text" id="fName" name="fName" onChange={handleFirstName}/>
        </div>
        <div>
          <label htmlFor="sName">Enter Your Second Name : </label>
          <input type="text" id="sName" name="sName" onChange={handleSecondName}/>
        </div>
      </div>
    </>
  );
}
