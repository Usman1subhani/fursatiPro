"use client";

import React from "react";
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    IconButton,
    Divider,
} from "@mui/material";
import {
    Facebook,
    Twitter,
    LinkedIn,
    Instagram,
    Phone,
    Email,
    LocationOn,
} from "@mui/icons-material";
import Image from "next/image";
import logo from "@/public/profile/logo.jpg";
import Link from "next/link";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#111111",
                color: "#ffffff",
                pt: 8,
                pb: 4,
                mt: 8,
            }}
        >
            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
                <Grid
                    container
                    spacing={{ xs: 4, sm: 6, md: 8 }}
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    {/* Column 1 */}
                    <Grid item xs={12} sm={6} md={3} sx={{ mb: { xs: 4, sm: 0 } }} {...({} as any)}>
                        <Stack spacing={2}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, color: "#ffffff" }}
                                >
                                    FursatiPro
                                </Typography>
                            </Stack>

                            <Typography sx={{ color: "#d1d5db", fontSize: "0.9rem" }}>
                                Stop Searching. Let FursatiPro Match You.
                            </Typography>

                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600, color: "#ffffff" }}
                            >
                                Socials
                            </Typography>

                            <Stack direction="row" spacing={1}>
                                {[Twitter, Facebook, Instagram, LinkedIn].map((Icon, i) => (
                                    <IconButton
                                        key={i}
                                        size="small"
                                        sx={{
                                            color: "#ffffff",
                                            "&:hover": {
                                                color: "var(--brand, #056ECA)",
                                            },
                                        }}
                                    >
                                        <Icon fontSize="small" />
                                    </IconButton>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Column 2 */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Stack spacing={2} sx={{ mb: { xs: 4, sm: 0 } }} >
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: "#ffffff" }}
                            >
                                Our Services
                            </Typography>
                            {[
                                { text: "Home", href: "/" },
                                { text: "Jobs", href: "/jobs" },
                                { text: "Features", href: "/features" },
                                { text: "Pricing", href: "/pricing" },
                            ].map((link) => (
                                <Link
                                    key={link.text}
                                    href={link.href}
                                    style={{
                                        textDecoration: "none",
                                        color: "#d1d5db",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Column 3 */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Stack spacing={1.5}>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: "#ffffff" }}
                            >
                                Quick Links
                            </Typography>
                            {[
                                "Blogs",
                                "Contact Us",
                                "Help Center",
                                "Privacy Policy",
                            ].map((item, i) => (
                                <Typography key={i} sx={{ color: "#d1d5db", fontSize: "0.9rem" }}>
                                    {item}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Column 4 */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Stack spacing={1.5}>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: "#ffffff" }}
                            >
                                Contact
                            </Typography>

                            <Stack direction="row" spacing={1} alignItems="center">
                                <Phone sx={{ fontSize: 18 }} />
                                <Typography sx={{ fontSize: "0.9rem", color: "#d1d5db" }}>
                                    827-926-2559
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1} alignItems="center">
                                <Email sx={{ fontSize: 18 }} />
                                <Typography sx={{ fontSize: "0.9rem", color: "#d1d5db" }}>
                                    usmansubhani595@gmail.com
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1} alignItems="flex-start">
                                <LocationOn sx={{ fontSize: 18 }} />
                                <Typography sx={{ fontSize: "0.9rem", color: "#d1d5db" }}>
                                    2972 Westheimer Rd.
                                    <br />
                                    Santa Ana, Illinois 85486
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Divider sx={{ my: 5, borderColor: "#333" }} />

                {/* Bottom Copyright */}
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "0.875rem",
                        color: "#9ca3af",
                    }}
                >
                    © {new Date().getFullYear()} –{" "}
                    <span style={{ color: "var(--brand, #056ECA)" }}>FursatiPro</span> | All
                    Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
}
