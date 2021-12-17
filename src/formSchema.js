import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required("Order name required").min(2, "name must be at least 2 characters"),
    size: yup.string(),
    sauce: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian_bacon: yup.boolean(),
    spicy_italian_sausage: yup.boolean(),
    special: yup.string(),
})

export default schema;
    