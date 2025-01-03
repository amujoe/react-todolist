import React from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <div>
      <h1>任务列表</h1>
      <ul>
        <li>任务1</li>
        <li>任务2</li>
      </ul>
      <Link to="/edit">新增任务</Link>
    </div>
  );
};

export default ListPage;
