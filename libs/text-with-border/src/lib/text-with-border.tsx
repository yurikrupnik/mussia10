import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const createClasses = makeStyles((theme) => ({
  root: (props: { color: string }) => {
    const { color } = props;
    return {
      // ...theme.typography.caption2,
      ...theme.typography.caption,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(0, 2),
      backgroundColor: theme.palette.common.white,
      borderColor: color,
      color,
    };
  },
}));

export interface TextWithBorderProps {
  content: string;
  color: string;
}

const TextWithBorder = (props: TextWithBorderProps) => {
  const { content, color } = props;

  const classes = createClasses({ color });

  return <Typography className={classes.root}>{content}</Typography>;
};

const m = memo(TextWithBorder);
export { m as TextWithBorder };
