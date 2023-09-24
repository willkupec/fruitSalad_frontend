const CART = process.env.REACT_APP_CART
const CHECKOUT = process.env.REACT_APP_CHECKOUT
const PAYMENT = process.env.REACT_APP_PAYMENT

// API Routes

export const CART_API = `${CART}/cartItem`
export const CHECKOUT_API = `${CHECKOUT}/checkout`
export const CHECKOUT_BY_CUSTOMER_API = `${CHECKOUT_API}/customer/`
export const PAYMENT_API = `${PAYMENT}/payment`

// External API Routes

export const COUNTRIES_API = "https://restcountries.com/v3.1/all"
