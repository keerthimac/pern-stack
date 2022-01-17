function TodoItem({ todo, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(todo.todo_id);
  };

  return (
    <tr>
      <td>{todo.description}</td>
      <td>
        <button className='btn btn-warning'>edit</button>
      </td>
      <td>
        <button onClick={handleDelete} className='btn btn-danger'>
          {" "}
          delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
