import React, { useState } from "react";

import { robots } from "./robots";
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
import "./App.css"

export const App = () => {
  const [values, setValues] = useState({
    robots: robots,
    searchField: "",
  });

  const onSearchChange = (e) => {
    setValues({...values, searchField: e.target.value})
  };

  const filteredRobots = values.robots.filter((robot) =>
    robot.name.toLowerCase().includes(values.searchField.toLowerCase())
  );

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        searchField={values.searchField}
      />
      <CardList robots={values.robots} />
    </div>
  );
};
