import { Container, Grid } from "@material-ui/core";
import React from "react";
import AllPosts from "../components/AllPosts";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <Container style={{ marginTop: "60px" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <AllPosts />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
