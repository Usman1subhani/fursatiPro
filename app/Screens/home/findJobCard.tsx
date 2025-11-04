"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FindJobsCardSection() {
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                justifyContent: "center",
                py: { xs: 6, md: 10 },
                backgroundColor: "#fff",
            }}
        >
            <Container maxWidth={false} sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        background: "linear-gradient(to left, #003276, #005DDC)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        p: { xs: 5, md: 8 },
                        textAlign: "center",
                        color: "white",
                        mx: "auto", // Ensures it stays centered
                        height: { xs: 250, md: 180 }, // fixed height for consistency
                        width: { xs: 250, md: 800 }, // fixed height for consistency
                    }}
                >
                    {/* ✅ SVG Background Circles */}
                    <Box
                        component="img"
                        src="/circle.svg"
                        alt="Circles"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />

                    {/* ✅ Floating Profile Images */}
                    <Box
                        component="img"
                        src="/Testimonials/Testimonial1.svg"
                        alt="User 1"
                        sx={{
                            position: "absolute",
                            top: { xs: "8%", md: "15%" },
                            left: { xs: "5%", md: "9%" },
                            width: { xs: 35, md: 60 },
                            height: { xs: 35, md: 60 },
                            borderRadius: "50%",
                            border: "5px solid #6EABFF",
                        }}
                    />
                    <Box
                        component="img"
                        src="/Testimonials/Testimonial2.svg"
                        alt="User 2"
                        sx={{
                            position: "absolute",
                            top: { xs: "5%", md: "10%" },
                            right: { xs: "5%", md: "9%" },
                            width: { xs: 35, md: 60 },
                            height: { xs: 35, md: 60 },
                            borderRadius: "50%",
                            border: "5px solid #6EABFF",
                        }}
                    />
                    <Box
                        component="img"
                        src="/Testimonials/Testimonial3.svg"
                        alt="User 3"
                        sx={{
                            position: "absolute",
                            bottom: { xs: "3%", md: "2%" },
                            left: { xs: "10%", md: "18%" },
                            width: { xs: 25, md: 30 },
                            height: { xs: 25, md: 30 },
                            borderRadius: "50%",
                            border: "3px solid #6EABFF",
                        }}
                    />
                    <Box
                        component="img"
                        src="/Testimonials/Testimonial1.svg"
                        alt="User 4"
                        sx={{
                            position: "absolute",
                            bottom: { xs: "12%", md: "18%" },
                            right: { xs: "8%", md: "13%" },
                            width: { xs: 25, md: 35 },
                            height: { xs: 25, md: 35 },
                            borderRadius: "50%",
                            border: "3px solid #6EABFF",
                        }}
                    />

                    {/* ✅ Text Content Positioned Absolutely */}
                    {/* ✅ Text Content */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: { xs: "55%", md: "65%" },
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                            width: "100%",
                            px: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2.2rem" },
                                fontWeight: 700,
                                mb: { xs: 1, md: 1.5 },
                            }}
                        >
                            Find Jobs That Truly Fit You
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                                opacity: 0.9,
                                mb: { xs: 1.5, md: 1 },
                                maxWidth: "480px",
                                mx: "auto",
                            }}
                        >
                            Join now to explore smarter job matches, daily updates and instant applications.
                        </Typography>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                backgroundColor: "#fff",
                                color: "#005DDC",
                                fontWeight: 600,
                                textTransform: "none",
                                borderRadius: "25px",
                                px: { xs: 3, md: 4 },
                                py: { xs: 0.5, md: 0.6 },
                                fontSize: { xs: "0.75rem", md: "0.9rem" },
                                "&:hover": { backgroundColor: "#E6FAFC" },
                            }}
                        >
                            Sign Up for Free
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
