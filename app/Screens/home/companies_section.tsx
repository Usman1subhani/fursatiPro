"use client";

import Image from "next/image";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function CompaniesSection() {
    const companies = [
        { src: "/companies/microsoft.svg", alt: "Microsoft" },
        { src: "/companies/saudiSaabic.png", alt: "Saudi Saabic" },
        { src: "/companies/elastic-horizontal.png", alt: "Elastic" },
        { src: "/companies/Saudi-Telecom.png", alt: "Saudi Telecom" },
        { src: "/companies/google.svg", alt: "Google" },
        { src: "/companies/saudiaramco.png", alt: "Saudi Aramco" },
        { src: "/companies/twilio-segment.jpg", alt: "Segment" },
        { src: "/companies/servicenow.png", alt: "ServiceNow" },
    ];

    return (
        <Box
            component="section"
            sx={{
                width: "100%", 
                backgroundColor: "white",
                // borderTop: "1px solid #e6eef6",
                py: { xs: 6, sm: 4, md: 5 },
                position: "relative",
                zIndex: 1,
                // overflow: "hidden",
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        color: "#64748b",
                        mb: { xs: 4, md: 6 },
                        fontSize: { xs: 14, md: 16 }
                    }}
                >
                    Trusted by top global and Saudi companies
                </Typography>

                {/* Slider Container */}
                <Box className="slider-container">
                    {/* Slider Track */}
                    <Box className="slider-track">
                        {[...companies, ...companies].map((company, index) => (
                            <Box key={index} className="logo-container">
                                <Image
                                    src={company.src}
                                    alt={company.alt}
                                    width={100}
                                    height={50}
                                    className="logo-image"
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>

            {/* CSS Styles */}
            <style jsx global>{`
                .slider-container {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }

                .slider-track {
                    display: flex;
                    animation: slide 50s linear infinite;
                    width: max-content;
                }

                .slider-track:hover {
                    animation-play-state: paused;
                }

                .logo-container {
                    flex: 0 0 auto;
                    width: 160px;
                    height: 80px;
                    margin: 0 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                    padding: 5px;
                }

                .logo-image {
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                    /* Remove grayscale and opacity to show original colors */
                    transition: transform 0.3s ease;
                }

                .logo-container:hover .logo-image {
                    /* Only add a slight scale effect on hover */
                    transform: scale(1.05);
                }

                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                /* Responsive styles */
                @media (max-width: 768px) {
                    .logo-container {
                        width: 140px;
                        height: 70px;
                        margin: 0 24px;
                        padding: 12px;
                    }
                }

                @media (max-width: 600px) {
                    .logo-container {
                        width: 120px;
                        height: 60px;
                        margin: 0 16px;
                        padding: 8px;
                    }
                }
            `}</style>
        </Box>
    );
}