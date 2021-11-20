import React from "react";
import { Link } from "react-router-dom";
import "./Layout.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="Layout">
      <div className="Layout-SidePanel">
        <div className="Layout-Logo">Biotrika</div>
        <div className="Layout-Menu">
          <Link  to="/persons">Сотрудники</Link>
          <Link  to="/blurb">Реклама</Link>
          <Link  to="/">Клиенты</Link>
          <Link  to="/">Проекты</Link>
          <Link  to="/">Команды</Link>
        </div>
      </div>
      <div className="Layout-Content">{children}</div>
    </div>
  );
};



export default Layout;
