import React from "react";
import Box from "@material-ui/core/Box";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import clsx from "clsx";
import createClasses from "./styles";

const Checkbox = (props: CheckboxProps) => {
    const classes = createClasses();
    const { checked, indeterminate } = props;

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={clsx(
                classes.root,
                checked && classes.checked,
                indeterminate && classes.indeterminate
            )}
        >
            {checked && <DoneRoundedIcon />}
            {indeterminate && <RemoveRoundedIcon />}
        </Box>
    );
};

Checkbox.defaultProps = {
    checked: false
};

export default Checkbox;
