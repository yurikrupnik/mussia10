import { makeStyles } from '@material-ui/core/styles';

const createClasses = makeStyles((theme) => ({
  root: {
    backgroundColor: (props: { backgroundColor: string | undefined }) =>
      props.backgroundColor,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  initials: {
    // ...theme.typography.caption1 // Try with theme provider
    ...theme.typography.caption,
  },
  icon: {
    width: '16px',
    fill: theme.palette.primary.main,
    '& > div': {
      display: 'flex',
    },
  },
}));

export default createClasses;
