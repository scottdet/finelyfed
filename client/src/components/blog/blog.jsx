import React, { useContext, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import Screen from "./screen";
import { GlobalContext } from "../../store";
import { butter } from "../../store/api";
import ReactGA from 'react-ga'

const Blog = ({ match }) => {
  const [state, dispatch] = useContext(GlobalContext);
  const paths = match.path.split(/[/]/);
  const category = paths.length === 2 ? (paths[1] === "" ? "All" : paths[1]) : "";

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
  
  useEffect(() => {
    ReactGA.initialize('UA-188118979-2');
    if (paths[1] === "") {
      ReactGA.pageview('/Home');
    } else if (paths[1] === "food") {
      ReactGA.pageview('/Food');
    } else if (paths[1] === "travel") {
      ReactGA.pageview('/Travel');
    } else if (paths[1] === "wellness") {
      ReactGA.pageview('/Wellness');
    } else if (paths[1] === "lifestyle") {
      ReactGA.pageview('/LifeStyle');
    }
  }, [paths[1]])

  return (
    <Segment vertical>
      <Screen pages={state.pages.data} category={category} />
    </Segment>
  );
};

export default Blog;
