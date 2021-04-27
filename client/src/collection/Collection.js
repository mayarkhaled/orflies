import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';

export async function fetch(url) {
    const config = {
        url: "http://localhost:3000" + url,
    };
    return (await Axios(config)).data;
}

const font = 'Architects Daughter';
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
        },
        img:{
            maxWidth:"100%",
            maxHeight:"100%",
        },
        pageTitle:{
            fontFamily: [
                font, 
                'cursive',
              ].join(','),
              fontSize: "40px",
              margin: "15px 0px"
        },
        itemTitle:{
            textTransform: "uppercase",
            fontFamily: [
                "Times New Roman", "Times", "serif",
              ].join(','),
              fontSize: "1.25rem",
        },
        itemPrice:{
            fontFamily: [
                "Times New Roman", "Times", "serif",
              ].join(','),
              fontSize: "1rem",
        }

    }),
);

export default function Collection({name}) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        const url = '/home/items/';
        const run = async () => {
            const data = await fetch(url);
            setItems(data);
            console.log(data);
            setLoading(false);
        };
        run();
    }, []);

    const ItemComp = (itemData) =>
        (<Grid
            item
            md={4}
            xs={6}
            container
            alignItems="center"
            justify="center"
            direction="column"
            >
            <Paper variant="elevation" className={classes.paper} onClick={()=>history.push("/items/"+itemData._id)} >
                <img className={classes.img} src={itemData.item_image[0]} />
                <Typography variant="h6" className={classes.itemTitle}>{itemData.item_descrption}</Typography>
                <Typography variant="h6" className={classes.itemPrice}>${itemData.item_price}</Typography>
            </Paper>
            
        </Grid>);

    return (
        <div className={classes.root}>
            <Grid container
            justify="center"
            direction="column"
            alignItems="center">
                <Typography variant="h6" className={classes.pageTitle}>
                    {name}
                </Typography>
                <Grid
                    container
                    item
                    spacing={3}
                    md={10}
                    xs={12}
                    direction="row"
                    justify="center"
                    alignItems="center">
                    {items.map((item) => ItemComp(item))}
                </Grid>
            </Grid>
        </div>
    );
}
