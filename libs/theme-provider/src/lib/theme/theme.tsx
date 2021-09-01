import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import IconButton from '@material-ui/core/IconButton';
import { ReactSVG } from 'react-svg';
import { palette, spacing, typography } from './definitions';
import Checkbox from './Checkbox';

const endIcon = {
  marginRight: '0 !important',
  marginLeft: spacing(1),
};

const startIcon = {
  marginRight: spacing(1),
  marginLeft: '0 !important',
};

const containedPrimaryActive = {
  backgroundColor: palette.info[600],
};
const shadows = [
  'none',
  '0px 2px 6px #4F72BF26',
  '0px 0px 10px #4F72BF1F',
  '0px 0px 15px #347FF726',
  '0px 0px 20px #4F72BF33',
  '0px 0px 6px #00000058',
];

const containedSecondaryActive = {
  boxShadow: `${shadows[2]} !important`,
  backgroundColor: palette.common.white,
  color: palette.info[600],
};

const theme = createTheme({
  typography,
  palette,
  spacing,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440,
    },
  },
  // Remove this when we have 25 box shadows
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  shadows: [...shadows, ...Array(25 - shadows.length).fill('none')],
  props: {
    MuiSwitch: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'default',
    },
    MuiBadge: {
      color: 'error',
    },
    MuiTabs: {
      textColor: 'primary',
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButtonGroup: {
      variant: 'contained',
      color: 'secondary',
      disableRipple: true,
      disableElevation: true,
    },
    MuiButton: {
      disableElevation: true,
      variant: 'contained',
    },
    MuiCard: {
      elevation: 0,
    },
    MuiTooltip: {
      arrow: true,
      interactive: true,
      leaveDelay: 300,
      placement: 'top',
    },
    MuiMenu: {
      disablePortal: true,
    },
    MuiList: {
      disablePadding: true,
    },
    MuiCheckbox: {
      color: 'default',
      disableRipple: true,
      icon: <Checkbox />,
      checkedIcon: <Checkbox checked />,
      indeterminateIcon: <Checkbox indeterminate />,
    },
    MuiTextField: {
      variant: 'outlined',
      rows: 3,
    },
    MuiSelect: {
      variant: 'outlined',
      IconComponent: ExpandMoreRoundedIcon,
    },
    MuiAlert: {
      severity: 'info',
      variant: 'filled',
      iconMapping: {
        success: 'Success!',
        error: 'Danger!',
        info: 'Info!',
        warning: 'Warning!',
      },
    },
    MuiChip: {
      tabIndex: undefined,
      deleteIcon: (
        <IconButton size="small" aria-label="Remove chip">
          <ReactSVG src="https://perimeter81-frontend-assets.s3.amazonaws.com/icons/icon_closeCircle.svg" />
        </IconButton>
      ),
    },
    MuiAccordionSummary: {
      // To disable the built in material-ui's button role
      role: undefined,
      tabIndex: null as unknown as undefined,
      IconButtonProps: {
        'aria-hidden': undefined,
      },
      expandIcon: (
        <IconButton>
          <ReactSVG src="https://perimeter81-frontend-assets.s3.amazonaws.com/icons/icon_arrow.svg" />
        </IconButton>
      ),
    },
  },
  overrides: {
    MuiChip: {
      root: {
        ...typography.caption1,
        backgroundColor: palette.grey[100],
        height: '24px',
      },
      sizeSmall: {
        height: '16px',
      },
      label: {
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
      },
      deletable: {
        '&:focus': {
          backgroundColor: palette.grey[100],
        },
      },
      deleteIcon: {
        margin: 0,
        fill: palette.primary[200],
        display: 'flex',
        '& > .MuiIconButton-label > div > div': {
          display: 'flex',
          width: '16px',
        },
      },
      deleteIconSmall: {
        marginLeft: 0,
        marginRight: 0,
        '& > .MuiIconButton-label > div > div': {
          width: '10px',
        },
      },
    },
    MuiButtonGroup: {
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: palette.primary[0],
          borderRight: 'none',
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '6px',
          height: '6px',
        },
        '::-webkit-scrollbar-thumb': {
          background: palette.background.scrollbar,
          borderRadius: spacing(1.5),
        },
      },
    },
    MuiAlert: {
      root: {
        boxShadow: shadows[4],
        borderLeft: `4px solid ${palette.info.main}`,
        padding: spacing(1.75, 2),
        display: 'flex',
        alignItems: 'center',
      },
      icon: {
        ...typography.h5,
        alignItems: 'center',
        marginRight: spacing(1),
        padding: 0,
      },
      message: {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
      },
      action: {
        fill: palette.primary[200],
        marginRight: 0,
        paddingLeft: 0,
        '& > *': {
          marginLeft: spacing(2),
        },
        '& .MuiIconButton-root': {
          padding: 0,
          '& > .MuiIconButton-label > div': {
            height: '16px',
            width: '16px',
            '& > div': {
              display: 'flex',
            },
          },
        },
      },
      filledSuccess: {
        borderColor: palette.success.main,
        color: palette.success.main,
        backgroundColor: palette.common.white,
      },
      filledError: {
        borderColor: palette.error.main,
        color: palette.error.main,
        backgroundColor: palette.common.white,
      },
      filledInfo: {
        borderColor: palette.info.main,
        color: palette.info.main,
        backgroundColor: palette.common.white,
        '& .MuiAlert-message': {
          color: palette.grey[700],
        },
      },
      filledWarning: {
        borderColor: palette.warning.main,
        color: palette.warning.main,
        backgroundColor: palette.common.white,
      },
    },
    MuiPopover: {
      root: {
        cursor: 'auto',
      },
    },
    MuiSelect: {
      root: {
        '&$disabled': {
          color: `${palette.grey[300]} !important`,
        },
        paddingRight: `${spacing(4)}px !important`,
      },
      icon: {
        color: palette.primary[600],
        top: 'initial',
      },
      iconOutlined: {
        right: spacing(1.5),
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: palette.primary[0],
      },
    },
    MuiOutlinedInput: {
      root: {
        ...typography.body2,
        lineHeight: `${spacing(2)}px`,
        '& fieldset': {
          borderColor: palette.primary[0],
        },
        '&:hover fieldset': {
          borderColor: `${palette.primary[100]} !important`,
        },
        '&$focused fieldset': {
          borderWidth: `${spacing(1 / 8)}px !important`,
          borderColor: `${palette.info.main} !important`,
          boxShadow: '0px 0px 15px #347FF726',
        },
        '&$disabled fieldset': {
          borderColor: `${palette.grey[300]} !important`,
          color: palette.grey[300],
        },
        '&$error': {
          '& fieldset': {
            borderColor: `${palette.error.main} !important`,
          },
          '&:hover fieldset': {
            borderColor: `${palette.error.main} !important`,
          },
          '&$focused fieldset': {
            borderColor: `${palette.error.main} !important`,
          },
        },
      },
      colorSecondary: {
        '& fieldset': {
          borderColor: `${palette.success.main} !important`,
        },
        '&:hover fieldset': {
          borderColor: `${palette.success.main} !important`,
        },
        '&$focused fieldset': {
          borderColor: `${palette.success.main} !important`,
        },
      },
      input: {
        padding: 0,
      },
      inputMarginDense: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      adornedEnd: {
        paddingRight: spacing(2),
      },
    },
    MuiFormHelperText: {
      contained: {
        marginTop: spacing(0.25),
        marginLeft: spacing(2),
        marginRight: spacing(2),
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: palette.common.white,
      },
      input: {
        padding: `${spacing(1.5, 2)} !important`,
        color: palette.primary.main,
        '&::placeholder': {
          color: palette.grey[500],
        },
      },
      inputMarginDense: {
        padding: `${spacing(1, 2)} !important`,
      },
      adornedEnd: {
        '& > div': {
          width: spacing(2),
          fill: palette.primary[600],
        },
        '&$disabled > div': {
          fill: palette.grey[300],
        },
      },
      multiline: {
        padding: '0 !important',
      },
      inputMultiline: {
        padding: `${spacing(2)}px !important`,
      },
    },
    MuiInputLabel: {
      root: {
        ...typography.h4,
        display: 'flex',
        flexDirection: 'column',
        color: palette.primary[600],
        '& > div': {
          marginTop: spacing(1),
        },
      },
    },
    MuiFormGroup: {
      root: {
        '& .Mui-disabled': {
          color: palette.grey[300],
        },
      },
    },
    MuiRadio: {
      root: {
        color: palette.primary[0],
        '&:hover': {
          color: palette.info.main,
        },
        '&$checked': {
          color: palette.info.main,
        },
        '&$disabled': {
          color: palette.grey[200],
          '&$checked': {
            color: palette.grey[300],
          },
        },
      },
      colorSecondary: {
        color: palette.error.main,
        '&:hover': {
          color: palette.error.main,
          backgroundColor: palette.action.hover,
        },
        '&$checked': {
          color: palette.error.main,
        },
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: `${palette.primary[0]} !important`,
      },
    },
    MuiTableCell: {
      root: {
        padding: spacing(0, 2),
        borderBottom: `1px solid ${palette.primary[0]}`,
      },
    },
    MuiTable: {
      root: {
        '& .MuiCheckbox-root:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTableRow: {
      root: {
        height: '72px',
        '&$selected': {
          backgroundColor: palette.grey[100],
          '& .MuiTableCell-root': {
            backgroundColor: palette.grey[100],
          },
        },
      },
      head: {
        height: '48px',
      },
      hover: {
        '&:hover .MuiTableCell-root': {
          backgroundColor: `${palette.grey[100]} !important`,
        },
        '&:hover:after': {
          backgroundColor: `${palette.grey[100]} !important`,
        },
      },
    },
    MuiCheckbox: {
      root: {
        padding: spacing(1),
        '&$disabled .MuiBox-root': {
          borderColor: palette.grey[200],
        },
        '&$checked': {
          '&$disabled .MuiBox-root': {
            backgroundColor: palette.grey[200],
            borderColor: palette.grey[200],
          },
        },
        opacity: 1,
      },
      colorSecondary: {
        '&:hover': {
          backgroundColor: palette.action.hover,
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        '& .MuiIconButton-colorSecondary .MuiBox-root': {
          borderColor: `${palette.error.main} !important`,
        },
      },
      label: {
        ...typography.body2,
        color: palette.grey[700],
        '&$disabled': {
          color: palette.grey[700],
        },
      },
    },
    MuiBadge: {
      badge: {
        minWidth: 0,
        width: '14px',
        height: '14px',
      },
    },
    MuiIconButton: {
      root: {
        '&:focus-visible': {
          backgroundColor: palette.action.hover,
        },
      },
      sizeSmall: {
        padding: spacing(1),
      },
    },
    MuiTabs: {
      root: {
        ...typography.h5,
        minHeight: 0,
        '& button': {
          height: '32px',
        },
        '& a': {
          ...typography.interactive1,
          height: '40px',
        },
      },
      scroller: {
        display: 'flex',
      },
      indicator: {
        backgroundColor: palette.info.main,
        borderRadius: '1px',
      },
    },
    MuiTab: {
      root: {
        minHeight: 0,
        minWidth: '0 !important',
        padding: 0,
        marginRight: spacing(2),
        '&:last-child': {
          marginRight: '0',
        },
        '&:hover': {
          color: palette.info.main,
        },
        textTransform: 'capitalize',
      },
      textColorPrimary: {
        color: palette.primary[600],
        '&$selected': {
          color: palette.info.main,
        },
      },
    },
    MuiToolbar: {
      root: {
        padding: `14px ${spacing(4)}px`,
      },
    },
    MuiAvatar: {
      root: {
        color: palette.common.white,
        border: `1px solid ${palette.primary[600]}`,
      },
    },
    MuiSvgIcon: {
      root: {
        height: '16px',
        width: '16px',
      },
    },
    MuiList: {
      root: {
        margin: spacing(1, 0),
        '& ul': {
          margin: 0,
          '& > :not(:last-child)': {
            marginBottom: spacing(0.25),
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 0,
      },
    },
    MuiButton: {
      root: {
        ...typography.body2,
        minWidth: spacing(),
        textTransform: 'capitalize',
        height: '40px',
        padding: 0,
      },
      containedPrimary: {
        backgroundColor: palette.info.main,
        '&$disabled': {
          backgroundColor: palette.grey[300],
          color: palette.common.white,
        },
        '&:focus': containedPrimaryActive,
        '&:focus:not(:focus-visible)': {
          backgroundColor: palette.info.main,
          '&:hover': containedPrimaryActive,
        },
        '&:focus-visible': containedPrimaryActive,
        '&:hover': containedPrimaryActive,
      },
      containedSecondary: {
        backgroundColor: palette.common.white,
        border: `1px solid ${palette.primary[0]}`,
        borderRadius: spacing(0.5),
        color: palette.info.main,
        '&$disabled': {
          backgroundColor: palette.common.white,
          color: palette.grey[300],
          '& svg': {
            fill: palette.grey[300],
          },
        },
        '&:focus-visible': containedSecondaryActive,
        '&:hover': containedSecondaryActive,
        '& svg': {
          fill: palette.info.main,
        },
      },
      text: {
        height: 'auto',
      },
      textPrimary: {
        padding: 0,
        '& span': {
          padding: 0,
        },
        fill: palette.info.main,
        color: palette.info.main,
        '&$disabled': {
          color: palette.grey[300],
        },
        '&:hover': {
          backgroundColor: 'inherit',
          color: palette.info[600],
          fill: palette.info[600],
        },
        '&:focus-visible': {
          color: palette.info[600],
          fill: palette.info[600],
        },
      },
      label: {
        padding: spacing(0, 2),
        '& > svg': {
          margin: spacing(0, -0.5),
        },
        // Support reactSVG
        '& > div': {
          width: spacing(1),
          display: 'flex',
          justifyContent: 'center',
          '& > div': {
            height: '16px',
          },
        },
      },
      sizeLarge: {
        ...typography.body2,
        height: '48px',
        padding: spacing(2),
        '& span': {
          padding: 0,
        },
        '& svg': {
          margin: 0,
        },
      },
      containedSizeSmall: {
        ...typography.body2,
        height: '32px',
        padding: 0,
        '& .MuiButton-endIcon': endIcon,
        '& .MuiButton-startIcon': startIcon,
        '& > .MuiButton-label > svg': {
          margin: spacing(0, -1),
        },
        '& > .MuiButton-label > div': {
          margin: spacing(0, -0.5),
        },
      },
      endIcon,
      startIcon,
    },
    MuiTooltip: {
      tooltip: {
        ...typography.caption1,
        backgroundColor: palette.primary[800],
        padding: spacing(1),
        borderRadius: spacing(0.5),
        '& .injected-svg': {
          width: '16px',
          fill: palette.common.white,
          display: 'flex',
        },
      },
      arrow: {
        color: palette.primary[800],
      },
    },
    MuiCard: {
      root: {
        padding: spacing(2),
        border: `1px solid ${palette.primary[0]}`,
        borderRadius: spacing(1),
        boxShadow: `0px 2px 6px ${palette.primary[0]}`,
      },
    },
    MuiMenu: {
      paper: {
        border: `1px solid ${palette.primary[0]}`,
        borderRadius: spacing(0.5),
        boxShadow: '0px 0px 10px #3B74A81F',
        overflow: 'unset',
        '&:before': {
          boxShadow: '0px 0px 10px #3B74A81F',
          borderTop: `1px solid ${palette.primary[0]}`,
          borderLeft: `1px solid ${palette.primary[0]}`,
          content: "''",
          position: 'absolute',
          top: '-4px',
          left: '8px',
          width: '8px',
          height: '8px',
          backgroundColor: palette.common.white,
          transform: 'rotate(45deg)',
        },
      },
      list: {
        borderRadius: spacing(0.5),
        backgroundColor: palette.common.white,
      },
    },
    MuiMenuItem: {
      root: {
        ...typography.body2,
        height: '40px',
        color: palette.grey[700],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pointerEvents: 'all !important',
        '&:hover': {
          backgroundColor: palette.grey[100],
        },
      },
    },
    MuiSwitch: {
      root: {
        width: '44px',
        height: '24px',
        padding: 0,
        alignItems: 'center',
        borderRadius: spacing(1.75),
        '&:hover': {
          boxShadow: shadows[3],
        },
      },
      track: {
        backgroundColor: palette.primary[0],
        opacity: 1,
      },
      thumb: {
        width: '20px',
        height: '20px',
      },
      switchBase: {
        padding: spacing(0.25),
      },
      colorPrimary: {
        '& .MuiSwitch-thumb': {
          backgroundColor: palette.common.white,
        },
        '& .MuiSwitch-track': {
          backgroundColor: palette.info.main,
          opacity: 1,
        },
        '&$checked': {
          '& + $track': {
            backgroundColor: palette.info.main,
            opacity: 1,
          },
        },
        '&$disabled': {
          '& .MuiSwitch-thumb': {
            backgroundColor: palette.common.white,
            opacity: 0.4,
          },
          '& + $track': {
            backgroundColor: palette.primary[0],
            opacity: 1,
          },
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        height: '72px',
      },
      content: {
        alignItems: 'center',
      },
      expandIcon: {
        '& .MuiIconButton-label > div > div': {
          display: 'flex',
          width: '16px',
          fill: palette.primary.main,
        },
      },
    },
  },
});

export default theme;
