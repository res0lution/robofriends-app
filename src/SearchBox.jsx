import React from "react";

export const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search robots"
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  );
};
