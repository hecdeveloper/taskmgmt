import React from "react";
import {
  FaChevron,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic">
      <li>
        <span><FaInbox/></span> <span>Inbox</span>
      </li>
      <li>
        <span><FaRegCalendar/></span> <span>Today</span>
      </li>
      <li>Next 7 days</li>
    </ul>
  </div>
);
