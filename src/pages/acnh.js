import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function AcnhPage(){
  return (
    <Layout pageTitle="ACNH">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>ACNH related stuff of interest</p>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1416541365689802753/9t3rKH0J_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1416541365689802753/9t3rKH0J_400x400.jpg"
                            title="Nov 14, 2021"
                            subheader="@Sulkypup"
                            imageLink="https://pbs.twimg.com/media/FEMDQpJWUAY_fTB?format=jpg&name=medium"
                            imageAlt="shirts and sweater designs"
                            imageDescription="The store might be closed but that doesn't mean you can't pick something up!! Designs are available on Animal Crossing with ID MA-9358-2765-5984 ✨
                            #ACNHDesigns #acnh Blossom(1/2)"
                            tweetLink="https://twitter.com/Sulkypup/status/1460014951939067907"
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1346836376407437312/_4G_Q0Rq_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1346836376407437312/_4G_Q0Rq_400x400.jpg"
                            title="Dec 31, 2021"
                            subheader="@MallowACNH"
                            imageLink="https://pbs.twimg.com/media/FH8lyTiWYAIK-bl?format=jpg&name=large"
                            imageAlt="Cool layout"
                            imageDescription="Happy New Years Eve. Here's Bluebear's smol cafe. #acnh"
                            tweetLink="https://twitter.com/MallowACNH/status/1476940752122953734"
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
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
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1468875017970671620/idI-gl_j_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1468875017970671620/idI-gl_j_400x400.jpg"
                            title="Dec 18, 2021"
                            subheader="@TheBarnnOwl"
                            imageLink="https://pbs.twimg.com/media/FG6WASXXoA8DEqY?format=jpg&name=large"
                            imageAlt="acnh phone"
                            imageDescription="my phone is animal crossing themed now and i love it Smiling 🥰"
                            tweetLink="https://twitter.com/TheBarnnOwl/status/1472279067407929349"
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1481028496960884737/0TV2hqEf_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1481028496960884737/0TV2hqEf_400x400.jpg"
                            title="Dec 6, 2021"
                            subheader="@animalcrossing"
                            imageLink="https://pbs.twimg.com/media/FF7tT4WWQAAYruD?format=jpg&name=large"
                            imageAlt="acnh hospital"
                            imageDescription="[Lottie]
                            Hi, everyone! Today I thought I'd introduce one of the new facilities developed by Paradise Planning—our hospital! Now that our vacation-home business is booming, we wanted a way to help keep everyone safe and healthy. I hope no one needs it, but it's there if they do!"
                            tweetLink="https://twitter.com/animalcrossing/status/1467871466947592193"
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1416541365689802753/9t3rKH0J_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1416541365689802753/9t3rKH0J_400x400.jpg"
                            title="Nov 14, 2021"
                            subheader="@Sulkypup"
                            imageLink="https://pbs.twimg.com/media/FEMDSeoXoAQsmNC?format=jpg&name=medium"
                            imageAlt="acnh designs"
                            imageDescription="Some more goods!!🌼 (2/2)"
                            tweetLink="https://twitter.com/Sulkypup/status/1460014957366431750"
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1455531777909563408/GWLdqwOj_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1455531777909563408/GWLdqwOj_400x400.jpg"
                            title="Jan 12, 2022"
                            subheader="@TiffyCrossing"
                            imageLink="https://pbs.twimg.com/media/FI6dvIDXIAkP0N3?format=jpg&name=900x900"
                            imageAlt="cool layout"
                            imageDescription="Made Bea a cute garden home Smiling 🥰 #ACNHDesign #acnhhhp #ACNHhappyhomeparadise"
                            tweetLink="https://twitter.com/TiffyCrossing/status/1481294764867788804"
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}