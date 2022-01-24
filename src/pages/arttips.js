import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './tweet'

import {
  Container,
  Grid
} from "@mui/material"

// markup
export default function ArtTipsPage(){
  return (
    <Layout pageTitle="Art Tips and Tools">
      <section className="section header">
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item xl={12} lg={12} md={12} sm={12}>
              <p>Tweets with useful tips for art and animation</p>
            </Grid>
            <Grid item xl={3} lg={4} md={6} sm={12}>
              <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/904595836411236352/VnZPKJpi_400x400.jpg)`}
                  srcImage="https://pbs.twimg.com/profile_images/904595836411236352/VnZPKJpi_400x400.jpg"
                  title="Jan 5, 2022"
                  subheader="@djamilaknopf"
                  imageLink="https://pbs.twimg.com/media/FIWIo7LWUAMsyNH?format=jpg&name=medium"
                  imageAlt="Perspective"
                  imageDescription="One thing about 1 point perspective I wish someone had told me as a beginner 👇"
                  tweetLink="https://twitter.com/djamilaknopf/status/1478738291386204160/photo/1"
              />
            </Grid>
            <Grid item xl={3} lg={4} md={6} sm={12}>
              <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/378800000516848548/e0b365b44167157edf95e6c595fbb101_400x400.jpeg)`}
                  srcImage="https://pbs.twimg.com/profile_images/378800000516848548/e0b365b44167157edf95e6c595fbb101_400x400.jpeg"
                  title="Dec 24, 2021"
                  subheader="@KatieDeSousa"
                  imageLink="https://pbs.twimg.com/profile_banners/91105876/1551476809/1500x500"
                  imageAlt="Blender Tip"
                  imageDescription="Hey 2d art folks!
                  If you are interested in learning #Blender3d  to create references/kitbash for your concept art/illustration/comics, I compiled a few beginner tutorials geared towards scene setup, lighting, materials, and importing pre-made models instead of modelling~"
                  tweetLink="https://twitter.com/KatieDeSousa/status/1474554137551388673"
              />
            </Grid>
            <Grid item xl={3} lg={4} md={6} sm={12}>
              <Tweet
                  backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1759638070/Picture_4_400x400.png)`}
                  srcImage="https://pbs.twimg.com/profile_images/1759638070/Picture_4_400x400.png"
                  title="Dec 14, 2021"
                  subheader="@EtheringtonBros"
                  imageLink="https://pbs.twimg.com/media/FGloZ1gX0AkV26n?format=jpg&name=900x900"
                  imageAlt="interior"
                  imageDescription="Here’s #howtoTHINKwhenyouDRAW INTERIOR BASICS Part B:http://theetheringtonbrothers.blogspot.com/2021/12/how-to-think-when-you-draw-interior.html
                  #conceptart #gamedev #animationdev #gameart #tutorial #indiegame #comicart #illustration #manga #anime #comics"
                  tweetLink="https://twitter.com/EtheringtonBros/status/1470821656125972481"
              />
            </Grid>
            
          </Grid>
        </Container>
      </section>
    </Layout>
  );
}