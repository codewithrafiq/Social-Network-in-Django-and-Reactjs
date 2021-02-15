import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
} from "@material-ui/core";
import React from "react";

const SingleReply = ({ reply }) => {
  return (
    <Card style={{ width: "70%" }}>
      <CardHeader
        title={reply?.profile?.user?.username}
        subheader={reply?.time}
        avatar={<Avatar src={reply?.profile?.image} />}
      />
      <CardContent>
        <Typography>{reply?.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default SingleReply;
