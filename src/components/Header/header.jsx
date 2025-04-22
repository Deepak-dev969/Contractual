import * as React from "react";
import "../../components/Header/header.style.css";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import BrandLogo from "../../assets/svg/ContractualLogo.svg";

export default function Header() {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "FAQs", id: "faqs" },
    { label: "Community", id: "community" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div id="Header">
        <div id="logo">
          <Link to="/">
            <img src={BrandLogo} alt="Contractual Logo" />
          </Link>
        </div>

        {!isTabletOrMobile ? (
          <>
            <div className="nav-btns">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="text"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <div className="header-buttons">
              <Button variant="text" id="login-btn">
                <Link to="/login">Log in</Link>
              </Button>
              <Button variant="text" id="get-started-btn">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </>
        ) : (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <div
                style={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  padding: 16,
                }}
              >
                <IconButton
                  onClick={toggleDrawer(false)}
                  style={{ alignSelf: "flex-end" }}
                >
                  <CloseIcon />
                </IconButton>
                <List>
                  {menuItems.map((item) => (
                    <ListItem
                      button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setDrawerOpen(false); // Close drawer on click
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
                <div
                  className="nav-log-signup-btn"
                  style={{ marginTop: "auto" }}
                >
                  <Link to="/login">
                    <Button
                      fullWidth
                      variant="outlined"
                      id="login-btn"
                      style={{ marginBottom: 8 }}
                    >
                      Log in
                    </Button>
                  </Link>
                  <Button variant="contained" id="get-started-btn">
                    Get Started
                  </Button>
                </div>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </>
  );
}
