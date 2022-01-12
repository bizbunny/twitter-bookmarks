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
                        <p>Food Pictures I like or find cute</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1335590706979745794/su_529LP_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1335590706979745794/su_529LP_400x400.jpg"
                            title="Dec 18, 2021"
                            subheader="@daily_dolce"
                            imageLink="https://pbs.twimg.com/media/FG5spmhXoA8m9zH?format=png&name=small"
                            imageAlt="Cute Food"
                            imageDescription=""
                            tweetLink="https://twitter.com/daily_dolce/status/1472233714042040331"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}