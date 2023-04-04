import Header from "../../components/Header";
import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="0 20px 20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
