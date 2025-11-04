"use client";

import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    Avatar,
    Rating,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md")); // ≥900px
    const isLg = useMediaQuery(theme.breakpoints.up("lg")); // ≥1200px

    // Determine visible count dynamically (responsive)
    const visibleCount = isLg ? 3 : isMd ? 2 : 1;

    const testimonials = [
        {
            text: "Updated my resume once and started getting job matches the same day. The suggestions were so accurate — I got an interview within a week. The platform made my job search effortless.",
            name: "Aisha",
            image: "/Testimonials/Testimonial1.svg",
            rating: 5,
        },
        {
            text: "Used to spend hours checking different job sites every night. Now everything comes in one place. The daily updates helped me find my next big role much faster.",
            name: "Omar Al-Harbi",
            image: "/Testimonials/Testimonial2.svg",
            rating: 5,
        },
        {
            text: "Found the happiest role I’ve had in 10 years after graduating. The process was clear and data-driven — I really appreciated all the extra details in every job listing.",
            name: "Nora Al-Awad",
            image: "/Testimonials/Testimonial3.svg",
            rating: 5,
        },
        {
            text: "Absolutely loved how easy it was to apply and get matched instantly. The platform gave me interviews faster than any other service I tried before.",
            name: "Ahmed Saeed",
            image: "/Testimonials/Testimonial1.svg",
            rating: 5,
        },
        {
            text: "The job alerts were on point! I landed a position that fits my career goals perfectly. Highly recommend Fursati Pro to all job seekers.",
            name: "Fatimah",
            image: "/Testimonials/Testimonial2.svg",
            rating: 5,
        },
    ];

    const totalSlides = Math.ceil(testimonials.length / visibleCount);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    // Calculate visible items
    const start = currentIndex * visibleCount;
    const visibleTestimonials = testimonials.slice(
        start,
        start + visibleCount
    );

    // Handle pagination click
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 10 },
                background: "linear-gradient(to bottom right, #E6FAFC 20%, #FFFFFF 80%)",
                position: "relative",
            }}
        >
            <Container maxWidth="lg">
                {/* ✅ Badge */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Box
                        sx={{
                            backgroundColor: "#E6FAFC",
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
                        Testimonials
                    </Box>
                </Box>

                {/* ✅ Heading */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 5, md: 6 },
                        maxWidth: "800px",
                        mx: "auto",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "2rem", md: "2.3rem" },
                            fontWeight: 700,
                            color: "#000",
                            mb: 1.5,
                        }}
                    >
                        Our Success Stories
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6B7280",
                            fontSize: "0.9rem",
                            maxWidth: "600px",
                            mx: "auto",
                            lineHeight: 1.5,
                        }}
                    >
                        Over 10,000 Saudis found their next job with Fursati Pro.
                    </Typography>
                </Box>

                {/* ✅ Slider Container */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        mb: 3,
                        flexWrap: "nowrap",
                        transition: "all 0.8s ease",
                    }}
                >
                    {visibleTestimonials.map((t, index) => (
                        <Card
                            key={index}
                            sx={{
                                flex: "0 0 350px", // ⬅️ increased width
                                height: "170px",  // ⬅️ decreased height
                                borderRadius: "16px",
                                p: 3,
                                backgroundColor: "white",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                position: "relative",
                            }}
                        >
                            <FormatQuoteIcon
                                sx={{
                                    color: "#25DCE0",
                                    fontSize: 32, 
                                }}
                            />
                            <Typography
                                sx={{
                                    color: "#555",
                                    fontSize: "0.9rem",
                                    mb: 1,
                                    lineHeight: 1.5,
                                }}
                            >
                                {t.text}
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                <Avatar
                                    src={t.image}
                                    alt={t.name}
                                    sx={{ width: 40, height: 40 }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "0.9rem",
                                            fontWeight: 600,
                                            color: "#000",
                                        }}
                                    >
                                        {t.name}
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={t.rating}
                                        readOnly
                                        size="small"
                                        sx={{ color: "#FFD700" }}
                                    />
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </Box>

                {/* ✅ Pagination Dots */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                    {[...Array(totalSlides)].map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => handleDotClick(index)}
                            sx={{
                                width: currentIndex === index ? 20 : 10,
                                height: 10,
                                borderRadius: "10px",
                                backgroundColor:
                                    currentIndex === index ? "#25DCE0" : "rgba(0,0,0,0.2)",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
