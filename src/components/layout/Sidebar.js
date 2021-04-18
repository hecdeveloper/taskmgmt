import React from "react";
import {
  FaInbox,
  FaRegCalendar,
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
      <li>Proximos 7 dias</li>
    </ul>
  </div>
);
