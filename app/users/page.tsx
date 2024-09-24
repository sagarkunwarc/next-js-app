import React from "react";

type User = {
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: string;
  id: string;
  time: string
};

const User = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://66d093f5181d059277df15bd.mockapi.io/api/react_class/users", {cache: "no-store"}
  );

  const data = (await response.json()) as User[];

  console.log({ data });

  return (
    <div>
      <h1>Users </h1>
      {data.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Role: {user.role}</h2>
          <h2>LastLogin: {user.lastLogin}</h2>
          <h2>Status: {user.status}</h2>
          <h2>Time: {user.time}</h2>
        </div>
      ))}
      <br />
    </div>
  );
};

export default User;
