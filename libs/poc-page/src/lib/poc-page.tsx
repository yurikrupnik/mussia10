import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@mussia10/avatar';
import { Pagination } from '@mussia10/pagination';
import { TextWithBorder } from '@mussia10/text-with-border';

/* eslint-disable-next-line */
export interface PocPageProps {}

export function PocPage(props: PocPageProps) {
  const [page, setPage] = useState(0);
  const handleChangePage = useCallback((e, newPage) => setPage(newPage), []);

  return (
    <div>
      <h1>Welcome to PocPage!</h1>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Avatar
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png"
            initials="SK"
            backgroundColor="#E46086"
            size="medium"
            emailVerified={true}
          />
        </Grid>
        <Grid item>
          <Pagination
            page={page}
            count={100}
            rowsPerPage={10}
            onChangePage={handleChangePage}
          />
        </Grid>
        <Grid item>
          <TextWithBorder content="Healthy" color="#44D7B6" />
        </Grid>
      </Grid>
    </div>
  );
}

export default PocPage;
