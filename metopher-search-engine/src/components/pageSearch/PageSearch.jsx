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
import { Drawer, TextField, Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
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
  const [jsonData, setJsonData] = useState([
    {
      poet: "Poet 1",
      metaphor: "Metaphor 1",
      poem: "Poem 1",
      source: "Source 1",
      target: "Target 1",
    },
    {
      poet: "Poet 2",
      metaphor: "Metaphor 2",
      poem: "Poem 2",
      source: "Source 2",
      target: "Target 2",
    },
    {
      poet: "Poet 1",
      metaphor: "Metaphor 1",
      poem: "Poem 1",
      source: "Source 1",
      target: "Target 1",
    },
    {
      poet: "Poet 2",
      metaphor: "Metaphor 2",
      poem: "Poem 2",
      source: "Source 2",
      target: "Target 2",
    },
    // Add more JSON objects as needed
  ]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [inputs, setInputs] = useState({});
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleInputChange = (event) => {
    console.log(event.target.id, event.target.value);
    const id = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [id]: value }));
    console.log(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8000/api/search?query={"year":2019}', inputs)
      .then((response) => {
        // Handle the response data here
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
    alert(inputs);
    console.log("submited the form");
  };

  // Function to handle search as you type
  const handleSearch = (query) => {
    // Replace this with your API call logic
    // You can use a library like axios to make the API request
    console.log("Searching for:", query);
  };

  const drawer = (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Toolbar style={{ backgroundColor: "#0b1571" }} />
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
            onChange={handleInputChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Source"
            variant="outlined"
            id="source"
            fullWidth
            onChange={handleInputChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Target"
            id="target"
            variant="outlined"
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
            fullWidth
            onChange={handleInputChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Written Year"
            id="year"
            variant="outlined"
            fullWidth
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
            <Typography variant="h6" noWrap component="div">
              SinhalaMetophorEngine
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

          <Grid container spacing={2}>
            {jsonData.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Paper elevation={3} style={{ padding: "16px" }}>
                  <Typography variant="h6">{item.poet}</Typography>
                  <Typography variant="body1">
                    Metaphor: {item.metaphor}
                  </Typography>
                  <Typography variant="body1">Poem: {item.poem}</Typography>
                  <Typography variant="body1">Source: {item.source}</Typography>
                  <Typography variant="body1">Target: {item.target}</Typography>
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
