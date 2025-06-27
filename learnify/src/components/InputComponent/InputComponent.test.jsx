import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputComponent from "./InputComponent";

describe("InputComponent", () => {
  it("renders with placeholder", () => {
    render(
      <InputComponent
        name="username"
        placeholder="Username"
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
  });

  it("calls onChange when input changes", () => {
    const handleChange = jest.fn();
    render(
      <InputComponent
        name="email"
        placeholder="Email"
        value=""
        onChange={handleChange}
      />
    );
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "test@example.com" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders in dark mode", () => {
    render(
      <InputComponent
        name="password"
        placeholder="Password"
        value=""
        onChange={() => {}}
        dark={true}
      />
    );
    const input = screen.getByPlaceholderText(/Password/i);
    expect(input).toHaveClass("bg-black");
    expect(input).toHaveClass("text-white");
  });
});
