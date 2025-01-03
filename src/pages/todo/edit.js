import React from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id ? "编辑任务" : "新增任务"}</h1>
      <form>
        <label>
          任务标题:
          <input type="text" />
        </label>
        <button type="submit">{id ? "保存" : "创建"}</button>
      </form>
    </div>
  );
};

export default EditPage;
