import React from "react";
import {
  FaInbox,
  FaRegCalendar,
  FaChevronDown,
  FaRegCalendarAlt,
} from "react-icons/fa";


// componente presentacional para el sidebar

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic">
      <li>
        <span><FaInbox/></span> <span>Inbox</span>
      </li>
      <li>
        <span><FaRegCalendar/></span> <span>Hoy</span>
      </li>
      <li>
        <span><FaRegCalendarAlt/></span> <span>Proximos 7 dias! </span>
      </li>

    </ul>
    <div className="sidebar__middle"> 
      <span><FaChevronDown/></span> 
      <h2>Proyectos</h2>
    </div>
    <ul className="side_bar_projects">Los Proyectos iran aqui</ul>
    Agregar proyectos!
  </div> 
);
