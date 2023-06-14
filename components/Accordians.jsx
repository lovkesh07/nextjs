import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Link from "next/link";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "1rem" }}
        style={{ color: "white" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState("");
  const [List1, setList1] = useState([
    {
      title: "Services",
      module: [
        {
          name: "Cloud Computing Solutions",
          link: "/services/cloudcomputingsolutions",
        },
        {
          name: "Custom Software Development",
          link: "/services/customsoftwaredevelopment",
        },
        {
          name: "Cyber Security Services",
          link: "/services/cybersecurityservices",
        },
        {
          name: "Data Analytics & Business Intelligence",
          link: "/services/DataAnalyticsandBusinessIntelligence",
        },
        {
          name: "IT-Consulting Services",
          link: "/services/itconsultingservices",
        },
        {
          name: "IT Training and Education Services",
          link: "/services/ITTrainingandEducation",
        },
        {
          name: "IT Support and Managed Services",
          link: "/services/ITsupport&managedservices",
        },
        {
          name: "AR/VR Services",
          link: "/services/ArVrservices",
        },
      ],
    },
    {
      title: "About",
      module: [
        {
          name: "About Us",
          link: "/About/AboutUs",
        },
        {
          name: "Our Parteners",
          link: "/About/ourpartners",
        },
        {
          name: "Our Leadership",
          link: "/About/leadership",
        },
        {
          name: "Investors",
          link: "/About/investor",
        },
        {
          name: "Privacy-Policy",
          link: "/About/Privacy-Policy",
        },
        {
          name: "Contact Us",
          link: "/About/ContactUs",
        },
        {
          name: "Testimonial",
          link: "/About/Testimonials",
        },
      ],
    },
    {
      title: "Industries",
      module: [
        {
          name: "Fintech,Banking,Financial Sevices",
          link: "/industries/fbfs",
        },
        {
          name: "Retail,E-Commerce & Distribution",
          link: "/industries/recd",
        },
        {
          name: "Non-Profit,Government & Education",
          link: "/industries/npge",
        },
        {
          name: "Travel,Logistics & Hospitality",
          link: "/industries/tlh",
        },
        {
          name: "HiTech,Saas,ISV & Communications",
          link: "/industries/hsic",
        },
        {
          name: "Oil,Gas & Mining",
          link: "/industries/oag",
        },
        {
          name: "Energy & Utilities",
          link: "/industries/eau",
        },
      ],
    },
    {
      title: "Platforms & Products",
      module: [
        {
          name: "Kellton4Health",
          link: "/platformandproduct/kellton4health",
        },
        {
          name: "Kellton4NFT",
          link: "/platformandproduct/kellton4nft",
        },
        {
          name: "Kellton4Commerce",
          link: "/platformandproduct/kellton4commerce",
        },
        {
          name: "KLGAME",
          link: "/platformandproduct/klgame",
        },
        {
          name: "tHRive",
          link: "/platformandproduct/thrive",
        },
        {
          name: "Optima",
          link: "/platformandproduct/opt",
        },
      ],
    },
    {
      title: "Careers",
      module: [
        {
          name: "Career with Us",
          link: "/careers/careerwithus",
        },
      ],
    },
  ]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      className="bg-[#1A374D]"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#1A374D",
      }}
    >
      {List1.map((item, index) => (
        <Accordion
          className=" text-xs w-full"
          style={{ backgroundColor: "#1A374D", color: "white" }}
          expanded={expanded === "panel" + (index + 1)}
          onChange={handleChange("panel" + (index + 1))}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className=" w-full ">
              <h1 className=" w-full text-xs text-center">{item.title}</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "white", color: "rgba(16,44,81,255)" }}
          >
            {item.module?.map((info, i) => {
              return (
                <div className=" w-full px-2 py-3 border-b-[1px] border-solid border-black">
                  <Link href={info.link}>{info.name}</Link>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
