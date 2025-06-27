import React, { useState } from "react";
import InputComponent from "./InputComponent";

export default {
  title: "Components/InputComponent",
  component: InputComponent,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
    dark: { control: "boolean" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <InputComponent
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const LightMode = Template.bind({});
LightMode.args = {
  label: "Your Name",
  name: "name",
  type: "text",
  dark: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  label: "Your Email",
  name: "email",
  type: "email",
  dark: true,
};
