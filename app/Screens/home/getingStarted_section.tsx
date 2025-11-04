"use client";

import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";

export default function GettingStartedSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const features = [
        {
            icon: <PersonAddAltOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Create Your Profile",
            description:
                "Register and upload your CV. Tell us about your skills and preferences.",
        },
        {
            icon: <ZoomInOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Get Matched Instantly",
            description:
                "Our AI analyzes your profile and finds the best job opportunities for you.",
        },
        {
            icon: <ZoomInOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Apply & Stay Updated",
            description:
                "Receive personalized job alerts and progress updates via Email or WhatsApp.",
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                overflow: "hidden",
                py: { xs: 8, md: 10 },
                background: "linear-gradient(to bottom, #FFFFFFFF, #FDFDFD)",
            }}
        >
            {/* ✅ Image on Right Corner */}
            <Box
                component="img"
                src="/profile/person.png"
                alt="Smiling person"
                sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    height: { md: "90%", lg: "100%" },
                    maxHeight: { md: 580, lg: 550 },
                    objectFit: "contain",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                    pointerEvents: "none",
                }}
            />

            {/* ✅ Centered Content */}
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    // zIndex: 2,
                    textAlign: "center",
                    pr: { md: "25%", lg: "20%", xl: "15%", xxl: "10%" }, // ✅ adds padding-right to keep cards away from the image
                }}
            >
                {/* Badge */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            color: "#056ECA",
                            px: 3,
                            py: 1,
                            borderRadius: "50px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            boxShadow: "0px 18px 55px 0px rgba(90, 120, 224, 0.2)",
                        }}
                    >
                        How it Works?
                    </Box>
                </Box>

                {/* Heading + Paragraph */}
                <Box
                    sx={{
                        mb: { xs: 3, md: 5 },
                        maxWidth: "800px",
                        mx: "auto",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "2rem" },
                            fontWeight: 600,
                            color: "black",
                            mb: 1,
                        }}
                    >
                        Getting Started is Easy.
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6B7280",
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            lineHeight: 1.5,
                            mx: "auto",
                            maxWidth: "600px",
                        }}
                    >
                        Our AI-powered job engine takes the hassle out of job hunting. From
                        setting up your profile to landing interviews, everything happens
                        seamlessly in just a few steps.
                    </Typography>
                </Box>

                {/* ✅ Feature Cards (Balanced on all screens) */}
                <Grid
                    container
                    spacing={{ xs: 4, md: 6 }}
                    justifyContent="center"
                    alignItems="stretch"
                    sx={{ mb: { xs: 3, md: 4 } }}
                >
                    {features.map((feature, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            sx={{ display: "flex", justifyContent: "center" }}
                            {...({}) as any}
                        >
                            <Card
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                sx={{
                                    maxWidth: 200,
                                    maxHeight: 180,
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: "16px",
                                    transition: "all 0.3s ease",
                                    backgroundColor:
                                        hoveredCard === index ? "#F3F9FFFF" : "white",
                                    boxShadow:
                                        hoveredCard === index
                                            ? "0 8px 20px rgba(5, 110, 202, 0.15)"
                                            : "0 2px 8px rgba(0,0,0,0.05)",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mx: "auto",
                                            mb: 2,
                                            backgroundColor:
                                                hoveredCard === index ? "#056ECA" : "#056ECA11",
                                            color: hoveredCard === index ? "white" : "#056ECA",
                                            transition: "all 0.4s ease",
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            color: "black",
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#6B7280",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* ✅ Button */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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
