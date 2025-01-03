// src/routes.js
import LoginPage from "../pages/common/login";
import TodoListPage from "../pages/todo/list";
import TodoEditPage from "../pages/todo/edit";

const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/list",
    element: <TodoListPage />,
  },
  {
    path: "/edit/:id?",
    element: <TodoEditPage />,
  },
  {
    path: "/",
    element: <LoginPage />, // 默认重定向到登录
  },
];

export default routes;