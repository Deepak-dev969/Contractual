import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import card1Icon from "../../../../assets/svg/Dashboard-card1.svg";
import card2Icon from "../../../../assets/svg/Dashboard-card2.svg";
import card3Icon from "../../../../assets/svg/Dashboard-card3.svg";

const StatCard = ({ title, value, percent, color, iconBg, icon }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#111C44",
        color: "#ffffff",
        height: "28vh",
        borderRadius: 3,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          border: "1px solid #313D4F",
          borderRadius: 3,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="h6" color="#fff">
            {title}
          </Typography>
          <Box
            sx={{
              backgroundColor: iconBg,
              borderRadius: "30%",

              width: 68,
              height: 68,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {typeof icon === "string" ? (
              <img src={icon} alt={title} style={{ width: 40, height: 40 }} />
            ) : (
              icon && <icon sx={{ color }} />
            )}
          </Box>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {value}
          </Typography>
          <Typography variant="h6">{percent}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const DashboardStats = () => {
  return (
    <Grid container spacing={3} mb={5}>
      <Grid item xs={12} md={4} sx={{ width: "32%" }}>
        <StatCard
          title="New"
          value="1,859"
          percent={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#ffffff",
              }}
            >
              <TrendingUpIcon style={{ color: "#4fd1c5", fontSize: "28px" }} />
              <span>Up from yesterday</span>
            </span>
          }
          color="#ffffff"
          iconBg="#921b94"
          icon={card1Icon}
        />
      </Grid>

      <Grid item xs={12} md={4} sx={{ width: "32%" }}>
        <StatCard
          title="Submitted"
          value="268"
          percent={
            <>
              <TrendingUpIcon style={{ color: "#5FCCF7", fontSize: "28px" }} />{" "}
              <span style={{ color: "#00B69B" }}>8.5%</span>{" "}
              <span style={{ color: "#ffffff" }}>Up from yesterday</span>
            </>
          }
          color="#ffff"
          iconBg="#6ba239"
          icon={card2Icon}
        />
      </Grid>

      <Grid item xs={12} md={4} sx={{ width: "32%" }}>
        <StatCard
          title="Archived"
          value="268"
          percent={
            <>
              <TrendingUpIcon style={{ color: "#A0484F", fontSize: "28px" }} />
              <span style={{ color: "#A0484F" }}> 8.5%</span>{" "}
              <span style={{ color: "#ffffff" }}>Up from yesterday</span>
            </>
          }
          color="#fff"
          iconBg="#9d1c2c"
          icon={card3Icon}
        />
      </Grid>
    </Grid>
  );
};

export default DashboardStats;
