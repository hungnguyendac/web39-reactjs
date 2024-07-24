// rafce
// import React from 'react'

import Header from "./components/header/Header"
import SideNav from "./components/sidebar/SideNav"
import Content from "./components/main-content/Content";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
      <>
          <Header />
          <div style={{ display: "flex" }}>
              <SideNav />
              <Content />
              <SideNav />
          </div>
          <Footer/>
      </>
  );
}

export default App