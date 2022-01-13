import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function FrogsPage(){
  return (
    <Layout pageTitle="Froggies">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Frog related tweets. Could be about anything, as long as there's frogs in it.</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg"
                            title="Nov 10, 2021"
                            subheader="@ohmonah"
                            imageLink="https://pbs.twimg.com/media/FD3h29jXsAAL0WU?format=jpg&name=medium"
                            imageAlt="Frogs"
                            imageDescription="🐸 SINGING FROGS 🎵

                            Just a couple of frog pals singing together~⁠
                            This is the art that we sent to get made into the mats!"
                            tweetLink="https://twitter.com/ohmonah/status/1458570496140890118"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}