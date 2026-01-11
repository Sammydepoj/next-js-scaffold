import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithClient } from "@/lib/test-utils";
import SampleForm from "@/components/sample-form";

// Mock alert
const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

describe("SampleForm", () => {
  beforeEach(() => {
    mockAlert.mockClear();
  });

  it("renders the form fields", () => {
    renderWithClient(<SampleForm />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    const user = userEvent.setup();
    renderWithClient(<SampleForm />);

    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/Name must be at least 2 characters/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for invalid email", async () => {
    const user = userEvent.setup();
    renderWithClient(<SampleForm />);

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });

    await user.type(nameInput, "John");
    await user.type(emailInput, "invalid-email");

    // Blur to trigger potential validation early or just click
    await user.tab();
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
    });
  });

  it("submits the form successfully with valid data", async () => {
    const user = userEvent.setup();
    renderWithClient(<SampleForm />);

    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitBtn = screen.getByRole("button", { name: /Submit/i });

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");

    await user.click(submitBtn);

    await waitFor(
      () => {
        expect(mockAlert).toHaveBeenCalledWith("Form submitted successfully!");
      },
      { timeout: 4000 }
    );

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
