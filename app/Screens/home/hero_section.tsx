"use client";

import React from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Stack,
    Chip,
    Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from '@mui/icons-material/East';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function HeroSection() {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
                overflow: "hidden",
            }}
        >
            {/* Background Corner Images */}
            {/* Background Corner Images (Uniform Containers) */}
            {["image1.png", "image2.png", "image3.png", "image4.jpg"].map((src, index) => {
                const positions = [
                    { top: 100, left: 60 },
                    { top: 100, right: 60 },
                    { bottom: 240, left: 75 },
                    { bottom: 240, right: 60 },
                ];
                return (
                    <Box
                        key={index}
                        sx={{
                            position: "absolute",
                            width: { xs: 100, md: 180 },
                            height: { xs: 100, md: 180 },
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                            backgroundColor: "#f5f5f5",
                            ...positions[index],
                        }}
                    >
                        <Box
                            component="img"
                            src={`/hero_section/${src}`}
                            alt={`Corner ${index + 1}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover", // keeps image proportion inside box
                            }}
                        />
                    </Box>
                );
            })}

            {/* Floating Company Logos (White Circular Containers) */}
            <Grid
                container
                spacing={2}
                sx={{
                    position: "absolute",
                    bottom: 100,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {[
                    "/dummy-images/google-logo.png",
                    "/dummy-images/meta-logo.png",
                    "/dummy-images/amazon-logo.png",
                    "/dummy-images/microsoft-logo.png",
                ].map((logo, index) => (
                    <Grid item key={index} {...({} as any)}>
                        <Box
                            sx={{
                                width: 70,
                                height: 70,
                                borderRadius: "50%",
                                backgroundColor: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                                mx: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt={`Company ${index + 1}`}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>


            {/* Dotted Arrow (Pointing to search bar) */}
            <Box
                component="img"
                src="/dummy-images/dotted-arrow.png" // Replace with your actual image path
                alt="Arrow"
                sx={{
                    position: "absolute",
                    top: "40%",
                    right: "25%",
                    width: "100px",
                    height: "auto",
                    transform: "rotate(-30deg)",
                }}
            />

            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh",
                        textAlign: "center",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {/* Star Badge */}
                    <Chip
                        label="⭐ No.1 tool for smarter job Hunting"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            padding: "20px 16px",
                            mb: 3,
                            borderRadius: "50px",
                            boxShadow: "0 4px 12px rgba(5, 110, 202, 0.4)",
                        }}
                    />


                    {/* Main Heading - 3 rows */}
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            lineHeight: 1.2,
                            mb: 3,
                            color: "#1a202c",
                        }}
                    >
                        Find your next <br /> opportunities in {" "}
                        <Box component="span" className="text-brand">
                            Saudi Arabia faster, <br />smarter
                        </Box>{" "}
                        and {" "}
                        <Box component="span" className="text-brand">
                            fit {" "}
                        </Box>
                        for you
                    </Typography>

                    {/* Subheading - 2 rows */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#64748b",
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            lineHeight: 1.6,
                            mb: 5,
                            maxWidth: "600px",
                        }}
                    >
                        Stop scrolling through endless listings our AI finds, filters and delivers the
                        {/* <br /> */}
                        best opportunities for you every day.
                    </Typography>

                    {/* Search Bar */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 2,
                            width: "100%",
                            maxWidth: "900px",
                            mb: 4,
                            backgroundColor: "white",
                            borderRadius: "50px",
                            padding: "8px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                    >
                        <TextField
                            placeholder="Job title, Keyword..."
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <SearchIcon sx={{ color: "#056ECA", mr: 1 }} />
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    border: "none",
                                    "& fieldset": { border: "none" },
                                },
                            }}
                        />

                        <TextField
                            placeholder="City or Region (e.g., Riyadh, Jeddah)"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <FmdGoodOutlinedIcon sx={{ color: "#056ECA", mr: 1 }} />
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    border: "none",
                                    "& fieldset": { border: "none" },
                                },
                            }}
                        />

                        <Button
                            className="bg-primary-gradient"
                            variant="contained"
                            sx={{
                                borderRadius: "50px",
                                minWidth: "90px",
                                color: "white",
                                fontWeight: "bold",
                                textTransform: "none", // 👈 prevents uppercase text
                                "&:hover": { opacity: 0.9 },
                            }}
                        >
                            <SearchIcon />
                        </Button>
                    </Box>

                    {/* Popular Jobs Section */}
                    <Box sx={{ mb: 6 }}>
                        <Stack
                            direction="row"
                            spacing={0.6}
                            sx={{
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: 1,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "black",
                                    fontWeight: "500",
                                    mb: 2,
                                }}
                            >
                                Popular Jobs:
                            </Typography>
                            {["Designer", "Web Developer", "Ai Engineer", "SQA", "Software Engineer"].map(
                                (job) => (
                                    <Chip
                                        key={job}
                                        label={job}
                                        variant="outlined"
                                        sx={{
                                            borderColor: "grey",
                                            color: "black",
                                            "&:hover": {
                                                backgroundColor: "var(--brand)",
                                                color: "white",
                                            },
                                        }}
                                    />
                                )
                            )}
                        </Stack>
                    </Box>

                    {/* Success Stories Section */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            gap: 1,
                            mb: 4,
                        }}
                    >
                        {/* Success Images */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {[1, 2, 3, 4].map((item) => (
                                <Box
                                    key={item}
                                    component="img"
                                    src={`/dummy-images/success-${item}.png`} // Replace with your actual image paths
                                    alt={`Success ${item}`}
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        border: "2px solid white",
                                        marginLeft: item > 1 ? "-8px" : 0,
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                    }}
                                />
                            ))}
                        </Box>

                        {/* Success Text */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: "0.9rem", md: "0.9rem" },
                                color: "black",
                            }}
                        >
                            Over{" "}
                            <Box component="span" className="text-brand">
                                999+
                            </Box>{" "}
                            Bazenbar are successfully hired
                        </Typography>
                    </Box>

                    {/* Join for Free Button */}
                    <Button
                        className="bg-primary-gradient"
                        variant="contained"
                        endIcon={<EastIcon fontSize="large" />}
                        sx={{
                            borderRadius: "50px",
                            padding: "12px 50px",
                            fontSize: "0.9rem",
                            color: "white",
                            textTransform: "none", // 👈 added here
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