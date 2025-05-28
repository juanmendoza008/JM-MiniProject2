import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import { NavLink } from "react-router-dom";
import { useUserContext } from "../stores/userStore";
import MTLogo from "./../assets/images/MT-logo.jpg";

const pagesConfig = [
  { label: "HomeBase", url: "/Home/HomeBase" },
  { label: "Transactions", url: "/Home/Transactions" },
  { label: "Exchange Rate", url: "/Home/ExcRate" },
];

function HeaderNavbar() {
  const { currentUser } = useUserContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={MTLogo}
            alt="MT Logo"
            style={{ height: "50px", width: "50px", marginRight: "10px" }}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MT BANK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none", gap: "5px" } }}
            >
              {pagesConfig.map((page) => (
                <NavLink key={page.label} to={page.url}>
                  {page.label}
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MT Bank
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "5px" },
            }}
          >
            {pagesConfig.map((page) => (
              <NavLink key={page.label} to={page.url}>
                {page.label}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={currentUser}>
              <Avatar alt={currentUser} src="/static/images/avatar/2.jpg" />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderNavbar;
