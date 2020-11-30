import React from "react";
import PostPreview from "./PostPreview";
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import featured from '../../components/images/guide.png';
import bowl from '../../components/images/bowl.png';
import colorado from '../../components/images/colorado.png';
import house from '../../components/images/house.png';
import japan from '../../components/images/japan.png';
import ospi from '../../components/images/ospi.png';
import sushi from '../../components/images/sushi.png';


function Screen({  pages, category }) {

  const filteredPages = category === "All" ? pages : pages.filter(page => (page.categories.length > 0 ? page.categories[0].name === category : false));
  console.log(filteredPages)
  return (
    <div>
      <div className="blog-page">
        { category === "All" ?
          <>
          <div className="container">
              { filteredPages.length > 0 ? 
                <div className="wrapper just">
                  <div className="col-2">
                    <PostPreview
                      key={`blogpost-${filteredPages[0].title}-${filteredPages[0].created}`}
                      title={filteredPages[0].title}
                      summary={filteredPages[0].summary}
                      categories={filteredPages[0].categories}
                      created={filteredPages[0].created}
                      featured_image={filteredPages[0].featured_image}
                      url={filteredPages[0].url}
                      slug={filteredPages[0].slug}
                    />
                  </div>
                  <div className="col-1">
                    { filteredPages.length > 1 ? 
                      <PostPreview
                        key={`blogpost-${filteredPages[1].title}-${filteredPages[1].created}`}
                        title={filteredPages[1].title}
                        summary={filteredPages[1].summary}
                        categories={filteredPages[1].categories}
                        created={filteredPages[1].created}
                        featured_image={filteredPages[1].featured_image}
                        url={filteredPages[1].url}
                        slug={filteredPages[1].slug}
                      />
                    : null}
                    { filteredPages.length > 2 ?
                      <PostPreview
                        key={`blogpost-${filteredPages[2].title}-${filteredPages[2].created}`}
                        title={filteredPages[2].title}
                        summary={filteredPages[2].summary}
                        categories={filteredPages[2].categories}
                        created={filteredPages[2].created}
                        featured_image={filteredPages[2].featured_image}
                        url={filteredPages[2].url}
                        slug={filteredPages[2].slug}
                      />
                    : null}
                  </div>
                </div>
              : null}
          </div>

          <div className="container featured">
            <div className="wrapper just">
              <span className="featuredSpan" style={{ display: 'flex', flexDirection: 'row' }}>
                <img src={featured} className="featured-img" />
                <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>          
                  <div className="featured-title" >
                    <p> los angeles restaurant guide </p>
                  </div>
                  <div className="featured-summary" >
                    <p> This is my unofficial love letter to Los Angeles before departing for the foreseeable future. I've been in this city for over seven years, but I didn't truly start venturing out restaurant-wise until I graduated from college.</p>
                    <div className="category">
                      <a href="/food/los-angeles-restaurant-guide">
                        <span style={{ paddingLeft: '45px' }}> Read More >> </span>
                      </a>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>

          <div className="container watch">
            <div className="blog-title" style={{ textAlign: 'center', paddingBottom: '30px' }}>
              <a href="https://www.instagram.com/p/CCPTAW1syOp/" target="_blank">
                <p style={{ color: 'black' }}> @finelyfed </p>
              </a>
            </div>

            <div className="insta-row">
              <div className="insta-parent" style={{ position: 'relative' }}>
                <a href="https://www.instagram.com/p/B8u4GPIBGag/" target="_blank">
                  <img className="insta-pic" src={japan} style={{ display: 'block' }} />
                  <Icon name='clone'
                    style={{ 
                      color: 'white', 
                      position: 'absolute', 
                      top: '9px',
                      left: 'calc(100% - 33px)',
                      fontSize: '18px',
                      fontWeight: '100',
                      transform: 'rotate(-90deg)'
                     }}
                  />
                </a>
              </div>
              <div className="insta-parent" style={{ position: 'relative' }}>
                <a href="https://www.instagram.com/p/CHq2k7oHEJ3/" target="_blank">
                  <img className="insta-pic" src={ospi} style={{ display: 'block' }} />
                </a>
              </div>
              <div className="insta-parent" style={{ position: 'relative' }}>
                <a href="https://www.instagram.com/p/CCbpxCXpudX/" target="_blank">
                  <img className="insta-pic" src={house} style={{ display: 'block' }} />
                </a>
              </div>
              <div className="insta-parent" style={{ position: 'relative' }}>
                <a href="https://www.instagram.com/p/B38Q-B0ge3M/" target="_blank">
                  <img className="insta-pic" src={sushi} style={{ display: 'block' }} />
                </a>
              </div>
              <div className="insta-parent" style={{ position: 'relative' }}>
                <a href="https://www.instagram.com/p/CFIcROQnylW/" target="_blank">
                  <img className="insta-pic" src={colorado} style={{ display: 'block' }} />
                  <Icon name='clone'
                    style={{ 
                      color: 'white', 
                      position: 'absolute', 
                      top: '9px',
                      left: 'calc(100% - 33px)',
                      fontSize: '18px',
                      fontWeight: '100',
                      transform: 'rotate(-90deg)'
                     }}
                  />
                </a>
              </div>
              <div className="insta-parent" style={{ position: 'relative' }}>
                <a href="https://www.instagram.com/p/CCPTAW1syOp/" target="_blank">
                  <img className="insta-pic" src={bowl} style={{ display: 'block' }} />
                </a>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="wrapper just">
              { filteredPages.map((page, index) => (
                index > 3 ? 
                  <div className="col-3">
                    <PostPreview
                      key={`blogpost-${page.title}-${page.created}`}
                      title={page.title}
                      summary={page.summary}
                      categories={page.categories}
                      created={page.created}
                      featured_image={page.featured_image}
                      url={page.url}
                      slug={page.slug}
                    />
                  </div>
                : null
              ))}
            </div>
          </div>
          </>
        :
          <div className="container">
              <h1 className="text-center category-title">{category}</h1>
              <div className="wrapper just">
                { filteredPages.map((page, index) => (
                    <div className="col-3">
                      <PostPreview
                        key={`blogpost-${page.title}-${page.created}`}
                        title={page.title}
                        summary={page.summary}
                        categories={page.categories}
                        created={page.created}
                        featured_image={page.featured_image}
                        url={page.url}
                        slug={page.slug}
                      />
                    </div>
                ))}
              </div>
          </div>
        }
      </div>

    </div>
  );
};

export default Screen;

