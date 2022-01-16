import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
  Container,
  Grid
} from "@mui/material"

// markup
export default function ProductsPage(){
  return (
    <Layout pageTitle="Products I Like">
        <section className="section header">
          <Container maxwidth="xl">
            <Grid container spacing={5}>
              <Grid item xl={12} lg={12} md={12} sm={12}>
                <p>Products and product ideas from various artists and game makers that I like (and want) Hehehe</p>
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm={12}>
                <Tweet
                    backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1438559347307655176/KfYo897x_400x400.jpg)`}
                    srcImage="https://pbs.twimg.com/profile_images/1438559347307655176/KfYo897x_400x400.jpg"
                    title="Jan 10, 2022"
                    subheader="@lauraillustrate"
                    imageLink="https://pbs.twimg.com/media/FIwhC18X0AAnC_8?format=jpg&name=small"
                    imageAlt="Pins"
                    imageDescription="My micro pins showed up today… 🐻🐰"
                    tweetLink="https://twitter.com/lauraillustrate/status/1480594717394063364"
                />
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm={12}>
                <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1392992729680986114/7is-QPg9_400x400.jpg)`}
                  srcImage="https://pbs.twimg.com/profile_images/1392992729680986114/7is-QPg9_400x400.jpg"
                  title="Jan 10, 2022"
                  subheader="@arcasian"
                  imageLink="https://pbs.twimg.com/media/FIuFth8XwAMEY73?format=jpg&name=900x900"
                  imageAlt="charms"
                  imageDescription="house charms for house keys"
                  tweetLink="https://twitter.com/arcasian/status/1480423922461986817"
                />
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm={12}>
                <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1473810315242766340/FrCHb1W7_400x400.jpg)`}
                  srcImage="https://pbs.twimg.com/profile_images/1473810315242766340/FrCHb1W7_400x400.jpg"
                  title="Oct 23, 2020"
                  subheader="@@califlair"
                  imageLink="https://pbs.twimg.com/media/ElDMBV3VcAA3Lqi?format=jpg&name=900x900"
                  imageAlt="artist and seller of cool stuff"
                  imageDescription="hi!! i'm cali and i like to make cute things with a fairytale spin 🌸

                  🌟 store: http://califlair.com
                  
                  🌟 monthly pinclub: http://patreon.com/califlair
                  
                  🌟 inrpnt: http://inprnt.com/gallery/califlair/
                  
                  🌟 ig: http://instagram.com/califlair
                  
                  🌟 ko-fi: http://ko-fi.com/califlair
                  "
                  tweetLink="https://twitter.com/califlair/status/1319779018590187520"
                />
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm={12}>
                <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1416541365689802753/9t3rKH0J_400x400.jpg)`}
                  srcImage="https://pbs.twimg.com/profile_images/1416541365689802753/9t3rKH0J_400x400.jpg"
                  title="Jan 5, 2022"
                  subheader="@Sulkypup"
                  imageLink="https://pbs.twimg.com/media/FIXpkBWXIAUUdpF?format=jpg&name=medium"
                  imageAlt="scarf ideas or pin banner ideas"
                  imageDescription="Future scarf designs??? 👀
                  OG Tiger / Sea Otter / Froggy Friend / Creative Calico"
                  tweetLink="https://twitter.com/Sulkypup/status/1478845160872157185"
                />
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm={12}>
                <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg)`}
                  srcImage="https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg"
                  title="Nov 2, 2021"
                  subheader="@ohmonah"
                  imageLink="https://pbs.twimg.com/media/FDNa6bsVkAMRtVO?format=jpg&name=medium"
                  imageAlt="cool bag"
                  imageDescription="I have heard you. and new samples are in >:)"
                  tweetLink="https://twitter.com/ohmonah/status/1455607067322957825"
                />
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm={12}>
                <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg)`}
                  srcImage="https://pbs.twimg.com/profile_images/1422625379961884673/BktC6_2i_400x400.jpg"
                  title="Jun 8, 2021"
                  subheader="@ohmonah"
                  imageLink="https://pbs.twimg.com/media/E3ZF15tXIAQcoRb?format=jpg&name=medium"
                  imageAlt="cute pin"
                  imageDescription="💀🐰🥛SPOILED MILK ENAMEL PIN💀🐰🥛

                  Spoiled milk bunny pin to match our spoiled milk sweater!~"
                  tweetLink="https://twitter.com/ohmonah/status/1402385399155245056"
                />
              </Grid>
            </Grid>
          </Container>
        </section>
    </Layout>
  );
}