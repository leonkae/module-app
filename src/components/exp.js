import { useState } from "react";
// so this is a a functional component in react
function Welcome() {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

// so this is a class component in react
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to my portfolio</h1>
        <p>This is a simple React application.</p>
      </div>
    );
  }
}

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return <button>{this.state.count}</button>;
  }
}

function CounterTwo() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} >
        Increase
    </button>
  );
}
