import { render, screen } from "@testing-library/react";
import App from "./App";
import { greet } from "./App";

it("", () => {
  const result = greet("Tribiyani");
  expect(result).toMatch("Welcome Tribiyani");
});
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
