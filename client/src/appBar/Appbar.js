import React from 'react';
import { Button, AppBar, IconButton, Toolbar, Typography, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: [
        'Dancing Script', 
        'cursive',
      ].join(','),
      fontSize: "50px"
    },
  }),
);

export default function Appbar() {
  const classes = useStyles();

  return (
    <Grid item>
      <AppBar position="static">
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} md={10}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            orflies
          </Typography>
          <Button color="inherit">SHOP</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">CONTACT</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">BLOG</Button>
        </Toolbar>
        </Grid>
        </Grid>
      </AppBar>
    </Grid>
  )
}