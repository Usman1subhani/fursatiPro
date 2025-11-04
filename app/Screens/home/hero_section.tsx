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
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function HeroSection() {
  /* ------------------------------------------------------------------ */
  /* 1. Corner background images + positions                            */
  /* ------------------------------------------------------------------ */
  const cornerImages = ["image1.png", "image2.png", "image3.png", "image4.jpg"];
 const cornerPositions = [
  { top: 20, left: 60 },       // Top-left
  { top: 20, right: 60 },      // Top-right
  { bottom: 20, left: 60 },    // Bottom-left
  { bottom: 20, right: 60 },   // Bottom-right
];


  /* ------------------------------------------------------------------ */
  /* 2. Company logos + individual positions (same format as corners)   */
  /* ------------------------------------------------------------------ */
  const companyLogos = ["logo4.svg", "logo2.png", "logo3.png", "logo1.png"];
const companyPositions = [
  { top: "25%", left: "7%" },      // Top-left corner of container
  { top: "25%", right: "7%" },     // Top-right
  { bottom: "8%", left: "8%" },   // Bottom-left
  { bottom: "8%", right: "8%" },  // Bottom-right
];


  /* ------------------------------------------------------------------ */
  /* 3. Success avatars – reuse images (testing)                        */
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
  
        background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
        overflow: "hidden",
        pt: { xs: 0, md: 2 , lg: 2}, // Add padding top for mobile to account for fixed navbar
      }}
    >
      {/* Bottom-left decorative frame (behind content) */}
      <Box
        component="img"
        src="/profile/Frame2.png"
        alt="decorative-frame-2"
        sx={{
          position: "absolute",
          bottom: { xs: -20, md: -60 },
          left: { xs: -20, md: -80 },
          width: { xs: 120, md: 320 },
          height: "auto",
          zIndex: 0,
          pointerEvents: "none",
          display: { xs: "none", sm: "block" },
        }}
      />
     

    

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
         {/* ---------- 1. CORNER IMAGES ---------- */}
      {cornerImages.map((src, i) => (
        <Box
          key={`corner-${i}`}
          sx={{
            position: "absolute",
            width: { xs: 80, sm: 100, md: 140, lg: 180 },
            height: { xs: 80, sm: 100, md: 140, lg: 180 },
            display: { xs: "none", sm: "block" }, // Hide on very small screens
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            backgroundColor: "#f5f5f5",
            ...cornerPositions[i],
          }}
        >
          <Box
            component="img"
            src={`/hero_section/${src}`}
            alt={`Corner ${i + 1}`}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      ))}
 
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "960px", // responsive width instead of fixed width
            minHeight: { xs: "auto" }, // allow height to adjust based on content
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            py: { xs: 4, md: 0 },
          }}
        >
             {/* ---------- 2. FLOATING COMPANY LOGOS (WITH POSITIONING) ---------- */}
      {companyLogos.map((logo, i) => (
        <Box
          key={`logo-${i}`}
          sx={{
            position: "absolute",
            width: 50,
            height: 50,
            display: { xs: "none", sm: "flex" , md: "flex", lg: "flex"}, // Hide on very small screens
            borderRadius: "50%",
            backgroundColor: "white",
           
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            padding: "4px",
            zIndex: 2,
            ...companyPositions[i], // Apply individual position
          }}
        >
          <Box
            component="img"
            src={`/hero_section/companies-logo/${logo}`}
            alt={`Company ${i + 1}`}
            sx={{
              width: "40px",
              height: "40px",
              objectFit: "contain",
            }}
          />
        </Box>
      ))}
          {/* Star Badge */}
          <Chip
            label="🌟 No.1 tool for smarter job Hunting"
            sx={{
              backgroundColor: "white",
              color: "black",
              py: 2.5,
              px: 2,
              mb: 3,
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(5, 110, 202, 0.4)",
            }}
          />

          {/* Heading */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "40px", lg: "40px" },
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
              fontSize: { xs: "1rem", md: "0.85rem", lg: "1rem" },
              lineHeight: 1.6,
              mb: 5,
              maxWidth: "649px",
            }}
          >
            Stop scrolling through endless listings – our AI finds, filters and
            delivers the best opportunities for you every day.
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,

              maxWidth: { xs: "100%", md: "700px", lg: "957px" },
              mb: 3,
              backgroundColor: "white",
              borderRadius: "50px",
              p: { xs: "20px", md: "15" , lg: "6px"},
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <TextField
              placeholder="Job title, Keyword..."
              fullWidth
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: "#056ECA", mr: 1 }} />,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  border: "none",
                  "& fieldset": { border: "none" },
                },
              }}
            />
            <TextField
              placeholder="City or Region (e.g., Riyadh, Jeddah)"
              fullWidth
              InputProps={{
                startAdornment: (
                  <FmdGoodOutlinedIcon sx={{ color: "#056ECA", mr: 1 }} />
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  border: "none",
                  "& fieldset": { border: "none" },
                },
              }}
            />
            <Button
              className="bg-primary-gradient text-white rounded-full px-6 py-2 hover:opacity-90 transition"
              variant="contained"
              sx={{
                borderRadius: "50px",
                minWidth: "90px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <SearchIcon />
            </Button>
          </Box>

          {/* Popular Jobs */}
          <Box
            sx={{
              mb: 6,
              maxWidth: { xs: "100%", md: "700px", lg: "706px" },
              height: "32px",
            }}
          >
            <Stack
              direction="row"
              spacing={0.6}
              sx={{ flexWrap: "wrap", justifyContent: "center", gap: 1 }}
            >
              <Typography variant="h6" sx={{ color: "black" }}>
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

          {/* ---------- 3. SUCCESS STORIES ---------- */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    marginLeft: i > 0 ? "-8px" : 0,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "0.9rem", md: "0.9rem" }, color: "black" }}
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
              // bgcolor: "#056ECA",
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
