import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SinglePost = ({ post }) => {
  return (
    <Card style={{ margin: "10px 0" }}>
      <CardHeader
        avatar={<Avatar src={post?.profile?.image} />}
        title={post?.profile?.user?.username}
        subheader={post?.time}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <CardActionArea>
          <Typography variant="h5">{post?.title}</Typography>
        </CardActionArea>
        <CardActionArea>
          <CardMedia
            style={{ height: 0, paddingTop: "56%" }}
            image={post?.image}
          />
        </CardActionArea>
        <CardActionArea>
          <Typography>
            {post?.content?.length > 100
              ? post?.content?.substring(0, 100)
              : post?.content}
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default SinglePost;
