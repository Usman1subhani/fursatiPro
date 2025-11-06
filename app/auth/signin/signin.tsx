"use client";

import React, { useState } from "react";
import {
    Box,
    Grid,
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
import { Visibility, VisibilityOff, Google, Apple, Facebook } from "@mui/icons-material";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Grid container sx={{ minHeight: "100vh" }}>
            {/* Left side - Form */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "white",
                    px: { xs: 4, sm: 6, md: 12, lg: 30 },
                    py: { xs: 6, md: 0 },
                }}
                {...({}) as any}
            >
                <Box sx={{ width: "100%", maxWidth: 400 }}>
                    {/* Logo */}
                    <Box sx={{ textAlign: "center", }}>
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
                        sx={{
                            color: "text.primary",
                            mb: { xs: 2, md: 1 },
                        }}
                    >
                        Welcome Back
                    </Typography>
                    {/* Email */}
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 500,
                            mb: 0.5,
                            color: "text.primary",
                        }}
                    >
                        Email Address
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your email"
                        variant="outlined"
                        sx={{
                            mb: 1,
                            width: "100%",
                        }}
                    />

                    {/* Password */}
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 500,
                            mb: 0.5,
                            color: "text.primary",
                        }}
                    >
                        Password
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{
                            // mb: 1,
                            width: "100%",
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
                            href="#"
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

                    {/* sigin Button */}
                    <Button
                        className="bg-primary-gradient text-white rounded-full px-6 py-2 hover:opacity-90 transition"
                        variant="contained"
                        sx={{
                            borderRadius: "50px",
                            px: { xs: 4, md: 23 },
                            py: { xs: 1.25, md: 1.5 },
                            mb: 1.5,
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
                        Signin
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
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            // gap: 30,
                            mb: 1.2,
                        }}
                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            gap={3}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    minWidth: 50,
                                    width: 80,
                                    height: 45,
                                    borderRadius: "8px",
                                    border: "1px solid #A0A0A0FF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 0,
                                }}
                            >
                                <img src="/Companies/google-G.svg" alt="Google" width={24} height={24} />
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    minWidth: 50,
                                    width: 80,
                                    height: 45,
                                    borderRadius: "8px",
                                    border: "1px solid #A0A0A0FF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 0,
                                }}
                            >
                                <img src="/companies/microsoft-logo.svg" alt="Facebook" width={24} height={24} />
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    minWidth: 50,
                                    width: 80,
                                    height: 45,
                                    borderRadius: "8px",
                                    border: "1px solid #A0A0A0FF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 0,
                                }}
                            >
                                <img src="/companies/apple.svg" alt="Apple" width={24} height={24} />
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
                        <Link href="#" sx={{ fontWeight: 600 }}>
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </Grid>

            {/* Right side - Image */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: { xs: "none", md: "block" },
                    backgroundImage: "url('/authPhotos/signin.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    bgcolor: "#fff",
                    height: "100vh", // 👈 or any fixed height
                }}
                {...({}) as any}
            />

        </Grid>
    );
}
