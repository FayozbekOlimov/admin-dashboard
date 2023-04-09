import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar as SideBar,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = ({ collapsed, setCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  const menuItemData = [
    {
      title: "Dashboard",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Manage Team",
      to: "/team",
      icon: <PeopleOutlinedIcon />,
    },
    {
      title: "Contacts",
      to: "/contacts",
      icon: <ContactsOutlinedIcon />,
    },
    {
      title: "Invoices Balances",
      to: "/invoices",
      icon: <ReceiptOutlinedIcon />,
    },
    {
      title: "Profile Form",
      to: "/form",
      icon: <PersonOutlinedIcon />,
    },
    {
      title: "Calendar",
      to: "/calendar",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      title: "FAQ Page",
      to: "/faq",
      icon: <HelpOutlinedIcon />,
    },
    {
      title: "Bar Chart",
      to: "/bar",
      icon: <BarChartOutlinedIcon />,
    },
    {
      title: "Pie Chart",
      to: "/pie",
      icon: <PieChartOutlinedIcon />,
    },
    {
      title: "Line Chart",
      to: "/line",
      icon: <TimelineOutlinedIcon />,
    },
    {
      title: "Geography Chart",
      to: "/geography",
      icon: <MapOutlinedIcon />,
    },
  ];

  return (
    <SideBar
      style={{ height: "100vh", borderRightWidth: 0 }}
      defaultCollapsed={!collapsed}
      backgroundColor={colors.primary[400]}
    >
      <Menu>
        <MenuItem
          icon={
            !collapsed ? (
              <IconButton onClick={() => setCollapsed(true)}>
                <MenuOutlinedIcon />
              </IconButton>
            ) : undefined
          }
          style={{
            margin: "10px 0 0 0",
            color: colors.grey[100],
            cursor: "auto",
          }}
        >
          {collapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMIN
              </Typography>
              <IconButton onClick={() => setCollapsed(false)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {collapsed && (
          <>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="80px"
                height="80px"
                src={`../../assets/user.png`}
                style={{ borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center" my="8px">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Ed Roh
              </Typography>
              <Typography variant="h6" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </>
        )}
        {/* MENU ITEMS */}
        {menuItemData.map((item) => (
          <Item
            key={item.to}
            title={item.title}
            to={item.to}
            icon={item.icon}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </Menu>
    </SideBar>
  );
};

export default Sidebar;
