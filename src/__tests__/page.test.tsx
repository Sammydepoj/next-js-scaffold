import { screen } from "@testing-library/react";
import { renderWithClient } from "@/lib/test-utils";
import Page from "@/app/page";

describe("Page", () => {
  it("renders a heading", () => {
    renderWithClient(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Campus Test Project/i);
  });
});
