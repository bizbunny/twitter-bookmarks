import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function CodePage(){
  return (
    <Layout pageTitle="Code Info">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Tools and references for coding</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1476905990855475205/VskPkdVv_400x400.png)`}
                            srcImage="https://pbs.twimg.com/profile_images/1476905990855475205/VskPkdVv_400x400.png"
                            title="Nov 13, 2021"
                            subheader="@VittoStack"
                            imageLink="https://pbs.twimg.com/media/FEDmrzUWQAAOigq?format=jpg&name=large"
                            imageAlt="JS"
                            imageDescription="JavaScript array methods.

                            A cheatsheet Down pointing 👇"
                            tweetLink="https://twitter.com/VittoStack/status/1459419925018251266"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}