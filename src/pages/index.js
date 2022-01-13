import * as React from "react"
import "../components/styles.css";
import Layout from '../components/layout'
import { Link } from 'gatsby';
// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>This website is to organize my twitter bookmarks. The website is still very much a WIP.</p>
        <p>Click the picture below to visit my twitter.</p>
        <Link to="https://twitter.com/anh_bizbunny"><img src="https://pbs.twimg.com/profile_images/1343646540167061516/sGC-b4g-_400x400.jpg" alt="my twitter"/></Link>
      </Layout>
    </main>
  )
}

export default IndexPage
