import * as React from 'react';
import { Link } from 'gatsby';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// used collapsable drawer for part of layout : https://mui.com/components/drawers/

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

export default function Layout({ pageTitle, children }){
  const categories = ['ACNH', 'Art Tips', 'Coding', 'Commissions','Cooking', 'Cool Art','Crafts','Food Pics', 'Frogs','Fun Tweets', 'Games', 'Marvel', 'Miitopia','Products I like'];
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={navLinkText}
    >
      <List>
        <ListItem button key={categories[0]}>
        <Link to="/acnh" className={navLinkText}><ListItemText primary={categories[0]} /></Link>
        </ListItem>
        <ListItem button key={categories[1]}>
        <Link to="/arttips" className={navLinkText}><ListItemText primary={categories[1]} /></Link>
        </ListItem>
        <ListItem button key={categories[2]}>
        <Link to="/coding" className={navLinkText}><ListItemText primary={categories[2]} /></Link>
        </ListItem>
        <ListItem button key={categories[3]}>
        <Link to="/commissions" className={navLinkText}><ListItemText primary={categories[3]} /></Link>
        </ListItem>
        <ListItem button key={categories[4]}>
        <Link to="/cooking" className={navLinkText}><ListItemText primary={categories[4]} /></Link>
        </ListItem>
        <ListItem button key={categories[5]}>
        <Link to="/art" className={navLinkText}><ListItemText primary={categories[5]} /></Link>
        </ListItem>
        <ListItem button key={categories[6]}>
        <Link to="/crafts" className={navLinkText}><ListItemText primary={categories[6]} /></Link>
        </ListItem>
        <ListItem button key={categories[7]}>
        <Link to="/food" className={navLinkText}><ListItemText primary={categories[7]} /></Link>
        </ListItem>
        <ListItem button key={categories[8]}>
        <Link to="/frogs" className={navLinkText}><ListItemText primary={categories[8]} /></Link>
        </ListItem>
        <ListItem button key={categories[9]}>
        <Link to="/funtweets" className={navLinkText}><ListItemText primary={categories[9]} /></Link>
        </ListItem>
        <ListItem button key={categories[10]}>
        <Link to="/games" className={navLinkText}><ListItemText primary={categories[10]} /></Link>
        </ListItem>
        <ListItem button key={categories[11]}>
        <Link to="/marvel" className={navLinkText}><ListItemText primary={categories[11]} /></Link>
        </ListItem>
        <ListItem button key={categories[12]}>
        <Link to="/miitopia" className={navLinkText}><ListItemText primary={categories[12]} /></Link>
        </ListItem>
        <ListItem button key={categories[13]}>
        <Link to="/products" className={navLinkText}><ListItemText primary={categories[13]} /></Link>
        </ListItem>
      </List>
      {/* <List>
        {categories.map((text, index) => (
          <ListItem button key={text}>
            <Link to="/acnh" className={navLinkText}><ListItemText primary={text} /></Link>
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div className={container}>
      <section className="section header">
        <Container maxWidth="xl" className="Twitter">
          <Grid container spacing={5}>
            <Grid item xl={12} lg={12} md={12} sm={12}>
              <title>{pageTitle}</title>
              <nav>
              
                <ul className={navLinks}>
                    <li className={navLinkItem}><Button variant="text"><Link to="/" className={navLinkText}>Home</Link></Button></li>
                    <li className={navLinkItem}>
                    <div >
                      {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                          <Button onClick={toggleDrawer(anchor, true)} className={navLinkText}>Categories</Button>
                          <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                          >
                            {list(anchor)}
                          </Drawer>
                        </React.Fragment>
                      ))}
                    </div>
                    </li>
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
// export default Layout