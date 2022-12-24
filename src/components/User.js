import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const fetchUser = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       if (!response.ok) throw new Error("something went wrong");
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       setUsers(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     });
  // };

  useEffect(() => {
    // fetchUser();
    fetchUserTwo();
  }, []);

  const fetchUserTwo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("something went wrong");
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch {
      setError(error.message);
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}

      {error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default User;
