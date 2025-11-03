"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { Search, AutoAwesome, Summarize, Notifications } from "@mui/icons-material";

export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const features = [
        {
            icon: <Search sx={{ fontSize: 32 }} />,
            title: "Search thousands of jobs",
            description: "From top Saudi and global employers.",
        },
        {
            icon: <AutoAwesome sx={{ fontSize: 32 }} />,
            title: "AI suggestions",
            description: "AI suggests jobs that truly fit your career goals.",
        },
        {
            icon: <Summarize sx={{ fontSize: 32 }} />,
            title: "Skip reading long posts",
            description:
                "Get short AI-generated summaries that highlight only what matters.",
        },
        {
            icon: <Notifications sx={{ fontSize: 32 }} />,
            title: "Get new job matches updates",
            description:
                "Via WhatsApp or Email in Arabic and English.",
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                background: "linear-gradient(to bottom, #F9FEFF, #FFFFFF)",
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
                            boxShadow: "0 8px 25px rgba(37, 220, 224, 0.4)",
                            border: "1px solid #25DCE0",
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
                            color: "#083A67",
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
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {features.map((feature, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={3}
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
                                    maxWidth: 260,
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: "24px",
                                    transition: "all 0.3s ease",
                                    border:
                                        hoveredCard === index ? "2px solid #25DCE0" : "2px solid transparent",
                                    backgroundColor: "white",
                                    boxShadow:
                                        hoveredCard === index
                                            ? "0 25px 50px rgba(37, 220, 224, 0.25)"
                                            : "0 8px 30px rgba(0,0,0,0.08)",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <Box
                                        sx={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mx: "auto",
                                            mb: 2,
                                            backgroundColor:
                                                hoveredCard === index ? "#25DCE0" : "#EEFEFE",
                                            color: hoveredCard === index ? "white" : "#25DCE0",
                                            boxShadow:
                                                hoveredCard === index
                                                    ? "0 10px 25px rgba(37, 220, 224, 0.4)"
                                                    : "0 5px 15px rgba(37, 220, 224, 0.2)",
                                            transition: "all 0.4s ease",
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "1.05rem",
                                            fontWeight: 700,
                                            color: "#083A67",
                                            mb: 1,
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#6B7280",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.6,
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
