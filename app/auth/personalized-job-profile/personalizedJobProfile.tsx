"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {useRouter } from "next/navigation";
export default function PersonalizedJobProfile() {
   const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {/* LEFT SIDE — Form Section (60%) */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          
          px: { xs: 4, sm: 8, md: 12 },
            py: { xs: 6, md: 6 },
          
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400, mx: "auto", textAlign: "center" }}>
          {/* Logo */}
          <Box sx={{ textAlign: "center"}}>
            <Box
              component="img"
              src="/logos/Fursati_Logo.svg"
              alt="FursatiPro Logo"
              sx={{ width: 150}}
            />
            {/* Title */}
            <Box sx={{ width: "100%", maxWidth: 650 }}>
            <Typography variant="h5" fontWeight={600} sx={{mb:'5px',fontSize:{xs:'20px',sm:'24px',md:'28px' }}} color="black">Build Your Personalized Job Profile</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.5 }}>
              Help us understand your preferences to deliver tailored job recommendations that match your career goals.
            </Typography>
            <Button onClick={() => router.push("/auth/create-account-instantly")} sx={{backgroundImage:'linear-gradient(to right, rgba(5, 110, 202, 1), rgba(8, 58, 103, 1))',color:'white',padding:'8px 16px 8px 16px',borderRadius:'70px',fontSize:{xs:'10px',sm:'12px',md:'14px',width:'100%'}}}>Continue</Button>
            <Button  sx={{color:'black',padding:'8px 16px 8px 16px',borderRadius:'70px',fontSize:{xs:'10px',sm:'12px',md:'14px',width:'100%'}}}>Skip</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE — Image Section (40%) */}
      <Box
        sx={{
          width: "40%",
          display: { xs: "none", md: "block" },
          background: "white",
          overflow: "hidden",
        }}
      >
        <img
          src="/authPhotos/personalizedjobprofile.svg"
          alt="Login Visual"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}
