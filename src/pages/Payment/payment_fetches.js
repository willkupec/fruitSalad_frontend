import { PAYMENT_API } from "../../constants/api_routes";


export const makePayment = async (payment) =>
  fetch(PAYMENT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payment),
  })