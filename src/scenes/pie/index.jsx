import Header from "../../components/Header";
import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="0 20px 20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="450px" mt="-30px">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
