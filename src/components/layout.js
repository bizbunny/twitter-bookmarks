import * as React from 'react';
import { Link } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

import {
    Button,
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
                    <li className={navLinkItem}><Button variant="text"><Link to="/" className={navLinkText}>Home</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/products" className={navLinkText}>Products I like</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/art" className={navLinkText}>Cool Art</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/acnh" className={navLinkText}>ACNH Related</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/arttips" className={navLinkText}>Art Tips</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/funtweets" className={navLinkText}>Fun Tweets</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/marvel" className={navLinkText}>Marvel Related</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/food" className={navLinkText}>Cute Food Pics</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/crafts" className={navLinkText}>Cute Crafts</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/codeinfo" className={navLinkText}>Code Info</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/cooking" className={navLinkText}>Cooking</Link></Button></li>
                    <li className={navLinkItem}><Button variant="text"><Link to="/frogs" className={navLinkText}>Froggies</Link></Button></li>
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