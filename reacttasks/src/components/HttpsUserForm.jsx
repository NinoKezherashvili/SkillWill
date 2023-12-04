import { useState } from "react";

const UserForm = ({ onFormSubmit }) => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();

 
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(firstname, lastname);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="firstname"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button> Submit</button>
       
      </form>{" "}
    </div>
  );
};

export default UserForm;
