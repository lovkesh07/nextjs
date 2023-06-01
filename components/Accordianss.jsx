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

export default function Accordianss() {
  const [expanded, setExpanded] = React.useState("panel1");
 const [List1, setList1] = useState([
    {
      title: "Digital Experience",
      rootlink:"/services/digitalexperience",
      module: [
        {
          name: "Product Strategy & Consulting",
          link: "/services/digitalexperience/productstrategy",
        },
        {
          name: "Product Design",
          link: "/services/digitalexperience/productdesign",
        },
        {
          name: "Product Management",
          link: "/services/digitalexperience/productmanagement",
        },
      ],
    },
    {
      title: "Industries",
      rootlink:"/service/digitalexperience",
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
      rootlink:"/service/digitalexperience",
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
      rootlink:"/service/digitalexperience",
      module: [
        {
          name: "Life At Kellton",
          link: "/careers/lifehere",
        },
        {
          name: "Jobs",
          link: "/careers/jobs",
        },
      ],
    },
  ]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      className="bg-[rgba(16,44,81,255)]"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(16,44,81,255)",
      }}
    >
      {List1.map((item, index) => (
        <Accordion
          className=" text-xs w-full"
          style={{ backgroundColor: "rgba(16,44,81,255)", color: "white" }}
          expanded={expanded === "panel" + (index + 1)}
          onChange={handleChange("panel" + (index + 1))}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className=" w-full ">
              <Link href={item.rootlink} className=" w-full text-xs text-center">{item.title}</Link>
            </div>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "white", color: "rgba(16,44,81,255)" }}
          >
            {item.module?.map((info, i) => {
              return (
                <div className=" w-full border-b-[1px] border-solid border-black">
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
