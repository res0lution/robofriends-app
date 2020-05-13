import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CardList } from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import "./App.css";
import { Scroll } from "../components/Scroll";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";

export const App = () => {
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);
  const error = useSelector((state) => state.requestRobots.error);

  const dispatch = useDispatch();

  const onSearchChange = (event) =>
    dispatch(setSearchField(event.target.value));

  useEffect(() => {
    return dispatch(requestRobots());
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (isPending) return <h1 className="tc">Loading...</h1>;

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
