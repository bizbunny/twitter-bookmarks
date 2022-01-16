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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1467590383118999552/30l5K5MI_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1467590383118999552/30l5K5MI_400x400.jpg"
                            title="Dec 4, 2021"
                            subheader="@charlieehoney_"
                            imageLink="https://pbs.twimg.com/media/FFwEcsbWQAUwfNx?format=jpg&name=large"
                            imageAlt="Frogs"
                            imageDescription="i made this, you’re welcome. 🐸✨ #ACNHDesign #acnh"
                            tweetLink="https://twitter.com/charlieehoney_/status/1467052472774676487"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1467590383118999552/30l5K5MI_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1467590383118999552/30l5K5MI_400x400.jpg"
                            title="Dec 30, 2021"
                            subheader="@charlieehoney_"
                            imageLink="https://pbs.twimg.com/media/FHCuaeoWQAAm64h?format=jpg&name=900x900"
                            imageAlt="Cool design"
                            imageDescription="it took soo long to post these (sowwy🥺), but here are the finished designs!!✨🐸 #fwog #ACNHDesign"
                            tweetLink="https://twitter.com/charlieehoney_/status/1472868851692052482"
                        />
                    </Grid>  
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}