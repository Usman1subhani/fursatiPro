"use client";

import React from "react";
import {
    Box,
    Typography,
    Button,
    Link,
    TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function VerifyAccount() {
    const router = useRouter();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
            }}
        >
            {/* LEFT SIDE */}
            <Box
                sx={{
                    flex: { xs: "1 1 auto", md: "0 0 50%" },
                    bgcolor: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: { xs: 3, sm: 6, md: 10 },
                    py: { xs: 4, md: 6 },
                    overflowY: "auto",
                }}
            >
                <Box sx={{ width: "100%", maxWidth: 360, textAlign: "center" }}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src="/logos/Fursati_Logo.svg"
                        alt="FursatiPro Logo"
                        sx={{ width: 150, mb: 1 }}
                    />

                    {/* Heading */}
                    <Typography variant="h5" fontWeight={700} mb={1.5} color="black">
                        Verify Your Account
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 4, lineHeight: 1.5 }}
                    >
                        Almost done! Verify your email or phone number to activate your
                        account and start receiving personalized job matches.
                    </Typography>

                    {/* OTP Input Fields */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            mb: 3,
                        }}
                    >
                        {[1, 2, 3, 4].map((num) => (
                            <TextField
                                key={num}
                                inputProps={{
                                    maxLength: 1,
                                    style: {
                                        textAlign: "center",
                                        fontSize: "1.2rem",
                                        fontWeight: "600",
                                    },
                                }}
                                sx={{
                                    width: 50,
                                    "& .MuiInputBase-root": {
                                        borderRadius: "8px",
                                        height: 56,
                                    },
                                }}
                                variant="outlined"
                            />
                        ))}
                    </Box>

                    {/* Timer text */}
                    <Typography
                        variant="body2"
                        sx={{ color: "#6B7280", mb: 3 }}
                    >
                        Your code will expire in <b>4:59</b>
                    </Typography>

                    {/* Verify Button */}
                    <Button
                        onClick={() => router.push("/auth/personalized-job-profile")}
                        fullWidth
                        variant="contained"
                        sx={{
                            borderRadius: "50px",
                            py: 1.4,
                            fontSize: "0.95rem",
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
                            mb: 2,
                        }}
                    >
                        Verify
                    </Button>

                    {/* Resend Link */}
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        Didn’t receive the code?{" "}
                        <Link href="#" underline="hover" sx={{ fontWeight: 600 }}>
                            Resend
                        </Link>
                    </Typography>
                </Box>
            </Box>

            {/* RIGHT SIDE */}
            <Box
                sx={{
                    flex: { xs: "1 1 auto", md: "0 0 40%" },
                    display: { xs: "none", md: "block" },
                    height: "100%",
                    bgcolor: "white",
                }}
            >
                <img
                    src="/authPhotos/otp.svg"
                    alt="Verify Account Visual"
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
