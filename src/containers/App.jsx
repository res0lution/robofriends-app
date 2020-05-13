import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CardList } from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import "./App.css";
import { Scroll } from "../components/Scroll";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { setSearchField } from "../actions";

export const App = () => {
  const [values, setValues] = useState({
    robots: [],
  });

  const searchField = useSelector((state) => state.searchField);

  const dispatch = useDispatch();

  const onSearchChange = (event) => dispatch(setSearchField(event.target.value));

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setValues({ ...values, robots: users }));
  }, []);

  const filteredRobots = values.robots.filter((robot) =>
    robot.name.toLowerCase().includes((searchField).toLowerCase())
  );

  if (values.robots.length === 0) return <h1 className="tc">Loading...</h1>;

  return (
    <div className="tc">
      <h1>RoboFriends</h1>

      <SearchBox onSearchChange={onSearchChange} searchField={searchField} />

      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};
