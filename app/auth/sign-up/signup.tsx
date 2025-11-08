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
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((show) => !show);
    const Router = useRouter();
    const steps = ["Account Setup", "Smart CV Upload", "Complete Profile"];

    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                overflow: "hidden", // ensures only left scrolls
            }}
        >
            {/* LEFT SIDE — Scrollable Form Section (60%) */}
            <Box
                sx={{
                    width: { xs: "100%", md: "60%" },
                    bgcolor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    px: { xs: 4, sm: 8, md: 12 },
                    // py: ,
                    overflowY: "auto", // <— enables vertical scroll
                    height: "100vh",
                    scrollbarWidth: "thin", // for Firefox
                    "&::-webkit-scrollbar": { width: "6px" },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#ccc",
                        borderRadius: "3px",
                    },
                }}
            >
                <Box sx={{ width: "100%", maxWidth: 400, mt: { xs: 2, md: 6 } }}>
                    {/* Logo */}
                    <Box sx={{ textAlign: "center",  }}>
                        <Box
                            component="img"
                            src="/logos/Fursati_Logo.svg"
                            alt="FursatiPro Logo"
                            sx={{ width: 150, mb: 1 }}
                        />
                    </Box>

                    {/* Stepper */}
                    <Stepper
                        activeStep={0}
                        alternativeLabel
                        sx={{
                            mb: 3,
                            "& .MuiStepLabel-label": {
                                fontSize: "0.8rem",
                                color: "text.secondary",
                            },
                        }}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
 

                    {/* Title */}
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        textAlign="center"
                        sx={{ color: "text.primary", mb: 2 }}
                    >
                        Create An Account
                    </Typography>

                    {/* Compact Fields */}
                    <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, mb: 0.5, color: "text.primary" }}
                    >
                        Full Name
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your full name"
                        variant="outlined"
                        sx={{
                            mb: 1.2,
                            "& .MuiInputBase-root": { height: 40 },
                            "& input": { padding: "8px 12px" },
                        }}
                    />

                    <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, mb: 0.5, color: "text.primary" }}
                    >
                        Email Address
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your email address"
                        variant="outlined"
                        sx={{
                            mb: 1.2,
                            "& .MuiInputBase-root": { height: 40 },
                            "& input": { padding: "8px 12px" },
                        }}
                    />

                    <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, mb: 0.5, color: "text.primary" }}
                    >
                        Password
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{
                            mb: 1.2,
                            "& .MuiInputBase-root": { height: 40 },
                            "& input": { padding: "8px 12px" },
                        }}
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

                    <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, mb: 0.5, color: "text.primary" }}
                    >
                        Confirm Password
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Re-enter password"
                        type={showConfirmPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{
                            mb: 2,
                            "& .MuiInputBase-root": { height: 40 },
                            "& input": { padding: "8px 12px" },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowConfirmPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* SignUp Button */}
                    <Button
                        onClick={() => Router.push("/auth/otp")}
                        variant="contained"
                        fullWidth
                        sx={{
                            borderRadius: "50px",
                            py: 1.5,
                            mb: 2,
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
                        Sign Up
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
                   
                             <Button
                                            variant="outlined"
                                            sx={{
                                              width: "100%",
                            
                                              height: 45,
                                              borderRadius: "8px",
                                              border: "1px solid #A0A0A0FF",
                                              marginBottom: "5px",
                                                             }}
                                          >
                                            <img
                                              src="/companies/google-G.svg"
                                              alt="Google"
                                              width={24}
                                              height={24}
                                            />
                                          </Button>
                       

                    {/* Login Link */}
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ color: "text.secondary", mb: 4 }}
                    >
                        Already have an account?{" "}
                        <Link href="/auth/sign-in" sx={{ fontWeight: 600 }}>
                            Log in
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
                    overflow: "hidden",
                    bgcolor: "white",
                }}
            >
                <img
                    src="/authPhotos/signup.svg"
                    alt="Sign Up Visual"
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
