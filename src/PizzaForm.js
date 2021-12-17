import React from 'react';

const PizzaForm = (props) => {
    const {values, submit, change, disabled, errors} = props

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return(
        <form id='pizza-form'>
            <label>Name
                <input id='name-input'
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    placeholder='Name for the order'
                />
            </label>
            <label>Pizza size
                <select id='size-dropdown' onChange={onChange} value={values.size} name='size'>
                    <option value=''>- Select an option -</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra Large'>Extra Large</option>
                </select>
            </label>
            <label>Original Red
                <input
                    type='radio'
                    name='sauce'
                    value='Original Red'
                    onChange={onChange}
                    checked={values.sauce === 'Original Red'}
                />
            </label>
            <label>Garlic Ranch
                <input
                    type='radio'
                    name='sauce'
                    value='Garlic Ranch'
                    onChange={onChange}
                    checked={values.sauce === 'Garlic Ranch'}
                />
            </label>
            <label>BBQ Sauce
                <input
                    type='radio'
                    name='sauce'
                    value='BBQ Sauce'
                    onChange={onChange}
                    checked={values.sauce === 'BBQ Sauce'}
                />
            </label>
            <label>Spinach Alfredo
                <input
                    type='radio'
                    name='sauce'
                    value='Spinach Alfredo'
                    onChange={onChange}
                    checked={values.sauce === 'Spinach Alfredo'}
                />
            </label>
            <label>Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                />
            </label>
            <label>Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    checked={values.sausage}
                    onChange={onChange}
                />
            </label>
            <label>Canadian Bacon
                <input
                    type='checkbox'
                    name='canadian_bacon'
                    checked={values.canadian_bacon}
                    onChange={onChange}
                />
            </label>
            <label>Spicy Italian Sausage
                <input
                    type='checkbox'
                    name='spicy_italian_sausage'
                    checked={values.spicy_italian_sausage}
                    onChange={onChange}
                />
            </label>
            <label>Special Instructions
                <input id='special-text'
                    value={values.special}
                    onChange={onChange}
                    name='special'
                    type='text'
                    placeholder="Anything else you'd like to add?"
                />
            </label>
            <button id='order-button' disabled={disabled}>Order</button>
        </form>
    )
}

export default PizzaForm;