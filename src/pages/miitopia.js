import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function MiitopiaPage(){
  return (
    <Layout pageTitle="Miitopia Content">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Miitopia related tweets I enjoy. Includes some fun Mii designs and other related content.</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1435440908766355461/o92acG6Z_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1435440908766355461/o92acG6Z_400x400.jpg"
                            title="Jun 3, 2021"
                            subheader="@peachbunnii"
                            imageLink="https://pbs.twimg.com/media/E2-tidRVoAMvWqA?format=jpg&name=large"
                            imageAlt="Miitopia"
                            imageDescription="Here is my #miitopia access code! :)
                            >> 41RDDK2<<
                            
                            I've decided to share ALL of my fruity children + some bonus characters! 😊 feel free to use for personal use, but please give credit if you're planning to include them in access code compilations.
                            
                            🌸 thank you!🌸
                            "
                            tweetLink="https://twitter.com/peachbunnii/status/1400528819371483139"
                        />
                    </Grid> 
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1477664861975097345/WiakLE9f_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1477664861975097345/WiakLE9f_400x400.jpg"
                            title="May 23, 2021"
                            subheader="@bellhenge"
                            imageLink="https://pbs.twimg.com/media/E2FIxQqVcAQzezn?format=jpg&name=large"
                            imageAlt="Miitopia"
                            imageDescription="step💄 #Miitopia"
                            tweetLink="https://twitter.com/bellhenge/status/1396479440406777864"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}