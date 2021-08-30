import React, { memo } from 'react';
import type { FC } from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import type { AvatarProps as MuiAvatarProps } from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { ReactSVG } from 'react-svg';
import createClasses from './styles';

export interface AvatarProps extends MuiAvatarProps {
  size?: 'medium' | 'small';
  initials?: string;
  backgroundColor?: string;
  emailVerified?: boolean;
  src?: string;
  icon?: {
    src: string;
  };
}

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const { src, initials, backgroundColor, size, emailVerified, icon } = props;
  const classes = createClasses({ backgroundColor });

  return (
    <MuiAvatar
      src={emailVerified ? src : undefined}
      className={`${classes.root} ${size && classes[size]} `}
    >
      {initials && emailVerified && !src && (
        <Typography className={classes.initials} component="span">
          {initials}
        </Typography>
      )}
      {!emailVerified && <PersonAddDisabledIcon color="primary" />}
      {icon?.src && <ReactSVG className={classes.icon} src={icon.src} />}
    </MuiAvatar>
  );
};

Avatar.defaultProps = {
  size: 'medium',
  backgroundColor: '#ffffff',
  emailVerified: true,
  src: '',
  initials: '',
};

const m = memo(Avatar);
export { m as Avatar };
