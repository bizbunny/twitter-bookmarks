import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import Tweet from './tweet'

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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
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
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1366547812285100039/SF9OcQ1U_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1366547812285100039/SF9OcQ1U_400x400.jpg"
                            title="Dec 18, 2021"
                            subheader="@likelihood_art"
                            imageLink="https://pbs.twimg.com/media/FG5ba0OWUAUAR41?format=jpg&name=small"
                            imageAlt="Amazing piece"
                            imageDescription="Aj ◡̈"
                            tweetLink="https://twitter.com/likelihood_art/status/1472214649412149252"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1279820584831115266/-j5U9pui_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1279820584831115266/-j5U9pui_400x400.jpg"
                            title="Dec 17, 2021"
                            subheader="@Tortupolar"
                            imageLink="https://pbs.twimg.com/media/FG1pJmpWQAkmv0C?format=jpg&name=medium"
                            imageAlt="DTIYS"
                            imageDescription="draw the cuterest bears and have the cuterest art so i couldn't help myself to try it! 
                            I had a lot of fun  so i hope you enjoy this bear! Bear face
                            #yomi1year"
                            tweetLink="https://twitter.com/Tortupolar/status/1471950811655774211"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1335807482292174853/o5A3A7zd_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1335807482292174853/o5A3A7zd_400x400.jpg"
                            title="Jan 11, 2022"
                            subheader="@magicalnarwhal"
                            imageLink="https://pbs.twimg.com/media/FI3dOxvVgAMnQNe?format=jpg&name=4096x4096"
                            imageAlt="Portfolio"
                            imageDescription="Heya #PortfolioDay! I'm Sarah, I like to make magical artwork for animated films! You can find my work at http://sarahkieley.com
                            or http://instagram.com/magicalnarwhal
                            :o) Love seeing everyone's work!"
                            tweetLink="https://twitter.com/magicalnarwhal/status/1481083926508552193"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1452488455489871878/QnZMWlaL_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1452488455489871878/QnZMWlaL_400x400.jpg"
                            title="Jan 11, 2022"
                            subheader="@_Cheumi"
                            imageLink="https://pbs.twimg.com/media/FI8j4kUUYAMPg92?format=jpg&name=large"
                            imageAlt="Portfolio"
                            imageDescription="Come by and get some flowers 🌷✨
                            #art #illustration"
                            tweetLink="https://twitter.com/_Cheumi/status/1481442259669114882"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1392992729680986114/7is-QPg9_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1392992729680986114/7is-QPg9_400x400.jpg"
                            title="Jan 14, 2022"
                            subheader="@arcasian"
                            imageLink="https://pbs.twimg.com/media/FJF1SqlX0AI0axe?format=jpg&name=large"
                            imageAlt="Burger"
                            imageDescription="burg"
                            tweetLink="https://twitter.com/arcasian/status/1482094719094206469"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1392992729680986114/7is-QPg9_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1392992729680986114/7is-QPg9_400x400.jpg"
                            title="Jan 16, 2022"
                            subheader="@arcasian"
                            imageLink="https://pbs.twimg.com/media/FJQ2haEXwAI7YHc?format=jpg&name=4096x4096"
                            imageAlt="Milk"
                            imageDescription="warm oat milk for these trying times"
                            tweetLink="https://twitter.com/arcasian/status/1482870227608215557"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1249995341342150661/_zWzUB___400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1249995341342150661/_zWzUB___400x400.jpg"
                            title="Nov 30, 2021"
                            subheader="@Sibylline_M"
                            imageLink="https://pbs.twimg.com/media/FFdpL1UXIAIsJX0?format=jpg&name=large"
                            imageAlt="Celestial Guardians"
                            imageDescription="My Celestial Guardians series is complete 😌✨"
                            tweetLink="https://twitter.com/Sibylline_M/status/1465755882227126274"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1477090116220776449/xOo167Qb_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1477090116220776449/xOo167Qb_400x400.jpg"
                            title="Oct 26, 2018"
                            subheader="@zephybite"
                            imageLink="https://pbs.twimg.com/media/Dqc_GVZX0AAZT2S?format=jpg&name=4096x4096"
                            imageAlt="Doodle"
                            imageDescription="trying to get back into drawing so i doodled my cute friends 🤧"
                            tweetLink="https://twitter.com/zephybite/status/1477752044723195907"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1455255834783621122/E8nmlSUy_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1455255834783621122/E8nmlSUy_400x400.jpg"
                            title="Nov 27, 2021"
                            subheader="@katriadoodles"
                            imageLink="https://pbs.twimg.com/media/FFNIwgKXEAAlZaE?format=jpg&name=large"
                            imageAlt="Promotion"
                            imageDescription="Inprnt is offering 15% off everything, all weekend long, so if you’re looking for some cool wall decor now’s the time!"
                            tweetLink="https://twitter.com/katriadoodles/status/1464594308233846788"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1254882558476578817/fVG-_dX0_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1254882558476578817/fVG-_dX0_400x400.jpg"
                            title="Mar 17, 2022"
                            subheader="@rdauterman"
                            imageLink="https://pbs.twimg.com/media/FODuIdwVgAUsZFs?format=jpg&name=large"
                            imageAlt="Hellfire Gala 2022"
                            imageDescription="HELLFIRE GALA 2022 ❌✨ MOON KNIGHT #12 variant cover, drawn and colored by me — ft. my new design for the Scarlet Witch! #XMenHellfireGala #ScarletWitch"
                            tweetLink="https://twitter.com/rdauterman/status/1504464375112896513"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1443299231184261120/IgeAPsG5_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1443299231184261120/IgeAPsG5_400x400.jpg"
                            title="Mar 16, 2019"
                            subheader="@ichi_nese"
                            imageLink="https://pbs.twimg.com/media/D10f-ecU4AAujLe?format=jpg&name=large"
                            imageAlt="bread animals"
                            imageDescription="Collection of bread animals"
                            tweetLink="https://twitter.com/ichi_nese/status/1107076248495284225"
                        />
                    </Grid>
                    <Grid item xl={3} lg={4} md={6} sm={12}>
                        <Tweet
                            backgroundImageURL={`url(https://pbs.twimg.com/profile_images/1503420227899469827/iE3bb22j_400x400.jpg)`}
                            srcImage="https://pbs.twimg.com/profile_images/1503420227899469827/iE3bb22j_400x400.jpg"
                            title="Aug 20, 2018"
                            subheader="@alexmchiu"
                            imageLink="https://pbs.twimg.com/media/DlEt0Q6U0AA7Xuh?format=jpg&name=medium"
                            imageAlt="portfolio"
                            imageDescription="Hi I'm Alex and I'm currently working as a storyboard artist at Nickelodeon's Glitch Techs! I love to cute things and aCTION!!  And I love my characters and Overwatch :D! #VisibleWomen"
                            tweetLink="https://twitter.com/alexmchiu/status/1031657365102186496"
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>    
      </Layout>
  );
}