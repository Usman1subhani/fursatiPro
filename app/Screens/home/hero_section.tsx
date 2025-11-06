"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Chip,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function HeroSection() {
  /* ------------------------------------------------------------------ */
  /* 1. Combined corner images with company logos                      */
  /* ------------------------------------------------------------------ */
  const cornerItems = [
    {
      cornerImage: "image1.png",
      companyLogo: "logo4.svg",
      position: {
        top: 50,
        left: 70,
        "@media (max-width:1200px)": { top: 50, left: 90 },
        "@media (max-width:900px)": { top: 20, left: 25 },
        "@media (max-width:600px)": { top: 5, left: 15 },
      },
      logoPosition: { bottom: -20, right: 1 }, // 👈 top-left image → logo at top-right
    },
    {
      cornerImage: "image2.png",
      companyLogo: "logo2.png",
      position: {
        top: 20,
        right: 60,
        "@media (max-width:1200px)": { top: 60, right: 80 },
        "@media (max-width:900px)": { top: 10, right: 25 },
        "@media (max-width:600px)": { top: 5, right: 15 },
      },
      logoPosition: { bottom: -20, left: 15 }, // 👈 top-right image → logo at bottom-left
    },
    {
      cornerImage: "image3.png",
      companyLogo: "logo3.png",
      position: {
        bottom: 50,
        left: 110,
        "@media (max-width:1200px)": { bottom: 115, left: 90 },
        "@media (max-width:900px)": { bottom: 85, left: 15 },
        "@media (max-width:600px)": { bottom: 5, left: 15 },
      },
      logoPosition: { top: 50, right: -20 }, // 👈 bottom-left image → logo at top-right
    },
    {
      cornerImage: "image4.jpg",
      companyLogo: "logo1.png",
      position: {
        bottom: 60,
        right: 0,
        "@media (max-width:1200px)": { bottom: 120, right: 40 },
        "@media (max-width:900px)": { bottom: 110, right: 15 },
        "@media (max-width:600px)": { bottom: 5, right: 15 },
      },
      logoPosition: { top: 120, left: -15 }, // 👈 bottom-right image → logo at top-left
    },
  ];



  /* ------------------------------------------------------------------ */
  /* 2. Success avatars                                                */
  /* ------------------------------------------------------------------ */
  const successImages = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.jpg",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        background: `
          linear-gradient(135deg, #EEFDFE  0%, #ffffff 80%) bottom left / 40% 60% no-repeat,
          #ffffff
        `,
        overflow: "hidden",
        pt: { xs: 0, md: 2, lg: 2 },
      }}
    >

      {/* ---------- MAIN CONTENT ---------- */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* ---------- COMBINED CORNER ITEMS (Image + Company Logo) ---------- */}
        {cornerItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: { xs: 80, sm: 100, md: 140, lg: 150 },
              height: { xs: 80, sm: 100, md: 140, lg: 160 },
              borderRadius: "20px",
              overflow: "visible",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              backgroundColor: "#f5f5f5",
              display: { xs: "none", sm: "block" },
              zIndex: 1,
              ...item.position,
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={`/hero_section/${item.cornerImage}`}
              alt={`Corner ${index + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />

            {/* Logo Bubble */}
            <Box
              sx={{
                position: "absolute",
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                padding: "4px",
                border: "3px solid white",
                zIndex: 2,
                ...item.logoPosition, // 👈 unique per-corner
              }}
            >
              <Box
                component="img"
                src={`/hero_section/companies-logo/${item.companyLogo}`}
                alt={`Company ${index + 1}`}
                sx={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        ))}


        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "960px",
            minHeight: { xs: "auto"},
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            py: { xs: 4, md: 0 },
          }}
        >
          {/* Star Badge */}
          <Chip
            label="🌟 No.1 tool for smarter job Hunting"
            sx={{
              backgroundColor: "white",
              color: "black",
              py: 2,
              px: 3.5,
              mb: 2,
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(5, 110, 202, 0.4)",
            }}
          />

          {/* Heading */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "750",
              fontSize: { 
                xs: "1.8rem", sm: "1.5rem", md: "2rem", lg: "2.3rem" 
              },
              lineHeight: 1.2,
              mb: 3,
              color: "#1a202c",
            }}
          >
            Find your next <br /> opportunities in{" "}
            <Box component="span" sx={{ color: "#056ECA" }}>
              Saudi Arabia faster, <br />
              smarter
            </Box>{" "}
            and{" "}
            <Box component="span" sx={{ color: "#056ECA" }}>
              fit
            </Box>{" "}
            for you
          </Typography>

          {/* Sub-heading */}
          <Typography
            variant="h6"
            sx={{
              color: "#64748b",
              fontSize: { xs: "0.9rem", md: "0.8rem", lg: "0.9rem" },
              lineHeight: 1.3,
              mb: 3,
              maxWidth: "649px",
            }}
          >
            Stop scrolling through endless listings – our AI finds, filters and delivers
            <br />the best opportunities for you every day.
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "550px", lg: "800px" },
              mx: "auto",
              mb: 4,
              p: { xs: 2, md: 0.1 },
              backgroundColor: "white",
              borderRadius: "50px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 5 }}
              alignItems="stretch"
            >
              {/* Job title / keyword */}
              <TextField
                placeholder="Job title, Keyword..."
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#056ECA" }} />
                    </InputAdornment>
                  ),
                  sx: { border: "none" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: { xs: "50px", md: "50px 0 0 50px" },
                    "& fieldset": { border: "none" },
                  },
                }}
              />
              {/* City / region */}
              <TextField
                placeholder="City or Region (e.g., Riyadh, Jeddah)"
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FmdGoodOutlinedIcon sx={{ color: "#056ECA" }} />
                    </InputAdornment>
                  ),
                  sx: { border: "none" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: { xs: "50px", md: "0" },
                    "& fieldset": { border: "none" },
                  },
                }}
              />
              {/* Search button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "100%", md: "auto" },
                }}
              >
                <Button
                  className="bg-primary-gradient text-white hover:opacity-90 transition "
                  variant="contained"
                  sx={{
                    height: "40px",
                    borderRadius: "50px",
                    display: "flex",
                    left: -4,
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "60px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <SearchIcon />
                </Button>
              </Box>
            </Stack>
          </Box>

          {/* Popular Jobs */}
          <Box
            sx={{
              mb: 2,
              maxWidth: { xs: "100%", md: "500px", lg: "706px" },
              mx: "auto",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                rowGap: 1.5,
              }}
            >
              <Typography variant="body1"
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}>
                Popular Jobs:
              </Typography>
              {[
                "Designer",
                "Web Developer",
                "Ai Engineer",
                "SQA",
                "Software Engineer",
              ].map((job) => (
                <Chip
                  key={job}
                  label={job}
                  variant="outlined"
                  sx={{
                    borderColor: "grey",
                    color: "black",
                    fontSize: "0.734rem",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#056ECA",
                      color: "white",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Success Stories */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 0.9,
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {successImages.map((src, i) => (
                <Box
                  key={`success-${i}`}
                  component="img"
                  src={`/hero_section/${src}`}
                  alt={`Success ${i + 1}`}
                  sx={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    marginLeft: i > 0 ? "-8px" : 0,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "0.9rem", md: "0.7rem" }, color: "black" }}
            >
              Over{" "}
              <Box component="span" sx={{ color: "#056ECA" }}>
                999+
              </Box>{" "}
              Bazenbar are successfully hired
            </Typography>
          </Box>

          {/* Join for Free */}
          <Button
            className="bg-primary-gradient text-white rounded-full px-6 py-2 hover:opacity-90 transition"
            variant="contained"
            endIcon={<EastIcon fontSize="large" />}
            sx={{
              borderRadius: "50px",
              px: { xs: 4, md: 6 },
              py: { xs: 1.25, md: 1.5 },
              fontSize: "0.9rem",
              color: "white",
              textTransform: "none",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Join for Free
          </Button>
        </Box>
      </Container>
    </Box>
  );
}