import React, { useState, useEffect} from "react";
import {Route, Link,} from 'react-router-dom'
import axios from "axios";

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage:false,
  canadian_bacon: false,
  spicy_italian_sausage: false,
  special: '',

}

const App = () => {
  const [order, setOrder] =[]
  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (evt) => {
    setFormValues({ ...formValues,[evt.target.name]: evt.target.value})
  }

  const submit = (evt) => {
    evt.preventDefault();
    setFormValues
  }
  





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
