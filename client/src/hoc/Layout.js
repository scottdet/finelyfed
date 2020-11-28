import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { GlobalContext } from '../store';
import { butter } from '../store/api';
import Aux from './_Aux';
import ScrollToTop from '../components/scroll.js';
import Blog from "../components/blog/blog";
import BlogDetail from '../components/blogdetail/blogdetail';
import logo from '../components/images/logo_black.png'
import { Grid, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class Layout extends Component {
  static contextType = GlobalContext

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const [state, dispatch] = this.context;
    const { data } = await butter.post.list();

    console.log(state.pages.data);

    dispatch({
      type: "update_pages",
      data
    });
  }
  menuClick = () => {
    var x = document.getElementById("myTopnav");
    var fixedTopNav = document.getElementById("myTopnav-fixed");
    if (x.className !== 'topnav') {
      x.className = "topnav";
      fixedTopNav.style.display = 'none';
    }
  }
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    var fixedTopNav = document.getElementById("myTopnav-fixed");
    if (x.className === "topnav") {
        x.className += " responsive";
        fixedTopNav.style.display = 'block';
    } else {
        x.className = "topnav";
        fixedTopNav.style.display = 'none';
    }
  }

  render() {
    const [state, dispatch] = this.context;
    const blogCategoryPaths = state.categories.map((category, i) => `${i === 0 ? "/" : "/" + category}`);
    const blogDetailPaths = state.pages.data.map(page => `/${page.categories[0].name}/${page.slug}`);

    return (
      <ScrollToTop>
        <Aux>
          <div>
            <section className="nav-bar">
              <ul className="topnav" id="myTopnav">
                <li>
                  <p>
                    <NavLink to="/">
                      <img src={logo} className="main-menu-logo" />
                    </NavLink>
                  </p>
                </li>
                <li className="top-menu-item">
                  <NavLink to="/Lifestyle" className="menu-item" id="last-item" onClick={()=>this.menuClick()}>LIFESTYLE</NavLink>
                </li>
                <li>
                  <NavLink to="/Wellness" className="menu-item" onClick={()=>this.menuClick()}>WELLNESS</NavLink>
                </li>
                <li>
                  <NavLink to="/Travel" className="menu-item" onClick={()=>this.menuClick()}>TRAVEL</NavLink>
                </li>
                <li>
                  <NavLink to="/Food" className="menu-item" onClick={()=>this.menuClick()}>FOOD</NavLink>
                </li>
                <li>
                  <NavLink to="#" className="icon" onClick={() => this.myFunction()}><span></span></NavLink> 
                </li>
              </ul>
              <ul className="topnav" id="myTopnav-fixed">
                <li>
                  <p>
                    <NavLink to="/">
                      <img src={logo} className="main-menu-logo" style={{opacity: '0'}}/>
                    </NavLink>
                  </p>
                </li>
                <li>
                  <NavLink to="#" className="icon" onClick={() => this.myFunction()} />
                </li>
              </ul>
            </section>
          </div>

          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path={blogCategoryPaths} exact component={Blog} />
            <Route path={blogDetailPaths} exact component={BlogDetail} />
          </Switch>

          <section className="desktop-screen">
            <section className="site-footer">
              <div className="wrapper just">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="footer-left">
                        <NavLink to="/">
                          <img src={logo} className="main-menu-logo" style={{ paddingLeft: '5px' }}/>
                        </NavLink>
                        <div className="footer-social">
                          <a href="/">
                            <Icon id="insta-icon" name="instagram" style={{ color: 'black', fontSize: '18px' }}/>
                          </a>
                          <a href="/">
                            <Icon id="pinterest-icon" name="pinterest square" style={{ color: 'black', fontSize: '18px' }}/>
                          </a>
                          <a href="/">
                            <Icon id="twitter-icon" name="twitter square" style={{ color: 'black', fontSize: '18px' }}/>
                          </a>
                        </div>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={11}>
                      <div className="footer-right">
                        <nav>
                          <NavLink to="/Food">FOOD</NavLink>
                          <NavLink to="/Travel">TRAVEL</NavLink>
                          <NavLink to="/Wellness">WELLNESS</NavLink>
                          <NavLink to="/Lifestyle" style={{ marginRight: '-6px' }}>LIFESTYLE</NavLink>
                        </nav>
                        <p style={{ marginRight: '18px' }}>ALL RIGHTS RESERVED © FINELY FED 2020</p>
                      </div>
                    </Grid.Column>

                  </Grid.Row>
                </Grid>
              </div>
            </section>
          </section>

          <section className="mobile-screen">
            <section className="site-footer">
              <div className="wrapper just">
                <div className="footer-left">
                  <NavLink to="/">
                    <img src={logo} className="main-menu-logo" />
                  </NavLink>
                  <nav>
                    <NavLink to="/Food">FOOD</NavLink>
                    <NavLink to="/Travel" style={{ marginLeft: '3px' }}>TRAVEL</NavLink>
                    <NavLink to="/WELLNESS">WELLNESS</NavLink>
                    <NavLink to="/Lifestyle">LIFESTYLE</NavLink>
                  </nav>
                  <div className="footer-social">
                    <a href="/">
                      <Icon name="instagram" style={{ color: 'black', fontSize: '18px' }}/>
                    </a>
                    <a href="/">
                      <Icon name="pinterest square" style={{ color: 'black', fontSize: '18px' }}/>
                    </a>
                    <a href="/">
                      <Icon name="twitter square" style={{ color: 'black', fontSize: '18px' }}/>
                    </a>
                  </div>
                </div>
                
                <div className="footer-right">
                  <p className="copyRight">All rights reserved. © Finely Fed 2020</p>
                </div>
              </div>
            </section>
          </section>
        </Aux>
      </ScrollToTop>
    );
  }
}

export default Layout;
