import { useState } from "react";
import "./App.css";
import UserForm from "./components/HttpsUserForm";

const API_KEY = "ic3Rk4m5A8k1x2Wvao_tx-049PxlqFm1_AukCsJ1po0AzFU0hg";

function App() {
  const [userList, setUserList] = useState([]);

  const getUsers = () => {
    fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response failed");
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const onFormSubmit = (firstName, lastName) => {
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([
        {
          firstName,
          lastName,
        },
      ]),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response failed");
        }
        return res.json();
      })
      .then((data) =>
        setUserList(
          data.items.map((user) => {
            return {
              firstName: user.firstName,
              lastName: user.lastName,
              id: user._uuid,
            };
          })
        )
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <UserForm onFormSubmit={onFormSubmit} />
      <button onClick={getUsers}>Get users</button>
      {userList.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
