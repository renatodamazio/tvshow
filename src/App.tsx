/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import Card from "./components/cards/Card";

function App() {
  interface User {
    show: {
      id: number,
      name: string
    };
  }

  const [users, setUser] = useState<[User]>();

  async function loadData() {
    const load = await fetch(
      "https://api.tvmaze.com/search/shows?q=powerpuff+girls",
    );
    const response = await load.json();

    setUser(response);
  }

  useEffect(
    // eslint-disable-next-line arrow-body-style
    () => {
      loadData();
    },
    [],
  );

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {users?.map((item) => <Card key={item.show.id} info={item.show} />)}
    </div>
  );
}

export default App;
