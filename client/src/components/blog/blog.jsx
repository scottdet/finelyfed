import React, { useContext, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import Screen from "./screen";
import { GlobalContext } from "../../store";
import { butter } from "../../store/api";


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

  return (
    <Segment vertical>
      <Screen pages={state.pages.data} category={category} />
    </Segment>
  );
};

export default Blog;
