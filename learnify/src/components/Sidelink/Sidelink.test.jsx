import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidelink from "./Sidelink";
import "@testing-library/jest-dom";

describe("Sidelink Component", () => {
  test("renders user role links", () => {
    render(<Sidelink role="user" activeId="dashboard" onNavigate={() => {}} />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Quiz")).toBeInTheDocument();
    expect(screen.queryByText("Users")).not.toBeInTheDocument(); // only in admin
  });

  test("renders admin role links", () => {
    render(<Sidelink role="admin" activeId="courses" onNavigate={() => {}} />);
    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.queryByText("Leaderboard")).not.toBeInTheDocument(); // only in user
  });

  test("applies active style to selected id", () => {
    render(
      <Sidelink role="admin" activeId="analytics" onNavigate={() => {}} />,
    );
    const activeBtn = screen.getByTestId("nav-analytics");
    expect(activeBtn).toHaveClass("bg-violet-700");
  });

  test("calls onNavigate when a link is clicked", () => {
    const mockFn = jest.fn();
    render(<Sidelink role="user" activeId="dashboard" onNavigate={mockFn} />);
    fireEvent.click(screen.getByText("Quiz"));
    expect(mockFn).toHaveBeenCalledWith("quiz");
  });

  test("renders nothing for unknown role", () => {
    render(<Sidelink role="guest" activeId="" onNavigate={() => {}} />);
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  });
});
