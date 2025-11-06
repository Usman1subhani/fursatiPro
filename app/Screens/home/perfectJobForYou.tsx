"use client";

import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
export default function PerfectJobForYou() {
  const [active, setActive] = useState("popular");
  const popularJobs = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "6th road,rawalpindi",
      remainingdays: 12,
      companyLogo: "/hero_section/companies-logo/companylogo1.svg",
      countrylogo: "/hero_section/companies-logo/countrylogo.svg",
    },
    {
      title: "UI/UX Designer",
      type: "Part-time",
      location: "Gulshan-e-Iqbal, Lahore",
      remainingdays: 8,
      companyLogo: "/hero_section/companies-logo/companylogo1.svg",
      countrylogo: "/hero_section/companies-logo/countrylogo.svg",
    },
  ];

  const latestJobs = [
    {
      title: "Backend Engineer",
      type: "Full-time",
      location: "Qasimabad, Karachi",
      remainingdays: 12,
      companyLogo: "/hero_section/companies-logo/companylogo1.svg",
      countrylogo: "/hero_section/companies-logo/countrylogo.svg",
    },
    {
      title: "Product Manager",
      type: "Part-time",
      location: "G-9,Islamabad",
      remainingdays: 8,
      companyLogo: "/hero_section/companies-logo/companylogo1.svg",
      countrylogo: "/hero_section/companies-logo/countrylogo.svg",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 5 },
        background: "linear-gradient(to bottom, #F4FCFDFF, #FFFFFF)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            textAlign: "center",
            py: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "rgba(37, 220, 224, 0.02)",
                color: "#25DCE0",
                padding: "12px 26px 12px 26px",

                borderRadius: "100px",
                fontSize: "0.875rem",
                dropShadow: "0 2px 6px rgba(37, 220, 224, 0.35)",
                fontWeight: 600,
                boxShadow: "0 2px 6px rgba(30, 220, 224, 0.3)",
                textAlign: "center",
              }}
            >
              Job Vacancies
            </Box>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2rem", md: "48px" },
              fontWeight: 600,
              color: "black",
              mb: 2,
            }}
          >
            The Perfect Job For You?
          </Typography>

          <Typography
            sx={{
              color: "#6B7280",
              fontSize: { xs: "0.8rem", md: "20px" },
              lineHeight: 1.5,
              mx: "auto",
              maxWidth: "800px",
            }}
          >
            Our AI-powered job engine takes the hassle out of job hunting. From
            setting up your profile to landing interviews everything happens
            seamlessly in just a few steps.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
              mt: 3,
              border: "1px solid #ccc",
              borderRadius: "37px",
              boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)",
              position: "relative",
              padding: "2px 3px",
              width: "100%",
              maxWidth: { xs: "280px", md: "450px" },
              mx: "auto",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 3,
                bottom: 3,
                left: 3,
                width: "calc(50% - 4px)",
                borderRadius: "30px",
                background:
                  "linear-gradient(90deg, rgba(5,110,202,1) 0%, rgba(8,58,103,1) 100%)",
                transition: "transform 0.35s ease",
                transform:
                  active === "latest" ? "translateX(100%)" : "translateX(0%)",
                zIndex: 1,
              }}
            />
            <Box
              onClick={() => setActive("popular")}
              sx={{
                flex: 1,
                cursor: "pointer",
                py: { xs: 1.2, sm: 1.5 },
                fontWeight: 600,
                textAlign: "center",
                zIndex: 2,
                color: active === "popular" ? "#ffffff" : "rgba(5,110,202,1)",
                transition: "color 0.3s",
              }}
            >
              Popular
            </Box>
            <Box
              onClick={() => setActive("latest")}
              sx={{
                flex: 1,
                cursor: "pointer",
                py: { xs: 1.2, sm: 1.5 },
                fontWeight: 600,
                textAlign: "center",
                zIndex: 2,
                color: active === "latest" ? "#ffffff" : "rgba(5,110,202,1)",
                transition: "color 0.3s",
              }}
            >
              Latest
            </Box>
          </Box>
          <Box
            sx={{
              mt: 4,
              maxWidth: "1200px",
              width: "100%",
              paddingLeft: { xs: "10px", md: "24px" },
              paddingRight: { xs: "10px", md: "24px" },
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              boxSizing: "border-box",
            }}
          >
            {(active === "popular" ? popularJobs : latestJobs).map(
              (job, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    maxWidth: "100%",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: { xs: "8px", sm: "5px", md: "24px" },
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: { xs: 1, md: 2.5 },
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    textAlign: "left",
                    overflow: "hidden",
                    "&:hover": {
                      cursor: "pointer",

                      "& .apply-button": {
                        background:
                          "linear-gradient(to right, rgba(5, 110, 202, 1), rgba(8, 58, 103, 1))",
                        color: "#ffffff",
                        border: "1px solid rgba(5, 110, 202, 1)",
                      },

                      "& .bookmark-button": {
                        backgroundColor: "rgba(5, 110, 202, 0.1)",
                        "& img": {
                          filter:
                            "brightness(0) saturate(100%) invert(28%) sepia(90%) saturate(2000%) hue-rotate(200deg) brightness(90%) contrast(90%)",
                        },
                      },
                    },
                  }}
                >
                  <Box sx={{ display: "flex", gap: { xs: 1, md: 2.5 } }}>
                    <Box sx={{ width: "68px", height: "68px" }}>
                      <img src={job.companyLogo} alt={"Company Logo"} />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                          width: "100%",
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: { xs: "12px", sm: "12px", md: "15px" },
                            lineHeight: 1.3,
                            wordBreak: "break-word",
                            color: "rgba(28, 28, 28, 1)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {job.title}
                        </Typography>

                        <Typography
                          sx={{
                            backgroundColor: "rgba(242, 246, 255, 1)",
                            color: "rgba(5, 110, 202, 1)",
                            padding: "4px 12px",
                            borderRadius: "50px",
                            fontSize: { xs: "12px", sm: "12px" },
                          }}
                        >
                          {job.type}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },

                          alignItems: { xs: "flex-start", md: "center" },
                          gap: "16px",
                          width: "100%",
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: { xs: "12px", sm: "12px", md: "15px" },
                            lineHeight: 1.3,
                            wordBreak: "break-word",
                            color: "rgba(28, 28, 28, 1)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textAlign: "left",
                            whiteSpace: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: { xs: "coloumn", md: "row" },
                            gap: "6px",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_385_13788)">
                              <path
                                d="M17.5 8.3335C17.5 14.1668 10 19.1668 10 19.1668C10 19.1668 2.5 14.1668 2.5 8.3335C2.5 6.34437 3.29018 4.43672 4.6967 3.03019C6.10322 1.62367 8.01088 0.833496 10 0.833496C11.9891 0.833496 13.8968 1.62367 15.3033 3.03019C16.7098 4.43672 17.5 6.34437 17.5 8.3335Z"
                                stroke="#5C5C5C"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z"
                                stroke="#5C5C5C"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_385_13788">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          {job.location}
                          <img src={job.countrylogo} alt="country logo" />
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: { xs: "12px", sm: "12px", md: "15px" },
                            lineHeight: 1.3,
                            wordBreak: "break-word",
                            color: "rgba(28, 28, 28, 1)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textAlign: "left",
                            whiteSpace: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.4375 1.375H13.2917V0.6875C13.2917 0.308 12.9837 0 12.6042 0C12.2247 0 11.9167 0.308 11.9167 0.6875V1.375H5.95833V0.6875C5.95833 0.308 5.65033 0 5.27083 0C4.89133 0 4.58333 0.308 4.58333 0.6875V1.375H3.4375C1.221 1.375 0 2.596 0 4.8125V14.4375C0 16.654 1.221 17.875 3.4375 17.875H14.4375C16.654 17.875 17.875 16.654 17.875 14.4375V4.8125C17.875 2.596 16.654 1.375 14.4375 1.375ZM3.4375 2.75H4.58333V3.4375C4.58333 3.817 4.89133 4.125 5.27083 4.125C5.65033 4.125 5.95833 3.817 5.95833 3.4375V2.75H11.9167V3.4375C11.9167 3.817 12.2247 4.125 12.6042 4.125C12.9837 4.125 13.2917 3.817 13.2917 3.4375V2.75H14.4375C15.8831 2.75 16.5 3.36692 16.5 4.8125V5.5H1.375V4.8125C1.375 3.36692 1.99192 2.75 3.4375 2.75ZM14.4375 16.5H3.4375C1.99192 16.5 1.375 15.8831 1.375 14.4375V6.875H16.5V14.4375C16.5 15.8831 15.8831 16.5 14.4375 16.5ZM6.20585 9.85417C6.20585 10.3602 5.7961 10.7708 5.28918 10.7708C4.78318 10.7708 4.36782 10.3602 4.36782 9.85417C4.36782 9.34817 4.77401 8.9375 5.28001 8.9375H5.28918C5.79518 8.9375 6.20585 9.34817 6.20585 9.85417ZM9.87252 9.85417C9.87252 10.3602 9.46277 10.7708 8.95585 10.7708C8.44985 10.7708 8.03448 10.3602 8.03448 9.85417C8.03448 9.34817 8.44068 8.9375 8.94668 8.9375H8.95585C9.46185 8.9375 9.87252 9.34817 9.87252 9.85417ZM13.5392 9.85417C13.5392 10.3602 13.1294 10.7708 12.6225 10.7708C12.1165 10.7708 11.7012 10.3602 11.7012 9.85417C11.7012 9.34817 12.1073 8.9375 12.6133 8.9375H12.6225C13.1285 8.9375 13.5392 9.34817 13.5392 9.85417ZM6.20585 13.5208C6.20585 14.0268 5.7961 14.4375 5.28918 14.4375C4.78318 14.4375 4.36782 14.0268 4.36782 13.5208C4.36782 13.0148 4.77401 12.6042 5.28001 12.6042H5.28918C5.79518 12.6042 6.20585 13.0148 6.20585 13.5208ZM9.87252 13.5208C9.87252 14.0268 9.46277 14.4375 8.95585 14.4375C8.44985 14.4375 8.03448 14.0268 8.03448 13.5208C8.03448 13.0148 8.44068 12.6042 8.94668 12.6042H8.95585C9.46185 12.6042 9.87252 13.0148 9.87252 13.5208ZM13.5392 13.5208C13.5392 14.0268 13.1294 14.4375 12.6225 14.4375C12.1165 14.4375 11.7012 14.0268 11.7012 13.5208C11.7012 13.0148 12.1073 12.6042 12.6133 12.6042H12.6225C13.1285 12.6042 13.5392 13.0148 13.5392 13.5208Z"
                              fill="#5C5C5C"
                            />
                          </svg>
                          {job.remainingdays} days Remaining
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "6px",
                      width: { xs: "100%", md: "auto" },
                      flexDirection: "row",
                      justifyContent: "end",
                      mt: { xs: 1, md: 0 },
                      minWidth: { xs: "100%", md: "200px" },
                    }}
                  >
                    <Button className="bookmark-button">
                      <img
                        src="/hero_section/companies-logo/fi_bookmark.svg"
                        alt="bookmark icon"
                        width={24}
                        height={24}
                      />
                    </Button>
                    <Button
                      variant="contained"
                      className="apply-button"
                      size="medium"
                      sx={{
                        flex: { xs: 1, md: "none" },
                        fontSize: { xs: "12px", sm: "12px" },
                        minWidth: { xs: "auto", md: "100px" },
                        whiteSpace: "nowrap",
                        color: "rgba(5, 110, 202, 1)",
                        backgroundColor: "rgba(5, 110, 202, 0.1)",
                        border: "1px solid rgba(5, 110, 202, 1)",
                        borderRadius: "33px",
                        textTransform: "none",
                        "&:hover": {
                          background:
                            "linear-gradient(to right, rgba(5, 110, 202, 1), rgba(8, 58, 103, 1))",
                          color: "#ffffff", // Important: change text color for contrast
                          border: "1px solid rgba(5, 110, 202, 1)",
                        },
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </Box>
              )
            )}
          </Box>
          <Box>
            <Button
              sx={{
                padding: "9px 34px 9px 34px",
                border: "1px solid rgba(5, 110, 202, 1)",
                borderRadius: "32px",
                mt: 4,
                textTransform: "none",
               
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 500,
                  color: "rgba(5, 110, 202, 1)",
                  textTransform: "none",
                   alignItems: "center",
                justifyContent: "center",
                display: "flex",
                gap: "8px",
                }}
              >
                View All Jobs{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16H27"
                    stroke="#056ECA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 25L27 16L18 7"
                    stroke="#056ECA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
