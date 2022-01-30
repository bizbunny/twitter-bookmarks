import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './tweet'

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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1450922546686218242/Q3-NTwn3_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1450922546686218242/Q3-NTwn3_400x400.jpg"
                            title="Jan 13, 2022"
                            subheader="@accastaway"
                            imageLink="https://pbs.twimg.com/media/FI-PNqYXEAAIzva?format=jpg&name=medium"
                            imageAlt="acnh tips"
                            imageDescription="Ill leave this here, little help to move out Villagers
                            #AnimalCrossing #Nintendo
                            #NintendoSwitch"
                            tweetLink="https://twitter.com/accastaway/status/1481560269772009483"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1393949167471497219/Hdkbxy7v_400x400.png)`}
                            srcImage="https://pbs.twimg.com/profile_images/1393949167471497219/Hdkbxy7v_400x400.png"
                            title="Nov 28, 2021"
                            subheader="@Clairetonic"
                            imageLink="https://pbs.twimg.com/media/FFTr1gsXsAU2LvD?format=jpg&name=large"
                            imageAlt="acnh vacation home"
                            imageDescription="obsessed with making indoor/outdoor looks with wood & stone rugs on top of grass floors #ACNH #AnimalCrossing"
                            tweetLink="https://twitter.com/Clairetonic/status/1465055676707786765"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1267140053274374152/EUwmoaQl_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1267140053274374152/EUwmoaQl_400x400.jpg"
                            title="Jan 16, 2022"
                            subheader="@olguioo"
                            imageLink="https://pbs.twimg.com/media/FJPSJFtX0AIj5JA?format=jpg&name=4096x4096"
                            imageAlt="acnh"
                            imageDescription="🌱✨
                            "
                            tweetLink="https://twitter.com/olguioo/status/1482759758432161797"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1479275497209176071/uFR1Nq7G_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1479275497209176071/uFR1Nq7G_400x400.jpg"
                            title="Jan 15, 2022"
                            subheader="@_littlejeka"
                            imageLink="https://pbs.twimg.com/media/FJLhHSGWQAAxbB0?format=jpg&name=small"
                            imageAlt="acnh"
                            imageDescription="Codes to my hobbitcore island 🌱🌳

                            -----
                            #acnh #AnimalCrossing
                            #AnimalCrossingNewHorizions
                            "
                            tweetLink="https://twitter.com/_littlejeka/status/1482494762003353600"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1386763365620486145/qn9Le3rd_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1386763365620486145/qn9Le3rd_400x400.jpg"
                            title="Jan 27, 2022"
                            subheader="@pogpals"
                            imageLink="https://pbs.twimg.com/media/FKIL60lWUAg-H_J?format=jpg&name=large"
                            imageAlt="acnh"
                            imageDescription="Billy’s Pottery Workshop! 
                            #HappyHomeParadise #acnh
                            "
                            tweetLink="https://twitter.com/pogpals/status/1486763934430470144"
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}