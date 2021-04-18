import React from "react";
import {
  FaChevron,
  FaInbox,
  FaRegCalendarAlt,
  FaRaCalendar,
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic">
      <li>
        {" "}
        <span><FaInbox/></span> <span>Inbox</span>
      </li>
      <li>Today</li>
      <li>Next 7 days</li>
    </ul>
  </div>
);
