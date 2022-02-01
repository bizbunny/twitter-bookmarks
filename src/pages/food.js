import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './tweet'

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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1335590706979745794/su_529LP_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1335590706979745794/su_529LP_400x400.jpg"
                            title="Jan 19, 2022"
                            subheader="@daily_dolce"
                            imageLink="https://pbs.twimg.com/media/FJe_8LdWQAA8KTF?format=jpg&name=medium"
                            imageAlt="Miffy Food"
                            imageDescription="Miffy desserts by ske.f"
                            tweetLink="https://twitter.com/daily_dolce/status/1483865664137875464"
                        />
                    </Grid>  
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1478021881475260422/nLd4Nn35_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1478021881475260422/nLd4Nn35_400x400.jpg"
                            title="Jan 18, 2022"
                            subheader="@rainbow_explode"
                            imageLink="https://pbs.twimg.com/media/FJZaOxCXMAcR2VU?format=jpg&name=900x900"
                            imageAlt="Cute Food"
                            imageDescription="strawberry sandwiches ! 🍓🌿🍞🌸"
                            tweetLink="https://twitter.com/rainbow_explode/status/1483472352847572993"
                        />
                    </Grid>  
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1335590706979745794/su_529LP_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1335590706979745794/su_529LP_400x400.jpg"
                            title="Jan 30, 2022"
                            subheader="@daily_dolce"
                            imageLink="https://pbs.twimg.com/media/FKXLDznWQAIsJAC?format=png&name=small"
                            imageAlt="Strawberry Bears"
                            imageDescription="Strawberry and bear bread by satomi_0819"
                            tweetLink="https://twitter.com/daily_dolce/status/1487818539734126595"
                        />
                    </Grid>  
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}