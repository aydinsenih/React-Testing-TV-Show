import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Renders without errors", () => {
    render(<App />);
});

test("Render Dropdown API call", async () => {
    render(<App />);
    await waitFor(() => {
        expect(screen.getByText(/select a season/i));
    });
    userEvent.click(screen.getByText(/select a season/i));
    userEvent.click(screen.getByText(/season 1/i));
});
