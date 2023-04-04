import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";

const Bar = () => {
  return (
    <Box m="0 20px 20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
