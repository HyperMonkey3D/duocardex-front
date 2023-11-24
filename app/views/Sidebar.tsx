"use client";
import { useState } from "react";
import ExpandedMenu from "../components/ExpandedMenu";
import CollapsedMenu from "../components/CollapsedMenu";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuBarClass = "bg-light-gray h-full flex flex-col justify-between ";

  const collapseMenuBar = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  return (
    <nav className="bg-brand-light-gray py-8 px-3 w-fit">
      <div
        className={
          isCollapsed
            ? `${menuBarClass} nav-collapsed`
            : `${menuBarClass} nav-expanded`
        }
      >
        <div className="w-full h-[95px] px-4 pb-1 bg-brand-blue border border-brand-blue rounded-t-lg flex flex-col justify-end">
          <p className="text-white text-2xl font-bold">
            Duo<br></br>Cardex{" "}
          </p>
          <button onClick={collapseMenuBar}>collapse</button>
        </div>
        <div className="bg-white px-4 py-10 border-x border-b border-brand-accent-gray rounded-b-lg w-full   h-full flex flex-col justify-between">
          {!isCollapsed && <ExpandedMenu />}
          {isCollapsed && <CollapsedMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
