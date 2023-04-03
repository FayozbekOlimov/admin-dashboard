import {
  Box,
  Accordion,
  useTheme,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqData = [
    {
      id: 1,
      summary: "An Important question",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos sequi quis error sed ab dolorem iusto praesentium corrupti ducimus quidem eos eligendi, id eum numquam quod magni beatae placeat!",
    },
    {
      id: 2,
      summary: "Another Important question",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos sequi quis error sed ab dolorem iusto praesentium corrupti ducimus quidem eos eligendi, id eum numquam quod magni beatae placeat!",
    },
    {
      id: 3,
      summary: "Your favourite question",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos sequi quis error sed ab dolorem iusto praesentium corrupti ducimus quidem eos eligendi, id eum numquam quod magni beatae placeat!",
    },
    {
      id: 4,
      summary: "Some Random question",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos sequi quis error sed ab dolorem iusto praesentium corrupti ducimus quidem eos eligendi, id eum numquam quod magni beatae placeat!",
    },
    {
      id: 5,
      summary: "The Final question",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos sequi quis error sed ab dolorem iusto praesentium corrupti ducimus quidem eos eligendi, id eum numquam quod magni beatae placeat!",
    },
  ];

  return (
    <Box m="0 20px 20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqData.map((faq) => (
        <Accordion key={faq.id} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {faq.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
