import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function MarvelPage(){
  return (
    <Layout pageTitle="Marvel">
        <section className="section header">
            <Container maxwidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Marvel related stuff of interest</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/590150838632390656/lw77czLY_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/590150838632390656/lw77czLY_400x400.jpg"
                            title="Dec 24, 2021"
                            subheader="@peachmomoko60"
                            imageLink="https://pbs.twimg.com/media/FHbWgFWaQAAJtre?format=jpg&name=large"
                            imageAlt="Gwen Stacy Variant"
                            imageDescription="ウルバリングウェンをデザインしました🐺"
                            tweetLink="https://twitter.com/peachmomoko60/status/1474601780004933632"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1476246601383481352/MFzLzGLK_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1476246601383481352/MFzLzGLK_400x400.jpg"
                            title="Dec 24, 2021"
                            subheader="@spideypooldiary"
                            imageLink="https://pbs.twimg.com/media/FHYKoWOWQBoQaSI?format=jpg&name=large"
                            imageAlt="Spideypool"
                            imageDescription="the spider-man and deadpool holiday special 🎄🎁"
                            tweetLink="https://twitter.com/spideypooldiary/status/1474377643067904003"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1476660371821928449/ZoNKnloK_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1476660371821928449/ZoNKnloK_400x400.jpg"
                            title="Dec 19, 2021"
                            subheader="@DAlSHCU"
                            imageLink="https://pbs.twimg.com/media/FHBa8pDXwAE7bvH?format=jpg&name=medium"
                            imageAlt="Spideypool"
                            imageDescription="i cannot stop thinking abt reddie as spideypool here’s a thread of panels that prove my theory as to why it fits so well (basically. imagine spidey as eddie and deadpool as richie and. theyll work perfectly still)

                            “but he was /my/ nuisance” ITS THEM"
                            tweetLink="https://twitter.com/DAlSHCU/status/1472777086993670145"
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}