import Aside from "@/components/Admin/AsideAdmin/Aside"
import Headeradmin from "@/components/Admin/Headeradmin/Header"
import {Outlet} from "react-router-dom"

const BaseLayoutadmin = () => {
  return (
    <div>
        <Headeradmin></Headeradmin>
        <Aside></Aside>
        <Outlet/>
     
    </div>
  )
}

export default BaseLayoutadmin