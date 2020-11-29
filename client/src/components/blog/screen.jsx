import React from "react";
import PostPreview from "./PostPreview";
import 'semantic-ui-css/semantic.min.css';
import featured from '../../components/images/featured.png';
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
                <img src={featured} style={{ maxWidth: '50%', paddingLeft: '20px' }} />
                <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>          
                  <div className="featured-title" >
                    <p> This is a featured post, maybe a restaurant guide </p>
                  </div>
                  <div className="featured-summary" >
                    <p> If you love good visting restaurants ranging from the cheapest hole in the wall mexi danks (for some top of the line breaky burritos or cali Bs) to the bougiest downtown "I'm trynna meet wolfgang puck", this is your guide to Los Angeles food.</p>
                    <div className="category">
                      <span style={{ paddingLeft: '45px' }}> Read More >> </span>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>

          <div className="container watch">
            <div className="blog-title" style={{ textAlign: 'center', paddingBottom: '30px' }}>
              <p style={{ color: 'black' }}> @finelyfed </p>
            </div>

            <div className="insta-row">
              <div className="insta-parent">
                <img className="insta-pic" src={japan} />
              </div>
              <div className="insta-parent">
                <img className="insta-pic" src={ospi} />
              </div>
              <div className="insta-parent">
                <img className="insta-pic" src={house} />
              </div>
              <div className="insta-parent">
                <img className="insta-pic" src={sushi} />
              </div>
              <div className="insta-parent">
                <img className="insta-pic" src={colorado} />
              </div>
              <div className="insta-parent">
                <img className="insta-pic" src={bowl} />
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

