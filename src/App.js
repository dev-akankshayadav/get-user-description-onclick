import "./App.css";
import { useEffect, useState } from "react";
import SingleUser from "./components/SingleUser";


function App() {
  const [usersData, setUsersData] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUsersData(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(usersData);

  return (
    <>
      {usersData.map((user) => {
        return (
          <SingleUser
            key={user.id}
            name={user.name}
            email={user.email}
            contact={user.phone}
            website={user.website}
            company={user.company.name}
            address={user.address.street}
            username={user.username}
          />
        );
      })}
    </>
  );
}

export default App;
