import React from "react";

export const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search robots"
      />
    </div>
  );
};
