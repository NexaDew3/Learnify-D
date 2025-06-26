import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders with label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders icon when provided", () => {
    render(
      <Button
        label="Download"
        icon="https://img.icons8.com/ios-filled/50/download.png"
      />,
    );
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  test("applies custom styles", () => {
    render(
      <Button
        label="Styled"
        bgColor="bg-red-500"
        textColor="text-black"
        width="w-full"
      />,
    );
    const button = screen.getByText("Styled").parentElement;
    expect(button).toHaveClass("bg-red-500", "text-black", "w-full");
  });
});
