import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/**
 * Copyright Element
 * @return {Element} Copyright
 */
export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{padding: 10}}>
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
