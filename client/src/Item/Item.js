import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, Grid, Typography, Link, makeStyles, createStyles, Theme, Paper } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

async function fetch(url: string) {
    const config = {
        url: "http://localhost:3000" + url,
    };
    return (await Axios(config)).data;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        breadcrumb: {
            margin: "15px 0px",
        },
        img: {
            maxWidth: "100%",
            maxHeight: "100%",
            height:"auto"
        },
        text:{
            textAlign :"center",
        },
        price: {
            textAlign: "center",
            margin: "15px 0px"
        }
    }),
);


export default function Item() {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        const url = '/home/items/' + id;
        const run = async () => {
            const data = await fetch(url);
            setItem(data);
            console.log(data);
            setLoading(false);
        };
        run();
    }, []);

    return (
        <Grid container
            justify="center"
            direction="column"
            alignItems="center">
            <Grid item container
                justify="center"
                direction="column"
                alignItems="flex-start"
                xs={12}
                md={10}>
                <Breadcrumbs className={classes.breadcrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="/"> Home </Link>
                    <Link color="inherit" href="/"> {item ? item.item_collection.collection_name : "loading..."} </Link>
                    <Typography color="textPrimary"> {item ? item.item_descrption : "loading..."} </Typography>
                </Breadcrumbs>
                <Grid item container
                    justify="center"
                    spacing={4}
                    direction="row"
                    alignItems="flex-start">
                    <Grid item xs={8}>
                        <img src={item?.item_image[0]} className={classes.img}/>
                    </Grid>
                    <Grid item xs={4}
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <Typography color="textPrimary" className={classes.price}> ${item ? item.item_price : "loading..."} </Typography>
                        <Typography color="textPrimary" className={classes.text}> {item ? item.item_descrption : "loading..."} </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
