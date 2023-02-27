import { useReducer } from "react";

// Styles
import "./App.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "moveClassA":
      const student = state.a.filter((student) => student.id === action.id);
      const newClassA = state.a.filter((student) => student.id !== action.id);
      const newClassB = [...state.b, student];
      return { a: newClassA, b: newClassB };

    // case "moveClassB":
      // const student2 = state.b.filter((student2) => student2.id === action.id);
      // const newClassA2 = state.a.filter((student2) => student2.id !== action.id);
      // const newClassB2 = [...state.a, student2];
      // return { a: newClassB2, b: newClassA2 };

    default:
      return state;
  }
};

const initialState = {
  a: [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Luke" },
    { id: 4, name: "Maria" },
  ],
  b: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Create a handler and attach it to the buttons to trigger the reducer

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "moveClassA",
      payload: "student",
    });
    dispatch({
      type: "moveClassB",
      payload: "student",
    });
  };

  // const handleClick2 = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: "moveClassB",
  //     payload: "student",
  //   });
  // };

  return (
    <div className="wrapper">
      <div data-testid="classrom-A">
        <h2>Classroom A</h2>
        {state.a.map((student) => (
          <div data-testid={student.name} key={student.id} className="student">
            <span>{student.name}</span>
            <button onClick={handleClick}>Move to B</button>
          </div>
        ))}
      </div>

      <div data-testid="classrom-B">
        <h2>Classroom B</h2>
        {state.b.map((student) => (
          <div data-testid={student.name} key={student.id} className="student">
            <span>{student.name}</span>
            <button onClick={handleClick}>Move to A</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
