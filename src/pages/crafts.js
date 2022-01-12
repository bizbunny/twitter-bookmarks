import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function FoodPage(){
  return (
    <Layout pageTitle="Cute Food Pictures">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Crafts pictures and other stuff people made I like or find cute</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url()`}
                            srcImage=""
                            title="Dec 4, 2021"
                            subheader="@"
                            imageLink="https://pbs.twimg.com/media/FFxcrLvVIAc3xrv?format=jpg&name=medium"
                            imageAlt="Cute Crafts"
                            imageDescription=""
                            tweetLink="https://twitter.com/takoyanii/status/1467149482458750976"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}