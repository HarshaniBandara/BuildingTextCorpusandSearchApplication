import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import photo4 from "../../images/nuthana-padya-sangrahaya.jpg";
import photo2 from "../../images/yati-wiyana.JPG";
import photo3 from "../../images/samahara-kamatahan.jpeg";
import photo1 from "../../images/puda-nolada-mal.jpeg";
import mahinda from "../../images/mahinda.jpeg";
import athurupana from "../../images/athurupana.jpeg";
import lakshantha from "../../images/lakshantha.jpeg";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="#fffff" align="center">
      {"Copyright © "}
      <Link color="#fffff" >
      SinhalaMetophorEngine
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const books = [
  {
    book_name: "පුද නොලද මල්",
    book_photo: photo1,
    year: "2019",
    author: "අබේසින්හ අතුරුපාන",
  },
  {
    book_name: "යටි වියන",
    book_photo: photo2,
    year: "2007",
    author: "ලක්ශාන් අතුකෝරල",
  },
  {
    book_name: "සමහර කමටහන්",
    book_photo: photo3,
    year: "2016",
    author: "ලක්ශාන් අතුකෝරල",
  },
  {
    book_name: "නූතන පදය සංග්‍රහය",
    book_photo: photo4,
    year: "1995",
    author: "ඇ.ස්‌. මහින්ද හිමි ",
  },
];
const authors = [
  {
    book_name: "පුද නොලද මල්",
    author_photo: athurupana,
    author: "අබේසින්හ අතුරුපාන",
  },
  {
    book_name: "යටි වියන,සමහර කමටහන්",
    author_photo:lakshantha,
    author: "ලක්ශාන් අතුකෝරල",
  },
  {
    book_name:
      "නිදහසේ දැහැන, නිදහසේ මන්ත්‍රය, ජාතික තොටිල්ල, අද ලක් මවගේ පුත්තු, සිංහල ජාතිය, නිදහස",
    author_photo: mahinda,
    author: "ඇ.ස්‌. මහින්ද හිමි ",
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Home() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ backgroundColor: "#0b1571" }}>
          <img
            src={require("../pageSearch/logo.png")}
            alt="Image Alt Text"
            style={{ width: "60px", height: "auto" }} // Adjust the width and height as needed
          />
          <Typography
            variant="h7"
            noWrap
            component="div"
            style={{ color: "white", fontStyle: "italic" }}
          >
            SinhalaMetophorEngine
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#0b1571"
              gutterBottom
            >
              SinhalaMetophorEngine
            </Typography>
            <Typography variant="h5" align="center" color="black" paragraph>
              "Discover Sinhala Poetry's Hidden Metaphors."
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/metopher-search");
                }}
              >
                Search your poem
              </Button>

              <Button variant="outlined">Add New Poem</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <h6>Books</h6>
          <Grid container spacing={4}>
            {books.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "100%",
                    }}
                    image={card.book_photo}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.book_name}
                    </Typography>
                    <Typography>
                      මෙම පුස්තකය {card.year} දී {card.author} විසින් රචනා කරන
                      ලද්දකි.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <h6>Authors of the books</h6>
          <Grid container spacing={4}>
            {authors.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "100%",
                    }}
                    image={card.author_photo}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.author}
                    </Typography>
                    <Typography>
                      {card.author} විසින් {card.book_name} රචනා කර ඇත .
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "#0b0861", p: 6 ,color:'white'}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
         Author: Harshani Bandara-190088H
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
