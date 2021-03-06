import React from "react";

const TodoList = ({itemChecked, items}) => {
  return (
    <section className="task-list">
      <h2>To do list</h2>
      <ul>
        {items.map((item, key) => (
          <div className="list-item" key={key}>
            <input type="text" value={(item.text + '-' + item.id)} readOnly /> 
            <input 
              type="checkbox" 
              checked={false}
              onClick={() => itemChecked(item.id, item.text)} 
              readOnly
              className="checkbox"
            />
          </div>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
