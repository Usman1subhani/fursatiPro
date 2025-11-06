"use client";

import React from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton } from "@mui/material";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Container,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
import Image from "next/image";
import logo from "@/public/profile/logo.jpg";

export default function Navbar() {
  const [activeLink, setActiveLink] = React.useState("/");
  const [language, setLanguage] = React.useState("EN");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position="static"
        elevation={200}
        sx={{
          // background: "transparent",
          background: "white",
          py: { xs: 3, md: 6 },
          px: { xs: 1, sm: 4, md: 8, lg: 18 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #E5E7EB",
            borderRadius: "50px",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)",
            px: { xs: 0, sm: 1, md: 1, lg: 2 },
            py: 1,
            display: "flex",

            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: { xs: "100%", xl: "1400px" },
            mx: "auto",
            width: "100%",
            flexDirection: { xs: "row", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* Left: Logo and name */}
          <Box display="flex" alignItems="center" gap={1}>
            <Image src={logo} alt="FursatiPro" width={40} height={40} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#083A67",
              }}
            >
              FursatiPro
            </Typography>
          </Box>
          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: "flex", sm: "none" },
              color: "#083A67",
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Center: Navigation Links */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: "none", sm: "flex" }, // hide on mobile, show on tablet+
            }}
          >
            {[
              { text: "Home", href: "/" },
              { text: "Jobs", href: "/jobs" },
              { text: "Features", href: "/features" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ textDecoration: "none" }}
                onClick={() => setActiveLink(link.href)}
              >
                <Typography
                  sx={{
                    color:
                      activeLink === link.href
                        ? "var(--brand)" // active text color
                        : "#6b7280", // grey inactive
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": {
                      color: "var(--brand)",
                    },
                  }}
                >
                  {link.text}
                </Typography>
              </Link>
            ))}
          </Stack>

          {/* Right: Language + Buttons */}
          <Stack
            direction="row"
            alignItems="center"
            sx={{ display: { xs: "none", sm: "flex" } }}
            spacing={0.8}
          >
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              size="small"
              sx={{
                minWidth: 70,
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#6b7280",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="EN">🇺🇸 EN</MenuItem>
              <MenuItem value="AR">🇸🇦 AR</MenuItem>
            </Select>

            <Button
              variant="outlined"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                borderColor: "var(--brand)",
                color: "var(--brand)",
                px: 4,
                // py: 0.5,
                "&:hover": {
                  borderColor: "#083A67",
                  backgroundColor: "rgba(5,110,202,0.05)",
                },
              }}
            >
              Log In
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                background: "linear-gradient(90deg, #056ECA 0%, #083A67 100%)",
                px: 4,
                // py: 0.6,
                "&:hover": {
                  background: "linear-gradient(90deg, #045db0 0%, #062f53 100%)",
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "75%",
            padding: 2,
            backgroundColor: "white",
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={3} mt={3}>
          {[
            { text: "Home", href: "/" },
            { text: "Jobs", href: "/jobs" },
            { text: "Features", href: "/features" },
            { text: "Pricing", href: "/pricing" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActiveLink(link.href);
                setMobileOpen(false);
              }}
            >
              <Typography
                sx={{
                  color: activeLink === link.href ? "var(--brand)" : "#6b7280",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                {link.text}
              </Typography>
            </Link>
          ))}

          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            size="small"
          >
            <MenuItem value="EN">🇺🇸 EN</MenuItem>
            <MenuItem value="AR">🇸🇦 AR</MenuItem>
          </Select>

          <Button variant="outlined" sx={{ borderRadius: "50px" }}>
            Log In
          </Button>

          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              background: "linear-gradient(90deg, #056ECA 0%, #083A67 100%)",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
