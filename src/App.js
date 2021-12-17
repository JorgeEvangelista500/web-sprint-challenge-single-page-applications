import React, { useState, useEffect} from "react";
import {Route, Link,} from 'react-router-dom'
import axios from "axios";
import * as yup from 'yup';

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
const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  
}
const initialOrders = []
const initialDisabled = true

const App = () => {

  const [orders, setOrder] = (initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisable] = useState(initialDisabled)


  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(resp => {
        setOrder([ resp.data, ...orders])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  const inputChange = (evt) => {
    setFormValues({ ...formValues,[evt.target.name]: evt.target.value})
  }

  const formSubmit = (evt) => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings:['pepperoni', 'sausage', 'canadian_bacon', 'spicy_italian_sausage'].filter(topping => !!formValues[topping]),
      special: formValues.special
    }
    postNewOrder(newOrder)
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
