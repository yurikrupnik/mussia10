import React from "react";
import { cleanup, render } from "@testing-library/react";
import Avatar from "../Avatar";

afterEach(cleanup);

describe("Check Avatar component", () => {
    it(`should render Avatar with initials(tag p)`, () => {
        const initials = "SK";
        const { queryByText } = render(<Avatar initials={initials} />);
        const initialsEl = queryByText(initials);
        expect(initialsEl?.innerHTML).toBe(initials);
    });
    it(`should render Avatar with src`, () => {
        const src =
            "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png";
        const { container } = render(<Avatar initials="SK" src={src} />);
        const imgEl = container.querySelector("img");
        expect(imgEl?.src).toBe(src);
        expect(imgEl).not.toBeNull();
    });

    it(`should render Avatar with icon`, () => {
        const src =
            "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png";
        const { container } = render(<Avatar icon={{ src }} />);
        const iconEl = container.querySelector("svg");
        expect(iconEl).toBeFalsy();
    });
});
