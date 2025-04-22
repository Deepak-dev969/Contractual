import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Popover,
  // Button,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Grow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DashboardHeader = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const email = storedUser?.email || "admin@example.com";

  const user = {
    name: storedUser?.firstName || "Admin User",
    email,
    image:
      storedUser?.image ||
      `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        email
      )}`,
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    window.location.reload();
  };

  return (
    <Box display="flex" justifyContent="space-between" mb={4}>
      {/* Breadcrumb Section */}
      <Box>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ color: "#A0AEC0", fontSize: 14 }}
        >
          <Link component={RouterLink} to="/" underline="hover" color="inherit">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Typography key={to} fontWeight={700} color="text.primary">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Typography>
            ) : (
              <Link
                component={RouterLink}
                to={to}
                key={to}
                underline="hover"
                color="inherit"
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
            );
          })}
        </Breadcrumbs>

        <Typography
          fontSize="2.5rem"
          fontWeight={700}
          sx={{
            background: "linear-gradient(to right, #eb19cc, #14e8dd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "3.5rem",
          }}
        >
          {pathnames.length > 0
            ? pathnames[pathnames.length - 1].charAt(0).toUpperCase() +
              pathnames[pathnames.length - 1].slice(1)
            : "Dashboard"}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#111c44",
          px: 2,
          py: 0,
          borderRadius: "50px",
          display: "flex",
          textAlign: "right",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Box>
          <Typography fontWeight={600} sx={{ color: "#fff" }}>
            {user.name}
          </Typography>
          <Typography fontSize={12} color="gray">
            {user.email}
          </Typography>
        </Box>
        <Avatar src={user.image} sx={{ width: 50, height: 50 }} />
        <KeyboardArrowDownIcon sx={{ color: "white", fontSize: 20 }} />
      </Box>

      {/* Popover Menu */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={Grow}
        PaperProps={{
          sx: {
            backgroundColor: "#0B1544",
            borderRadius: "16px",
            width: 280,
            mt: 1,
            p: 2,
            boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <Box>
          {/* User Info */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Avatar src={user.image} sx={{ width: 60, height: 60, mr: 2 }} />
            <Box>
              <Typography fontWeight="bold" fontSize="18px" color="#fff">
                {user.name}
              </Typography>
              <Typography fontSize="14px" color="#fff">
                {user.email}
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box sx={{ height: "1px", backgroundColor: "#ffffff33", my: 1 }} />

          {/* Menu Items */}
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 300,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": {
                  textDecoration: "underline",
                  color: "#14e8dd",
                },
              }}
              onClick={() => alert("Navigate to profile")}
            >
              Personal Profile
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 300,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": {
                  textDecoration: "underline",
                  color: "#eb19cc",
                },
              }}
              onClick={handleLogout}
            >
              Log Out
            </Typography>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default DashboardHeader;
