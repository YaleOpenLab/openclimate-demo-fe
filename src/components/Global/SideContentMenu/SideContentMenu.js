import React, { Component } from "react";
import "./SideContentMenu.scss";
import Info from "./Info/Info";
import Menu from "./Menu/Menu";
import ComplexMenu from "./ComplexMenu/ComplexMenu";

const SideContentMenu = ({ complex, menu, current}) => {
  const category = menu.find(x => x.index === current.category);
  const list = category && category.list && category.list.length ? category.list : [];
  const selected = list.find(x => '' + x.Index === current.id) || {};
  const showSecondMenu = selected.subnationals || selected.organizations;

  const data = showSecondMenu ? [
    {
      index: "subnationals",
      title: "Subnationals",
      list: selected.subnationals,
    },
    {
      index: "organizations",
      title: "Organizations",
      list: selected.organizations,
    }
  ] : [];

  return (
    <div className="side-content-panel">
      <Info />
      {complex ? <ComplexMenu data={menu} /> : <Menu data={menu} current={current} />}
      {showSecondMenu  && <Menu data={data} current={current} /> }
    </div>
  );
};

export default SideContentMenu;
