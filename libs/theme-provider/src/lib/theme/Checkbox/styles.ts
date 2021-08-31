import { makeStyles } from "@material-ui/core/styles";
import { palette, spacing } from "../definitions";

const createClasses = makeStyles(() => ({
    root: {
        pointerEvents: "none",
        width: "16px",
        height: "16px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: spacing(0.5),
        borderColor: palette.primary[0],
        backgroundColor: palette.common.white,
        zIndex: 1,
        color: palette.common.white,
        "&:hover": {
            borderColor: palette.info.main
        }
    },
    checked: {
        backgroundColor: palette.info.main,
        borderColor: palette.info.main
    },
    disabled: {
        borderColor: palette.grey[200]
    },
    checkedDisabled: {
        borderColor: palette.grey[200],
        backgroundColor: palette.error.main
    },
    indeterminate: {
        color: palette.info.main,
        borderColor: palette.info.main
    }
}));

export default createClasses;
