import React, { useContext, useEffect } from 'react';
import Screen from './screen';
import { GlobalContext } from '../../store';
import { butter } from '../../store/api';
import { Segment } from 'semantic-ui-react';
import '../blog.css';


const BlogDetail = ({ match }) => {
  const [state, dispatch] = useContext(GlobalContext);
  const slug = match.path.split(/[/]/);
  const currentPage = state.pages.data.find(page => page.slug === slug[slug.length - 1]);
  
  const category = currentPage.categories[0].name;
  const filteredPages = state.pages.data.filter(page => ((page.categories[0].name === category) && (page.slug !== currentPage.slug)));
  const unfilteredPages = state.pages.data.filter(page => ((page.categories[0].name !== category)));

  useEffect(() => {
    const getPages = async () => {
      const { data } = await butter.post.list();

      dispatch({
        type: "update_pages",
        data
      });
    };

    getPages();
  }, []);

  return (
    <Segment vertical style={{ backgroundColor: 'white' }}>
      {currentPage && (
        <Screen
          image={currentPage.featured_image}
          created={currentPage.created}
          categories={currentPage.categories}
          title={currentPage.title}
          summary={currentPage.summary}
          author={currentPage.author}
          body={currentPage.body}
          filteredPages={filteredPages}
          unfilteredPages={unfilteredPages}
        />
      )}
    </Segment>
  );
};

export default BlogDetail;

/*
 author
 body
 categories
 created
 featured_image
 meta_description
 published
 seo_title
 slug
 status
 summary
 tags
 title
 url
 */
