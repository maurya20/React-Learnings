import React from "react"
import Header from "./components/Header"
import Info from "./components/Info"
import Footer from "./components/Footer"



function MyApp() {
    return(
      <div>
        <Header />
        <Info 
        myinfo={{name:"Mukesh Maurya", email:"mukesh.ice17@gmail.com", country:"INDIA"}}
        />
        <Footer />
      </div>
      
    )
  }

  export default MyApp