import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

type PersonalProps = {
  name: string;
};

function PersonalGrating({ name }: PersonalProps) {
  return <p>Personal greeting to {name}</p>;
}

function App() {
  const [count, setCount] = useState(0);
  const name = "Ruslana";

  return (
    <>
      <p>Hello!</p>
      <Hello />
      <PersonalGrating name="Alisher" />
      <PersonalGrating name="Alisher" />
      <PersonalGrating name="Alisher" />
    </>
  );
}

const user = {
  firstName: "John",
  lastName: "Doe"
};

export default App;


