import React from "react";
import { cleanup, render } from "@testing-library/react";
import Checkbox from "../Checkbox";

afterEach(cleanup);

describe("Check Checkbox", () => {
    it(`Should render an unchecked Checkbox`, () => {
        render(<Checkbox />);
    });
    it(`Should render a checked Checkbox`, () => {
        render(<Checkbox checked />);
    });
});
