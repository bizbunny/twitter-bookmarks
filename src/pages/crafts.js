import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function CraftsPage(){
  return (
    <Layout pageTitle="Cute Crafts Pictures">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Crafts pictures and other stuff people made I like or find cute</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1475916755948032001/oBfEksNJ_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1475916755948032001/oBfEksNJ_400x400.jpg"
                            title="Dec 4, 2021"
                            subheader="@takoyanii"
                            imageLink="https://pbs.twimg.com/media/FFxcrLvVIAc3xrv?format=jpg&name=medium"
                            imageAlt="Cute Crafts"
                            imageDescription="These flower crochet bouquets are a need not a want. 🥺🌻🌷✨"
                            tweetLink="https://twitter.com/takoyanii/status/1467149482458750976"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}