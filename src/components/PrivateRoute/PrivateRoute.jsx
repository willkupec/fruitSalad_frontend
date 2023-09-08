import { useKeycloak } from "@react-keycloak/web"

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak()

  if (!keycloak?.authenticated) {
    keycloak?.login()
  }
  return children
}

export default PrivateRoute
