import "./App.css";
import { useEffect, useState } from "react";
import SingleUser from "./components/SingleUser";


function App() {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className="main-heading">List of users</h1>
      {users.map((user) => {
        return (
          <SingleUser
            key={user.id}
            user={user}
          />
        );
      })}
    </>
  );
}

export default App;
