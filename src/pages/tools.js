import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function GameMakingOrArtToolsPage(){
  return (
    <Layout pageTitle="Tools for Art or Game Making">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Tweets with stuff that look useful for making games or art</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1484671883211681793/FQKnmusl_400x400.png)`}
                            srcImage="https://pbs.twimg.com/profile_images/1484671883211681793/FQKnmusl_400x400.png"
                            title="Jan 21, 2022"
                            subheader="@Sakeozo"
                            imageLink="https://pbs.twimg.com/media/FJqwkF2XoAEJFE1?format=jpg&name=large"
                            imageAlt="Font"
                            imageDescription="Yo! This Deaf person just created a secret ASL font! Eyes You can use for your personal project, type out some kind of secret code for yourself to print out, and even insult your friends with this font! It's authentically Deaf created. HAVE FUN WITH THIS!

                            https://ko-fi.com/s/afbfa7ae55
                            
                            "
                            tweetLink="https://twitter.com/Sakeozo/status/1484693841471025152"
                        />
                    </Grid> 
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1267140053274374152/EUwmoaQl_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1267140053274374152/EUwmoaQl_400x400.jpg"
                            title="Nov 27, 2021"
                            subheader="@olguioo"
                            imageLink="https://pbs.twimg.com/media/FFOAPbrXEAIz2LX?format=jpg&name=large"
                            imageAlt="Procreate"
                            imageDescription="My most used digital art tools! ✏️✨
                            Find my Brush Packs VOL 1, 2 & 3 here:
                            http://gumroad.com/olguioo
                            "
                            tweetLink="https://twitter.com/olguioo/status/1464655309251792908"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1267140053274374152/EUwmoaQl_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1267140053274374152/EUwmoaQl_400x400.jpg"
                            title="Nov 25, 2021"
                            subheader="@olguioo"
                            imageLink="https://pbs.twimg.com/media/FFD0p4bXMA0yvfq?format=jpg&name=large"
                            imageAlt="Procreate"
                            imageDescription="✏️ 20% Discount! Procreate brushes, palettes, tutorials, resources... 🍂🍄
                            Code: olguioo20
                            http://gumroad.com/olguioo
                            
                            "
                            tweetLink="https://twitter.com/olguioo/status/1463938896614637579"
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}