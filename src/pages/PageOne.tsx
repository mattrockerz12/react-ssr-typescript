import { useGetAllTodosQuery } from "../api/todoApi";
import { useDispatch, useSelector } from "react-redux";

const PageOne = () => {
  const { data: todos } = useGetAllTodosQuery();

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PageOne;
