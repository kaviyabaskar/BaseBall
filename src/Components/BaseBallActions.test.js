import { render, screen } from "@testing-library/react";
import BaseBallAction from "./BaseBallAction";

test("Renders Title of the application", () => {
  render(<BaseBallAction />);
  const linkElement = screen.getByText(/BaseBall Leguage Management System/i);
  expect(linkElement).toBeInTheDocument();
});
