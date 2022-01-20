import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './tweet'

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
                        <p>Tools to learn from and stuff to use as reference when coding.</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1436372553027788801/-omdgx8X_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1436372553027788801/-omdgx8X_400x400.jpg"
                            title="Aug 19, 2021"
                            subheader="@@UbahTheBuilder"
                            imageLink="https://pbs.twimg.com/media/E9KGqtlUYBUmTDv?format=png&name=900x900"
                            imageAlt="JS"
                            imageDescription="7 ES6 features all JavaScript Programmers should learn to use.

                            A visual thread 🧵"
                            tweetLink="https://twitter.com/UbahTheBuilder/status/1428356548615491595"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}