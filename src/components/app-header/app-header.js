import React from "react";
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="d-flex flex-sm-row flex-column align-items-center app-header">
      <h3 className="flex-grow-1 mb-sm-0">Todo List</h3>
      <h6 className="text-muted mb-0">{`${toDo} more to do, ${done} done`}</h6>
    </div>
  );
};

export default AppHeader;

