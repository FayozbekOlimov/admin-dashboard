import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const statBoxData = [
    {
      id: 1,
      title: "12,361",
      subtitle: "Email Sent",
      progress: "0.75",
      increase: "+14%",
      icon: (
        <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
      ),
    },
    {
      id: 2,
      title: "431,221",
      subtitle: "Sales Obtained",
      progress: "0.5",
      increase: "+21%",
      icon: (
        <PointOfSaleIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      id: 3,
      title: "32,441",
      subtitle: "New Clients",
      progress: "0.30",
      increase: "+5%",
      icon: (
        <PersonAddIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      id: 4,
      title: "1,325,134",
      subtitle: "Traffic Inbound",
      progress: "0.80",
      increase: "+43%",
      icon: (
        <TrafficIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
  ];

  return (
    <Box m="0 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {statBoxData.map((stat) => (
          <Box
            key={stat.id}
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={stat.title}
              subtitle={stat.subtitle}
              progress={stat.progress}
              increase={stat.increase}
              icon={stat.icon}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
