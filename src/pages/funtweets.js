import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function FunTweetsPage(){
  return (
    <Layout pageTitle="Fun Tweets">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Tweets I find fun</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/975127233260961792/sxBWaJTF_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/975127233260961792/sxBWaJTF_400x400.jpg"
                            title="Nov 24, 2021"
                            subheader="@powerlanguish"
                            imageLink="https://pbs.twimg.com/media/FE_WjA-XEAcyHwO?format=jpg&name=medium"
                            imageAlt="Wordle"
                            imageDescription="Wordle, a daily word guessing game I made, got a shoutout in the NYT newsletter today: https://nytimes.com/2021/11/24/at-home/newsletter.html
                            . Thanks 
                            @melissakirsch
                            
                            You can play it here: http://powerlanguage.co.uk/wordle
                            "
                            tweetLink="https://twitter.com/powerlanguish/status/1463625030261264385"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}