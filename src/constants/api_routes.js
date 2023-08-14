const API = process.env.REACT_APP_API

// API Routes

export const CUSTOMER_API=`${API}/customer`
export const CART_ITEM_API=`${API}/cartItem`
export const LOGIN_API = `${CUSTOMER_API}/login`
export const REGISTRATION_API = `${CUSTOMER_API}/register`