import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function CookingPage(){
  return (
    <Layout pageTitle="Cooking Info">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Stuff to help me cook</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg"
                            title="Nov 13, 2021"
                            subheader="@ohmonah"
                            imageLink="https://pbs.twimg.com/media/FEG-rOxXMAs3hX8?format=jpg&name=medium"
                            imageAlt="meat"
                            imageDescription="MEAT LOVERS OUT THERE 🍖💪

                            If you like to eat alot of meat but are always struggling with storing it, here's a tip from MAY's TCOY tip card!"
                            tweetLink="https://twitter.com/ohmonah/status/1459657558327705600"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}