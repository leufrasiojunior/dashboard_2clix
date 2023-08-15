import AppRoutes from "./AppRoutes/AppRoutes"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Outlet />
      <AppRoutes />
    </>
  )
}

export default App
