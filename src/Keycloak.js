import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8081",
 realm: "fruitSalad",
 clientId: "frontend",
});

export default keycloak;