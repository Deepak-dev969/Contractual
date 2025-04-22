import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#0A0A0A",
  color: "#fff",
  //   border: "1px solid rgba(255, 255, 255, 0.1)",
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  //   "&::before": {
  //     display: "none",
  //   },
}));

const AccordionSummary = styled(({ isExpanded, ...props }) => (
  <MuiAccordionSummary
    expandIcon={
      isExpanded ? (
        <RemoveIcon sx={{ color: "#d946ef" }} />
      ) : (
        <AddIcon sx={{ color: "#d946ef" }} />
      )
    }
    {...props}
  />
))(({ theme }) => ({
  border: "1px solid #DFDFDF",
  borderRadius: "16px",
  backgroundColor: "#070817",
  padding: theme.spacing(3),
  [`& .${accordionSummaryClasses.content}`]: {
    marginRight: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "black",
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className=" w-[100%] h-[100vh] flex flex-col gap-y-4 justify-center items-center  ">
      {[
        {
          label: "What types of proposals do you support?",
          content:
            "We support a wide range of proposals including business, legal, and technical formats.",
        },
        {
          label: "Is my data secure?",
          content:
            "Yes, your data is encrypted and stored using industry best practices.",
        },
        {
          label: "How long does it take to onboard with Contractual?",
          content:
            "Onboarding typically takes less than 15 minutes with guided steps.",
        },
        {
          label: "Is there a trial available?",
          content: "Yes, we offer a 14-day free trial with full features.",
        },
        {
          label: "Can we integrate our current tools and processes?",
          content:
            "Absolutely. Our platform supports integrations with major tools via API and native connectors.",
        },
      ].map((item, index) => {
        const panelId = `panel${index + 1}`;
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            sx={{ width: "100%" }}
          >
            <AccordionSummary isExpanded={expanded === panelId}>
              <Typography variant="h5">{item.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
