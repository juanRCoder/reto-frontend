import { Outlet } from "react-router-dom"
import SideBar from "../components/Sidebar"


function Layout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  )
}

export default Layout