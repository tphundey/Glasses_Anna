import Header from "@/components/header"
import Footer from "@/components/footer"
import {Outlet} from "react-router-dom"

const BaseLayout = () => {
  return (
    <div>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default BaseLayout