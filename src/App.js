import React, { useState, useEffect} from "react";
import {Route, Link,} from 'react-router-dom';
import axios from "axios";
import * as yup from 'yup';
import PizzaForm from "./PizzaForm";
import schema from './formSchema'
import './App.css'

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadian_bacon: false,
  spicy_italian_sausage: false,
  special: '',
}
const initialFormErrors = {
  name: '',
  // size: '',
  // sauce: '',
  
}
const initialOrders = []
const initialDisabled = true

const App = () => {

  const [orders, setOrders] = (initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisable] = useState(initialDisabled)

  // const getOrders = () => {
  //   axios.get('https://reqres.in/api/orders')
  //     .then(resp => {
  //       setOrder(resp.data.data)
  //     }).catch(err => console.error(err))
  // }


  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(resp => {
        setOrders([ resp.data.data, ...orders])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(()=> setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  } 
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value})
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings:['pepperoni', 'sausage', 'canadian_bacon', 'spicy_italian_sausage'].filter(topping => !!formValues[topping]),
      special: formValues.special
    }
    postNewOrder(newOrder)
  }

  useEffect(()=>{
    schema.isValid(formValues).then(valid => setDisable(!valid))
  }, [formValues])


  return (
    <>
    <header>
      <h1>BloomTech Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Help</Link>
      </nav>
    </header>
    <div>
    </div>
    <div>
        <Link id="order-pizza" to="/pizza">Pizza?</Link>
        <Route path="/pizza">
          <PizzaForm 
            change={inputChange}
            values={formValues}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
    </div>
    </>
  );
};
export default App;
