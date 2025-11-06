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

export default function ForgotPassword() {
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
                            sx={{ width: 220, mb:-1 }}
                        />
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        textAlign="center"
                        sx={{ color: "text.primary", mb: { xs: 2, md: 1 } }}
                    >
                        Forgot Your Password
                    </Typography>

                    {/* Title */}
                    <Typography
                        variant="subtitle2"
                        // fontWeight={600}
                        textAlign="center"
                        fontSize={12}
                        sx={{ color: "grey", mb: { xs: 2, md: 1 } }}
                    >
                        Enter the email address associated with your account and we'll send you a link to reset your password.
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
                        sx={{ mb: 4 }}
                    />



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
                        Send Link
                    </Button>

                    {/* Signup Link */}
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{ color: "text.secondary" }}
                    >
                        Remeber Login?{" "}
                        <Link href="/auth/sign-in" sx={{ fontWeight: 600 }}>
                            Login
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
                    src="/authPhotos/forgot.svg "
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
