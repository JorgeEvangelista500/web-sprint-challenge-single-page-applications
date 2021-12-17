import React from "react";
import {Route, Link,} from 'react-router-dom'

const App = () => {
  return (
    <>
    <header>
      <h1>BloomTech Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Help</Link>
      </nav>
    </header>
    </>
  );
};
export default App;
