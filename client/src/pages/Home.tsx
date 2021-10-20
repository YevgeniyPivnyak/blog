/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, useTheme } from "@mui/material";
import { AppTheme } from "../config/theme";
import { Posts } from "components";
import { useEffect, useState } from "react";

export const Home = () => {
  const theme: AppTheme = useTheme();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div
      css={css`
        max-width: ${theme.page.width};
        margin: ${theme.page.margin};
      `}
    >
      <Posts posts={posts} />
    </div>
  );
};
