import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Tooltip,
  Collapse,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Description,
  NoteAdd,
  Folder,
  Group,
  CreditCard,
  Logout,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ContractualLogo from "../../../assets/svg/ContractualLogo.svg";

const drawerWidth = 260;
const collapsedWidth = 70;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "" },
  { text: "Solicitations", icon: <Description />, path: "solicitations" },
  { text: "Proposals", icon: <NoteAdd />, path: "proposals" },
  { text: "Document Library", icon: <Folder />, path: "document-library" },
  { text: "Community", icon: <Group />, path: "community" },
  { text: "Plans & Billing", icon: <CreditCard />, path: "plans-billing" },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: "width 0.3s ease-in-out",
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : drawerWidth,
          backgroundColor: "#111c44",
          color: "#fff",
          boxSizing: "border-box",
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
        },
      }}
    >
      {/* Header: Logo + Toggle */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: collapsed ? "center" : "space-between",
          alignItems: "center",
        }}
      >
        {!collapsed && (
          <Box component="img" src={ContractualLogo} alt="logo" width="120" />
        )}
        <Tooltip title={collapsed ? "Expand" : "Collapse"}>
          <IconButton
            onClick={() => setCollapsed(!collapsed)}
            sx={{ color: "#fff" }}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ borderColor: "#2d3748" }} />

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <Tooltip
            key={item.text}
            title={collapsed ? item.text : ""}
            placement="right"
          >
            <ListItem
              button
              onClick={() => navigate(`/dashboard/${item.path}`)}
              sx={{
                "&:hover": { backgroundColor: "#1f2937" },
                px: 2,
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",

                  minWidth: "unset",
                  mr: collapsed ? 0 : 2,
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <Collapse in={!collapsed} orientation="horizontal" timeout={300}>
                <ListItemText
                  primary={item.text}
                  // sx={{ backgroundColor: "#111c44" }}
                />
              </Collapse>
            </ListItem>
          </Tooltip>
        ))}
      </List>

      {/* Logout Button */}
      <Box sx={{ mt: "auto", p: 2, backgroundColor: "#111c44" }}>
        <Tooltip title={collapsed ? "Log Out" : ""} placement="right">
          <ListItem
            button
            onClick={() => {
              localStorage.setItem("loggedIn", "false");
              window.location.reload();
            }}
            sx={{
              backgroundColor: "#0B1538",
              "&:hover": { backgroundColor: "#1f2937" },
              px: 2,
            }}
          >
            <ListItemIcon
              sx={{
                color: "#fff",
                minWidth: "unset",
                mr: collapsed ? 0 : 2,
                justifyContent: "center",
              }}
            >
              <Logout />
            </ListItemIcon>
            <Collapse in={!collapsed} orientation="horizontal" timeout={300}>
              <ListItemText primary="Log Out" />
            </Collapse>
          </ListItem>
        </Tooltip>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
