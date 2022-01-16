import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './Tweet'

import {
    Container,
    Grid
} from "@mui/material"

// markup
export default function CommissionsPage(){
  return (
    <Layout pageTitle="How to do Art Commissions">
        <section className="section header">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <p>Commissions sheets to use as reference so I can make a proper commission sheet of my own</p>
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1450269386980220931/ERnLi1Mb_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1450269386980220931/ERnLi1Mb_400x400.jpg"
                            title="May 18, 2021"
                            subheader="@ameobas"
                            imageLink="https://pbs.twimg.com/media/E1s8z0nVIAAOupI?format=jpg&name=4096x4096"
                            imageAlt="Commissions"
                            imageDescription="hi hi!! let me draw you stuff!!
                            Commissions are open while I look for work! There are limited slots so I'll be taking 5 at a time.
                            
                            HerbOrder form: https://bit.ly/3hpZuL9
                            
                            HerbFull TOS: https://bit.ly/3hpZuL9
                            
                            
                            thank you for looking 🤗💛"
                            tweetLink="https://twitter.com/ameobas/status/1394776635291815937"
                        />
                    </Grid> 
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1213319274007277569/CXd6neus_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1213319274007277569/CXd6neus_400x400.jpg"
                            title="May 28, 2021"
                            subheader="@Adonyne"
                            imageLink="https://pbs.twimg.com/media/E2fLaFCXIAEFt2U?format=jpg&name=4096x4096"
                            imageAlt="Commissions"
                            imageDescription="COMMISSIONS ARE NOW OPEN! I tried fitting in more information this time, but let me know if some things aren't clear/you have questions. There are limited slots available, but I will keep you updated when they open up. DM me if you are interested!
                            #CommissionSheet"
                            tweetLink="https://twitter.com/Adonyne/status/1398310904475881478"
                        />
                    </Grid> 
                </Grid>
            </Container>
        </section>
    </Layout>
  );
}