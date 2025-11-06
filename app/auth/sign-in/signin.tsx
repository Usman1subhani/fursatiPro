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
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* LEFT SIDE — Form Section (60%) */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 4, sm: 8, md: 12 },
          py: { xs: 6, md: 0 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Box
              component="img"
              src="/logos/Fursati_Logo.svg"
              alt="FursatiPro Logo"
              sx={{ width: 180, mb: -3 }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            fontWeight={600}
            textAlign="center"
            sx={{ color: "text.primary", mb: { xs: 2, md: 1 } }}
          >
            Welcome Back
          </Typography>

          {/* Email */}
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, mb: 0.5, color: "text.primary" }}
          >
            Email Address
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            sx={{ mb: 1 }}
          />

          {/* Password */}
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, mb: 0.5, color: "text.primary" }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember me + Forgot */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Typography variant="body2" color="text.secondary">
                  Remember me
                </Typography>
              }
            />
            <Link
              href="/auth/forgot-password"
              sx={{
                color: "red",
                fontSize: "14px",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Forgot Password?
            </Link>
          </Box>

          {/* Signin Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: "50px",
              py: 1.5,
              mb: 1.5,
              fontSize: "0.9rem",
              color: "white",
              textTransform: "none",
              background:
                "linear-gradient(90deg, #0A4D91 0%, #2F80ED 100%)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Sign in
          </Button>

          {/* Divider */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography
              variant="body2"
              sx={{ mx: 1, color: "text.secondary" }}
            >
              OR
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          {/* Social Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1.2 }}>
            <Box display="flex" justifyContent="center" alignItems="center" gap={3}>
              <Button
                variant="outlined"
                sx={{
                  width: 80,
                  height: 45,
                  borderRadius: "8px",
                  border: "1px solid #A0A0A0FF",
                  p: 0,
                }}
              >
                <img
                  src="/companies/google-G.svg"
                  alt="Google"
                  width={24}
                  height={24}
                />
              </Button>

              <Button
                variant="outlined"
                sx={{
                  width: 80,
                  height: 45,
                  borderRadius: "8px",
                  border: "1px solid #A0A0A0FF",
                  p: 0,
                }}
              >
                <img
                  src="/companies/microsoft-logo.svg"
                  alt="Microsoft"
                  width={24}
                  height={24}
                />
              </Button>

              <Button
                variant="outlined"
                sx={{
                  width: 80,
                  height: 45,
                  borderRadius: "8px",
                  border: "1px solid #A0A0A0FF",
                  p: 0,
                }}
              >
                <img
                  src="/companies/apple.svg"
                  alt="Apple"
                  width={24}
                  height={24}
                />
              </Button>
            </Box>
          </Box>

          {/* Signup Link */}
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary" }}
          >
            Don’t have an account?{" "}
            <Link href="/auth/sign-up" sx={{ fontWeight: 600 }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* RIGHT SIDE — Image Section (40%) */}
      <Box
        sx={{
          width: "40%",
          display: { xs: "none", md: "block" },
          height: "100%",
          background: "white",
          overflow: "hidden",
        }}
      >
        <img
          src="/authPhotos/signin.svg"
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
