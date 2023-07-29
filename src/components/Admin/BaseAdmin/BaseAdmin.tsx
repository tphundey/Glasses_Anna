import Aside from "../AsideAdmin/Aside";
import Headeradmin from "../Headeradmin/Header";
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