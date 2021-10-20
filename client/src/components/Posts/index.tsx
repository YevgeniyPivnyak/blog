/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";
import { AppTheme } from "config/theme";
import { PostInerface } from "./interfaces";

interface Props {
  posts: ReadonlyArray<PostInerface>;
}

export const Posts = ({ posts }: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <div>
      {posts.map(({ title, author }: PostInerface) => (
        <div>
          <p>{title}</p>
          <p>{author}</p>
        </div>
      ))}
    </div>
  );
};
