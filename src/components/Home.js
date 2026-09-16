import { useState, useEffect } from "react";

import Welcome from "./components/Prop";
import User from "./components/User";
import Button from "./components/Button";
import Counter from "./components/Counter";

import About from "./components/About";

function Home() {
  const [age, setAge] = useState(21);
  const [isOnline, setIsOnline] = useState(true);

  function increaseAge() {
    setAge(age + 1);
  }

  function decreaseAge() {
    if (age > 0) {
      setAge(age - 1);
    }
  }

  function toggleStatus() {
    setIsOnline(!isOnline);
  }

  useEffect(() => {
    console.log("age is", age);
  }, [age]);


  return (
    <>
      <Welcome name="Nady" />

      <User
        name="Nady"
        age={age}
        email="nady@class.com"
        isOnline={isOnline}
        onIncreaseAge={increaseAge}
        onDecreaseAge={decreaseAge}
        onToggleStatus={toggleStatus}
      >
        <p>This user is a premium user</p>
      </User>

      <Button color="green" />
      <Button color="blue" />
      <Title title="Welcome to my About" />
      <About />
      <Counter />
    </>
  );
}

export default Home;
