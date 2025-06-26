import React from "react";

const navItems = {
  user: [
    { id: "dashboard", text: "Dashboard" },
    { id: "courses", text: "Course Details" },
    { id: "statistics", text: "Statistics" },
    { id: "quiz", text: "Quiz" },
    { id: "checkout", text: "Checkout" },
    { id: "profile", text: "Profile" },
    { id: "leaderboard", text: "Leaderboard" },
  ],
  admin: [
    { id: "dashboard", text: "Dashboard" },
    { id: "courses", text: "Courses" },
    { id: "users", text: "Users" },
    { id: "analytics", text: "Analytics" },
    { id: "settings", text: "Settings" },
  ],
};

const Sidelink = ({ role, activeId, onNavigate }) => {
  const links = navItems[role] || [];

  return (
    <nav className="flex flex-col gap-2 p-4 text-white">
      {links.map(({ id, text }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-left transition-colors duration-200 ${
            activeId === id ? "bg-violet-700" : "hover:bg-violet-800"
          }`}
          data-testid={`nav-${id}`}
        >
          {text}
        </button>
      ))}
    </nav>
  );
};

export default Sidelink;
