import { map } from "lodash"
import {
  CHECKOUT_API,
  CHECKOUT_BY_CUSTOMER_API,
  COUNTRIES_API,
} from "../../constants/api_routes"

export const getCountries = async (setCountries) =>
  fetch(COUNTRIES_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    // maps names of countries
    .then((data) => setCountries(map(data, (country) => country.name.common)))

export const getAddressData = async (
  customer,
  setAddressData,
  setAddressFetched
) =>
  fetch(CHECKOUT_BY_CUSTOMER_API + customer, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        setAddressData(data)
        setAddressFetched(true)
      }
    })

export const addAddressData = async (addressData) =>
  fetch(CHECKOUT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addressData),
  })

export const updateAddressData = async (addressData) =>
  fetch(CHECKOUT_API + "/" + addressData?.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addressData),
  })
