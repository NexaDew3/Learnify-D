import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  test("renders LOGIN heading by default", () => {
    render(<Login />);
    const heading = screen.getByRole("heading", { name: /login/i });
    expect(heading).toBeInTheDocument();
  });

  test("toggles to CREATE ACCOUNT view", () => {
    render(<Login />);
    const toggleButton = screen.getByRole("button", {
      name: /create account/i,
    });
    fireEvent.click(toggleButton);

    const heading = screen.getByRole("heading", { name: /create account/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders input fields for login", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test("renders extra fields for signup", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/phone number/i)).toBeInTheDocument();
  });

  test("toggles back to LOGIN view", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /create account/i }));
    fireEvent.click(screen.getByRole("button", { name: /^login$/i }));

    const heading = screen.getByRole("heading", { name: /login/i });
    expect(heading).toBeInTheDocument();
  });
});
