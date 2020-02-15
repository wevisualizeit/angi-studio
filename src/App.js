import React from 'react';
import TodoForm from './Components/todoForm';
//import TodoChecked from './Components/todoChecked';


const App = () => {
  return (
  
    <div className="App">
      <h1>Job application</h1>
      <p>This to-do list contains the tasks I need to <br /> 
        complete so I can apply to a job well prepared.</p>
    
      <TodoForm />
      
    </div>
 
  );
}

export default App;
