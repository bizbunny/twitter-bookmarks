import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function GamesPage(){
  return (
    <Layout pageTitle="Game Recommendations">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Games I want to play</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1121768172883980290/dFznjT7M_400x400.png)`}
                            srcImage="https://pbs.twimg.com/profile_images/1121768172883980290/dFznjT7M_400x400.png"
                            title="Oct 7, 2021"
                            subheader="@_wholesomegames"
                            imageLink="https://pbs.twimg.com/media/FBGf8aqUUAYLLNi?format=jpg&name=4096x4096"
                            imageAlt="Onomatope ya"
                            imageDescription="Follow 
                            @studiopomidori
                            
                            Discovered via 
                            @asobudev
                            
                            https://pomidori.studio/onomatopeya.html
                            "
                            tweetLink="https://twitter.com/_wholesomegames/status/1446112840763392003"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}