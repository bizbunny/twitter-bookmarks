import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import { Link } from 'gatsby';
import {
  Container,
  Grid
} from "@mui/material"
// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <section className="section header">
          <Container maxWidth="xl">
            <Grid container spacing={5}>
              <Grid item xl={12} lg={12} md={12} sm={12}>
                <p>This website is to organize my twitter bookmarks.</p>
          <     p>Click the picture below to visit my twitter.</p>
                <Link to="https://twitter.com/anh_bizbunny">
                  <img src="https://pbs.twimg.com/profile_images/1343646540167061516/sGC-b4g-_400x400.jpg" alt="my twitter"/>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Layout>
    </main>
  )
}

export default IndexPage
