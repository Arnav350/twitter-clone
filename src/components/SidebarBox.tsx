import React from "react";
import { IconType } from "react-icons/lib";
import "../App.css";

interface IProps {
  current?: boolean;
  element: IconType;
  secondary: IconType;
  text: string;
}

function SidebarBox(props: IProps) {
  return (
    <div className="sidebar__box ">
      <div className={`sidebar__link sidebar--${props.current}`}>
        {props.current ? (
          <props.secondary className="sidebar__icon" />
        ) : (
          <props.element className="sidebar__icon" />
        )}

        <h3 className="sidebar__text">{props.text}</h3>
      </div>
    </div>
  );
}

export default SidebarBox;
