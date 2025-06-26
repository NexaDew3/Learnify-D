import React from "react";
import Button from "./Button";

// Default export for Storybook
export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    bgColor: { control: "text" },
    textColor: { control: "text" },
    label: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    borderRadius: { control: "text" },
    border: { control: "text" },
    hoverStyles: { control: "text" },
    icon: { control: "text" },
  },
};

// Template function
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  bgColor: "bg-blue-600",
  textColor: "text-white",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Download",
  icon: "https://img.icons8.com/ios-filled/50/download.png",
  bgColor: "bg-green-600",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  label: "Wide Button",
  width: "w-full",
  height: "h-12",
};
