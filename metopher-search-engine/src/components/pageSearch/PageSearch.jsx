import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, TextField, Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
const drawerWidth = 440;
const apiURL = "http://localhost:8000/api/search";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2f1682", // Dark blue as the primary color
    },
    type: "dark", // Use dark mode
  },
});

function PageSearch(props) {
  // Your existing JSON data

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/api/search"); // Send a GET request to the server.
        if (response.status === 200) {
          setJsonData(response.data); // Update the state with the search results.
        } else {
          console.error("Server returned an error");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
      }
    };

    // fetchData();
  }, [jsonData]);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [inputs, setInputs] = useState({
    poem: "",
    target: "",
    poet: "",
    source: "",
    meaning: "",
  });
  const paperStyle = {
    padding: "16px",

    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(5.05)",
    },
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const useStyles = makeStyles((theme) => ({
    movingText: {
      color: "red",
      whiteSpace: "nowrap",
      overflow: "hidden",
      animation: "moveLeftToRight 10s linear infinite", // Adjust the animation duration (10s) as needed
      transition: "opacity 500ms ease-in",
    },
    "@keyframes moveLeftToRight": {
      "0%": {
        transform: "translateX(100%)", // Start off-screen to the right
      },
      "100%": {
        transform: "translateX(-100%)", // Move to off-screen to the left
      },
    },
  }));
  const classes = useStyles;
  const handleInputChange = (event) => {
    console.log(event.target.id, event.target.value);
    const id = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [id]: value }));
    console.log(inputs);
  };

  const handleSubmit = async () => {
    setJsonData([]);
    console.log(inputs);
    try {
      const responce = await axios.get(
        "http://localhost:8000/api/search-by-params",
        {
          params: inputs,
        }
      );
      console.log(responce);
      if (responce.data.length === 0) {
        setJsonData([]);
        alert("not matching poems");
      } else {
        setJsonData(responce.data);
      }
    } catch (error) {
      alert(error);
    }
    // axios
    //   .post('http://localhost:8000/api/search-by-params',
    //     {params: inputs,})
    //   .then((response) => {
    //     // Handle the response data here
    //     setJsonData(response.data)
    //     console.log("Response data:", response.data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors here
    //     console.error("Error:", error);
    //   });
    // alert(inputs);
    // console.log("submited the form");
  };

  const navigate = useNavigate();
  const getAll = (event) => {
    // event.preventDefault();

    axios
      .post("http://localhost:8000/api/search")
      .then((response) => {
        // Handle the response data here
        setJsonData(response.data);
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
    setInputs({
      poem: "",
      target: "",
      poet: "",
      source: "",
      meaning: "",
    });
    console.log("submited the form");
  };

  // Function to handle search as you type
  const handleSearch = (query) => {
    // Replace this with your API call logic
    // You can use a library like axios to make the API request
    console.log("Searching for:", query);
  };

  const drawer = (
    <div style={{ backgroundColor: "#ffffff", alignItems: "center" }}>
      <Toolbar style={{ backgroundColor: "#0b1571" }}>
        <Link to="/">
          <img
            src={require("./logo.png")}
            alt="Image Alt Text"
            style={{ width: "60px", height: "auto" }} // Adjust the width and height as needed
          />
        </Link>
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ color: "white", fontStyle: "italic" }}
        >
          SinhalaMetophorEngine
        </Typography>
      </Toolbar>
      <br></br>
      <Button variant="outlined" onClick={getAll} align="center">
        All poems with metophers
      </Button>
      <List>
        <ListItem>
          <Typography variant="h6">Find your poem</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <TextField
            label="Poem name"
            variant="outlined"
            id="poem"
            fullWidth
            value={inputs.poem}
            onChange={handleInputChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Source"
            variant="outlined"
            id="source"
            value={inputs.source}
            fullWidth
            onChange={handleInputChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Target"
            id="target"
            variant="outlined"
            value={inputs.target}
            fullWidth
            onChange={handleInputChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            sx={{ input: { color: "#08107d" } }}
            label="Poet"
            id="poet"
            variant="outlined"
            value={inputs.poet}
            fullWidth
            onChange={handleInputChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Metopher Meaning"
            id="meaning"
            variant="outlined"
            fullWidth
            value={inputs.meaning}
            onChange={handleInputChange}
          />
        </ListItem>
      </List>
      <Button variant="outlined" onClick={handleSubmit}>
        Search
      </Button>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar style={{ backgroundColor: "#0b1571" }}>
            <IconButton
              //   color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="body1" className={classes.movingText}>
              Your moving sentence goes here
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              paper: {
                backgroundColor: "pink",
                color: "red",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography
            variant="body1"
            style={{ fontSize: "1.2rem", color: "#555", fontStyle: "italic" }}
          >
            Sinhala Metaphor Search is a powerful online tool designed to unlock
            the beauty and depth of Sinhala poetry. Our platform allows you to
            explore the world of metaphors in Sinhala literature, making it easy
            to find, analyze, and appreciate the poetic artistry within poems,
            books, and various sources. You can search for metaphors by poet,
            poem name, book name, source, target, and even their meanings.
            Discover the hidden gems of Sinhala literature, gain insights into
            the rich tapestry of language, and connect with the profound beauty
            of metaphors like never before. Whether you're a student, scholar,
            or simply a lover of Sinhala literature, Sinhala Metaphor Search is
            your gateway to the enchanting world of metaphors in Sinhala poetry.
          </Typography>
          <br />
          <Grid container spacing={2}>
            {jsonData.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Paper
                  elevation={3}
                  style={{ padding: "16px", color: "#033291" }}
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "box-shadow .3s",
                    },
                  }}
                >
                  <Typography variant="h6">{item._source.poem}</Typography>

                  <Typography variant="body1" align="left">
                    Book
                    <Card variant="outlined">{item._source.book_name}</Card>
                  </Typography>
                  <Typography variant="body1" align="left">
                    Published Year
                    <Card variant="outlined">{item._source.year}</Card>
                  </Typography>
                  <Typography variant="body1" align="left">
                    Poet
                    <Card variant="outlined">{item._source.Poet}</Card>
                  </Typography>
                  <Typography variant="body1" align="left">
                    Lyrics
                    <Card variant="outlined" style={{ fontWeight: "1200" }}>
                      {item._source.line}
                    </Card>
                  </Typography>
                  <Typography variant="body1" align="left">
                    Metaphor
                    <Card variant="outlined">
                      {" "}
                      {item._source.metaphorical_terms}
                    </Card>
                  </Typography>
                  <Typography variant="body1" align="left">
                    Source
                    <Card variant="outlined">{item._source.source}</Card>
                  </Typography>
                  <Typography variant="body1" align="left">
                    Target
                    <Card variant="outlined">{item._source.target}</Card>
                  </Typography>
                  <Typography variant="body1" align="left">
                    Meaning
                    <Card variant="outlined">{item._source.meaning}</Card>
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider></Divider>
      </Box>
    </div>
  );
}

export default PageSearch;
