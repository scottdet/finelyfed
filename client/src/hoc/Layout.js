import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { GlobalContext } from '../store';
import { butter } from '../store/api';
import Aux from './_Aux';
import ScrollToTop from '../components/scroll.js';
import Blog from "../components/blog/blog";
import BlogDetail from '../components/blogdetail/blogdetail';
import logo from '../components/images/logo_black.png';
import logo_2 from '../components/images/logo_white.png';
import { Grid, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


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
    var mainLogo = document.getElementById("main-menu-logo");
    var fixedTopNav = document.getElementById("myTopnav-fixed");
    if (x.className !== 'topnav') {
      x.className = "topnav";
      fixedTopNav.style.display = 'none';
      mainLogo.style.display = 'block';
    }
  }
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    var mainLogo = document.getElementById("main-menu-logo");
    var fixedTopNav = document.getElementById("myTopnav-fixed");
    if (x.className === "topnav") {
        x.className += " responsive";
        fixedTopNav.style.display = 'block';
        fixedTopNav.style.paddingBottom = '30px';
        mainLogo.style.display = 'none';
    } else {
        x.className = "topnav";
        fixedTopNav.style.display = 'none';
        x.style.paddingBottom = '40px';
        mainLogo.style.display = 'block';
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
                      <img src={logo} className="main-menu-logo" id="main-menu-logo" />
                    </NavLink>
                  </p>
                </li>
                <li className="top-menu-item">
                  <NavLink to="/lifestyle" className="menu-item" id="last-item" onClick={()=>this.menuClick()}>LIFESTYLE</NavLink>
                </li>
                <li>
                  <NavLink to="/wellness" className="menu-item" onClick={()=>this.menuClick()}>WELLNESS</NavLink>
                </li>
                <li>
                  <NavLink to="/travel" className="menu-item" onClick={()=>this.menuClick()}>TRAVEL</NavLink>
                </li>
                <li>
                  <NavLink to="/food" className="menu-item" onClick={()=>this.menuClick()}>FOOD</NavLink>
                </li>
                <li>
                  <NavLink to="#" className="icon" onClick={() => this.myFunction()}><span></span></NavLink> 
                </li>
              </ul>
              <ul className="topnav" id="myTopnav-fixed">
                <li>
                  <p>
                    <NavLink to="/">
                      <img src={logo} className="main-menu-logo"/>
                    </NavLink>
                  </p>
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
                          <img src={logo_2} className="main-menu-logo" style={{ paddingLeft: '5px' }}/>
                        </NavLink>
                        <div className="footer-social">
                          <a href="https://www.instagram.com/finelyfed/" target="_blank">
                            <Icon id="insta-icon" name="instagram" style={{ color: 'white', fontSize: '18px' }}/>
                          </a>
                          <a href="/">
                            <Icon id="pinterest-icon" name="pinterest square" style={{ color: 'white', fontSize: '18px' }}/>
                          </a>
                        </div>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={11}>
                      <div className="footer-right">
                        <nav>
                          <NavLink to="/food">FOOD</NavLink>
                          <NavLink to="/travel">TRAVEL</NavLink>
                          <NavLink to="/wellness">WELLNESS</NavLink>
                          <NavLink to="/lifestyle" style={{ marginRight: '-6px' }}>LIFESTYLE</NavLink>
                        </nav>
                        <p style={{ marginRight: '18px', color: 'white' }}>ALL RIGHTS RESERVED © FINELY FED 2020</p>
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
                    <img src={logo_2} className="main-menu-logo" />
                  </NavLink>
                  <nav>
                    <NavLink to="/food">FOOD</NavLink>
                    <NavLink to="/travel" style={{ marginLeft: '3px' }}>TRAVEL</NavLink>
                    <NavLink to="/wellness">WELLNESS</NavLink>
                    <NavLink to="/lifestyle">LIFESTYLE</NavLink>
                  </nav>
                  <div className="footer-social">
                    <a href="https://www.instagram.com/finelyfed/" target="_blank">
                      <Icon name="instagram" style={{ color: 'white', fontSize: '18px' }}/>
                    </a>
                    <a href="/">
                      <Icon name="pinterest square" style={{ color: 'white', fontSize: '18px' }}/>
                    </a>
                  </div>
                </div>
                
                <div className="footer-right">
                  <p className="copyRight" style={{ color: 'white' }}>All rights reserved. © Finely Fed 2020</p>
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
