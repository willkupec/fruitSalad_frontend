import { PAYMENT_API } from "../../constants/api_routes";


export const placeOrder = async (payment, setCart) =>
  fetch(PAYMENT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payment),
  }).then(setCart([]))