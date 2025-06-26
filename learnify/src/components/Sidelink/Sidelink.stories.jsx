import React from "react";
import Sidelink from "./Sidelink";

export default {
  title: "Atoms/Sidelink",
  component: Sidelink,
};

const Template = (args) => <Sidelink {...args} />;

export const AdminLinks = Template.bind({});
AdminLinks.args = {
  role: "admin",
  activeId: "dashboard",
  onNavigate: (id) => alert(`Navigated to ${id}`),
};

export const UserLinks = Template.bind({});
UserLinks.args = {
  role: "user",
  activeId: "profile",
  onNavigate: (id) => alert(`Navigated to ${id}`),
};

export const NoRole = Template.bind({});
NoRole.args = {
  role: "guest",
  activeId: "",
  onNavigate: () => {},
};
