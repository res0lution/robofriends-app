import React, { useState, useEffect } from "react";

import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
import "./App.css"
import { Scroll } from "./Scroll";

export const App = () => {
  const [values, setValues] = useState({
    robots: [],
    searchField: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setValues({ ...values, robots: users }));
  }, [])

  const onSearchChange = (e) => {
    setValues({...values, searchField: e.target.value})
  };

  const filteredRobots = values.robots.filter((robot) =>
    robot.name.toLowerCase().includes(values.searchField.toLowerCase())
  );

  if (values.robots.length === 0) return <h1>Loading...</h1>

  return (
    <div className="tc">
      <h1>RoboFriends</h1>

      <SearchBox
        onSearchChange={onSearchChange}
        searchField={values.searchField}
      />

      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};
