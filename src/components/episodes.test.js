import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Episodes from "./Episodes";

test("Renders without errors", () => {
    render(<Episodes episodes={[]} />);
});

test("Renders episodes correctly", () => {
    const episodes = [
        {
            id: 7845215778,
            season: 1,
            number: 1,
            name: "episode name",
            summary: "episode summary",
            runtime: "61",
        },
        {
            id: 7845215777,
            season: 1,
            number: 2,
            name: "episode name2",
            summary: "episode summary2",
            runtime: "60",
        },
    ];
    const { rerender } = render(<Episodes episodes={[]} />);
    let episodeObj = screen.queryAllByTestId("episode");
    expect(episodeObj).toStrictEqual([]);
    expect(episodeObj).toHaveLength(0);

    rerender(<Episodes episodes={episodes} />);

    episodeObj = screen.queryAllByTestId("episode");
    expect(episodeObj).toHaveLength(2);
});
