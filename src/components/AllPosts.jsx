import { Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { domain, header } from "../env";
import SinglePost from "./common/SinglePost";

const AllPosts = () => {
  const [allposts, setAllposts] = useState(null);
  useEffect(() => {
    const getallposts = async () => {
      Axios({
        url: `${domain}/api/posts/`,
        method: "GET",
        headers: header,
      }).then((response) => {
        // console.log(response.data);
        setAllposts(response.data);
      });
    };
    getallposts();
  }, []);
  return (
    allposts !== null && (
      <>
        {allposts?.map((item, i) => (
          <SinglePost key={i} post={item} />
        ))}
      </>
    )
  );
};

export default AllPosts;
