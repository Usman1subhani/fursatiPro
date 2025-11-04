"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { Search, AutoAwesome, Summarize, Notifications } from "@mui/icons-material";
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import ElectricBoltSharpIcon from '@mui/icons-material/ElectricBoltSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const features = [
        {
            icon: <Search sx={{ fontSize: 32 }} />, 
            description: "From top Saudi and global employers.",
        },
        {
            icon: <ArticleSharpIcon sx={{ fontSize: 32 }} />, 
            description: "AI suggests jobs that truly fit your career goals.",
        },
        {
            icon: <ElectricBoltSharpIcon sx={{ fontSize: 32 }} />, 
            description:
                "Skip reading long job posts. Get short AI-generated summaries that highlight only what matters.",
        },
        {
            icon: <NotificationsNoneSharpIcon sx={{ fontSize: 32 }} />,
            title: "Get new job matches updates",
            description:
                "Get new job matches updates via WhatsApp or Email in Arabic and English.",
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                background: "linear-gradient(to bottom, #F4FCFDFF, #FFFFFF)",
                position: "relative",
            }}
        >
            <Container maxWidth="lg">
                {/* ✅ Centered Floating Badge */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "white",
                            color: "#25DCE0",
                            px: 3,
                            py: 1,
                            borderRadius: "50px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            boxShadow: "0px 18px 55px 0px rgba(30, 220, 224, 0.4)",
                            textAlign: "center",
                        }}
                    >
                        Why Choose Us?
                    </Box>
                </Box>

                {/* Heading + Paragraph */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 6, md: 10 },
                        maxWidth: "800px",
                        mx: "auto",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            fontWeight: 700,
                            color: "black",
                            mb: 2,
                        }}
                    >
                        Why Choose Fursati Pro Job Finder?
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6B7280",
                            fontSize: "1rem",
                            lineHeight: 1.7,
                            maxWidth: "650px",
                            mx: "auto",
                        }}
                    >
                        We make job searching smarter, faster, and easier so you can focus on
                        getting hired, not hunting for openings.
                    </Typography>
                </Box>

                {/* ✅ 4 Boxes in a Single Row */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                    sx={{
                        display: "flex",
                        // flexWrap: "wrap",
                        // justifyContent: "center",
                    }}
                >
                    {features.map((feature, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={1}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                            {...({} as any)}>
                            <Card
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                sx={{
                                    width: "100%",
                                    // height: "100%",
                                    maxHeight: 160,
                                    maxWidth: 200,
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: "16px",
                                    transition: "all 0.3s ease",
                                    backgroundColor: "white",
                                    boxShadow:
                                        hoveredCard === index
                                            ? "0 10px 20px rgba(37, 220, 224, 0.25)"
                                            : "1px 2px 1px rgba(0,0,0,0.08)",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            // mx: "auto",
                                            ml: 0,
                                            mb: 2,
                                            backgroundColor:
                                                hoveredCard === index ? "#25DCE0" : "#EEFEFE",
                                            color: hoveredCard === index ? "white" : "#25DCE0",
                                            transition: "all 0.4s ease",
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>

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
            </Container>
        </Box>
    );
}
