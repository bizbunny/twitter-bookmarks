import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
  } from "@mui/material"

// markup
export default function ArtsPage(){

  return (
      <Layout pageTitle="Cool Art">
        <section className="section header">
            <Container maxwidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Art that I like.</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1478443662153560064/EZzij2RC_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1478443662153560064/EZzij2RC_400x400.jpg"
                            title="Jan 7, 2022"
                            subheader="@toorurii"
                            imageLink="https://pbs.twimg.com/media/FIg7vSIXEAgKXYF?format=jpg&name=900x900"
                            imageAlt="CSP brush use"
                            imageDescription="Had the pleasure of using @byvegalia 's braid and chain brushes on CSP! I had an absolute blast with these🌈❤️"
                            tweetLink="https://twitter.com/toorurii/status/1479499217664159755"
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1477090116220776449/xOo167Qb_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1477090116220776449/xOo167Qb_400x400.jpg"
                            title="Jan 2, 2022"
                            subheader="@zephybite"
                            imageLink="https://pbs.twimg.com/media/FIIHlktVEAMLmv2?format=jpg&name=900x900"
                            imageAlt="Comission"
                            imageDescription="commish for 
                            @thelaylanoor"
                            tweetLink="https://twitter.com/zephybite/status/1477752044723195907"
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>    
      </Layout>
  );
}