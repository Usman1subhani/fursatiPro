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

export default function HiredByTopCompanies() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const companies = [
        {
            logo: "/companies/SNB.svg", // change to your logo path
            location: "Jeddah, Saudi Arabia",
            name: "Saudi National Bank",
        },
        {
            logo: "/companies/apple.svg",
            location: "Los Angeles",
            name: "Millenniumsoft Agency",
        },
        {
            logo: "/companies/STC.svg",
            location: "Riyadh, Saudi Arabia",
            name: "STC Group",
        },
        {
            logo: "/companies/PetroRabigh.svg",
            location: "Raleigh, Saudi Arabia",
            name: "Petro Rabigh",
        },
        {
            logo: "/companies/neom.svg", // change to your logo path
            location: "Jeddah, Saudi Arabia",
            name: "Saudi National Bank",
        },
        {
            logo: "/companies/F5.svg",
            location: "Los Angeles",
            name: "Millenniumsoft Agency",
        },
        {
            logo: "/companies/alrajhiBank.svg",
            location: "Riyadh, Saudi Arabia",
            name: "STC Group",
        },
        {
            logo: "/companies/google-G.svg",
            location: "Raleigh, Saudi Arabia",
            name: "Petro Rabigh",
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 5 },
                background: "linear-gradient(to left, #EEFDFE 40%, #FFFFFF 90%)",
                position: "relative",
            }}
        >
            <Container maxWidth="lg">
                {/* ✅ Top Badge */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Box
                        sx={{
                            backgroundColor: "#EEFDFE",
                            color: "#056ECA",
                            px: 3,
                            py: 1,
                            borderRadius: "50px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            boxShadow: "0 2px 6px rgba(30, 220, 224, 0.3)",
                            textAlign: "center",
                        }}
                    >
                        Top Companies
                    </Box>
                </Box>

                {/* ✅ Heading */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 6, md: 4 },
                        maxWidth: "800px",
                        mx: "auto",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "2rem", md: "2.4rem" },
                            fontWeight: 700,
                            color: "#000",
                            mb: 2,
                        }}
                    >
                        Get Hired In Top Companies
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6B7280",
                            fontSize: "0.9rem",
                            maxWidth: "650px",
                            mx: "auto",
                            lineHeight: 1.5,
                        }}
                    >
                        Our AI-powered job engine takes the hassle out of job hunting. From
                        setting up your profile to landing interviews, everything happens
                        seamlessly in just a few steps.
                    </Typography>
                </Box>

                {/* ✅ Company Cards */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {companies.map((company, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{ display: "flex", justifyContent: "center" }}
                            {...({}) as any}
                        >
                            <Card
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                sx={{
                                    width: 200,
                                    height: 135,
                                    textAlign: "center",
                                    p: 2,
                                    borderRadius: "16px",
                                    backgroundColor: "white",
                                    position: "relative",
                                    overflow: "visible",
                                    transition: "all 0.3s ease",
                                    boxShadow:
                                        hoveredCard === index
                                            ? "0 10px 20px rgba(37, 220, 224, 0.3)"
                                            : "0 2px 6px rgba(0,0,0,0.08)",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                    },
                                }}
                            >
                                {/* Floating Logo Circle */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: -25,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                        backgroundColor: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        style={{ width: 28, height: 28, objectFit: "fill" }}
                                    />
                                </Box>

                                <CardContent sx={{ mt: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: "0.8rem",
                                            color: "#6B7280",
                                            mb: 0.5,
                                        }}
                                    >
                                        {company.location}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            fontWeight: 700,
                                            color: "#000",
                                            mb: 1.5,
                                        }}
                                    >
                                        {company.name}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            textTransform: "none",
                                            backgroundColor: "#F2F6FF",
                                            color: "#056ECA",
                                            fontWeight: 500,
                                            fontSize: "0.8rem",
                                            borderRadius: "12px",
                                            px: 2,
                                            py: 0.5,
                                            "&:hover": {
                                                backgroundColor: "#25DCE0",
                                                color: "white",
                                            },
                                        }}
                                    >
                                        Open Jobs ↗
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
