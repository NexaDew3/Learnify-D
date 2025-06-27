import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputComponent from "./InputComponent";

describe("InputComponent", () => {
  it("renders with label and input", () => {
    render(
      <InputComponent
        label="Username"
        name="username"
        value=""
        onChange={() => {}}
      />,
    );
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  });

  it("calls onChange when input changes", () => {
    const handleChange = jest.fn();
    render(
      <InputComponent
        label="Email"
        name="email"
        value=""
        onChange={handleChange}
      />,
    );
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders in dark mode", () => {
    render(
      <InputComponent
        label="Password"
        name="password"
        value=""
        onChange={() => {}}
        dark={true}
      />,
    );
    const input = screen.getByLabelText(/Password/i);
    expect(input).toHaveClass("bg-black");
    expect(input).toHaveClass("text-white");
  });
});
