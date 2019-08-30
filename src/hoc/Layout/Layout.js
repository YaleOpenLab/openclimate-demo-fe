import React, { useState } from "react";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import SideBar from "../../components/Layout/SideBar/SideBar";

const LayoutWrapper = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <SideBar
        active={open}
        toggleSideBar={() => setOpen(prevState => !prevState)}
      />
      <Header toggleSideBar={() => setOpen(prevState => !prevState)} />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
