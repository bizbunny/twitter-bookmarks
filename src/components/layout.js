import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

import {
    Container,
    Grid
} from "@mui/material"
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <section className="section header">
        <Container maxWidth="xl" className="Twitter">
          <Grid container spacing={5}>
            <Grid item xl={12} lg={12} md={12} sm={6}>
              <title>{pageTitle}</title>
              <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/products" className={navLinkText}>Products I like</Link></li>
                    <li className={navLinkItem}><Link to="/art" className={navLinkText}>Cool Art</Link></li>
                    <li className={navLinkItem}><Link to="/acnh" className={navLinkText}>ACNH Related</Link></li>
                    <li className={navLinkItem}><Link to="/arttips" className={navLinkText}>Art Tips</Link></li>
                    <li className={navLinkItem}><Link to="/funtweets" className={navLinkText}>Fun Tweets</Link></li>
                    <li className={navLinkItem}><Link to="/marvel" className={navLinkText}>Marvel Related</Link></li>
                    <li className={navLinkItem}><Link to="/food" className={navLinkText}>Cute Food Pics</Link></li>
                    <li className={navLinkItem}><Link to="/crafts" className={navLinkText}>Cute Crafts</Link></li>
                </ul>
              </nav>
              <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
              </main>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  )
}
export default Layout