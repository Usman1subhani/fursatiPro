"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Divider,
  LinearProgress,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { useRef } from "react";

export default function CreateAccountInstantly() {
  const Router = useRouter();
  const steps = ["Account Setup", "Smart CV Upload", "Complete Profile"];
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "application/rtf",
    "text/plain",
  ];
  const reset = () => {
    setFile(null);
    setProgress(0);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ---- Validation ----
    if (!allowedTypes.includes(file.type)) {
      setError("❗ Invalid file type. Only PDF, DOCX, DOC, RTF, TXT allowed.");
      setFile(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("❗ File is too large. Max size 10MB.");
      setFile(null);
      return;
    }

    setError("");
    setFile(file);
    setProgress(0);
    // ---- Simulated Upload Progress ----
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (error) {
          clearInterval(interval);
          return prev;
        }
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  const triggerError = () => {
    setError("Upload failed! Please try again.");
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // ensures only left scrolls
      }}
    >
      {/* LEFT SIDE — Scrollable Form Section (60%) */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 4, sm: 8, md: 12 },
          // py: ,
          overflowY: "auto", // <— enables vertical scroll

          scrollbarWidth: "thin", // for Firefox
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "3px",
          },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400, mt: { xs: 2, md: 3 }, mb: 4 }}>
          {/* Logo */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="/logos/Fursati_Logo.svg"
              alt="FursatiPro Logo"
              sx={{ width: 150, mb: 1 }}
            />
          </Box>

          {/* Stepper */}
          <Stepper
            activeStep={0 + 1}
            alternativeLabel
            sx={{
              mb: 3,
              "& .MuiStepLabel-label": {
                fontSize: "0.8rem",
                color: "text.secondary",
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Title */}
          <Typography
            variant="h6"
            fontWeight={600}
            textAlign="center"
            sx={{ color: "text.primary", mb: 2 }}
          >
            Create Your Account Instantly
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 4,
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            Upload your CV and Fursati Pro will extract your skills, experience
            and contact details automatically.
          </Typography>
          {!file && (
            <Box
              onClick={() => fileInputRef.current?.click()}
              sx={{
                border: error
                  ? "2px dashed red"
                  : "2px dashed rgba(5, 110, 202, 0.7)",
                borderRadius: "12px",
                px: 2,
                py: 4,
                textAlign: "center",
                mb: 4,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              {error ? (
                <img
                  src="/authPhotos/closebutton.svg"
                  alt="Upload Icon"
                  style={{ width: 50, height: 50, color: "red" }}
                ></img>
              ) : (
                <img
                  src="/authPhotos/fi_upload-cloud.svg"
                  alt="Upload Icon"
                  style={{ width: 50, height: 50, color: "#25DCE0" }}
                />
              )}

              <Typography
                sx={{
                  fontWeight: 500,
                  color: "rgba(5, 110, 202, 1)",
                  fontSize: "14px",
                  mt: 2,
                  mb: 0.5,
                }}
              >
                Browse Here
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  color: "rgba(92, 92, 92, 1)",
                  fontSize: "12px",
                }}
              >
                Drop your CV here or click to browse
              </Typography>

              <Typography
                sx={{
                  backgroundColor: "rgba(239, 239, 239, 0.7)",
                  width: "100%",
                  fontWeight: 400,
                  color: "red",
                  fontSize: "10px",
                  mt: 1,
                  borderRadius: "4px",
                  py: "4px",
                }}
              >
                Accepted formats: PDF, DOCX, DOC, RTF, TXT — Max size: 10 MB
              </Typography>

              {/* Hidden Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.rtf,.txt"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Box>
          )}
          {file && (
            <Box
              sx={{
                border: error ? "2px dashed red" : "2px dashed #056eca",
                borderRadius: "12px",
                px: 2,
                py: 4,
                textAlign: "center",
                mb: 4,
                cursor: "pointer",
                transition: "0.3s",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              {error ? (
                <img
                  src="/authPhotos/closebutton.svg"
                  alt="Upload Icon"
                  style={{ width: 50, height: 50, color: "red" }}
                ></img>
              ) : (
                <img
                  src="/authPhotos/fi_upload-cloud.svg"
                  alt="Upload Icon"
                  style={{ width: 50, height: 50, color: "#25DCE0" }}
                />
              )}

              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                    maxWidth: 300,
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Typography fontWeight={600} sx={{ color: "black" }}>
                    {file.name}
                  </Typography>
                  <CloseIcon
                    onClick={() => {
                      setFile(null);
                      setProgress(0);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    sx={{
                      cursor: "pointer",
                      color: "gray",
                      fontSize: "18px",
                      "&:hover": { color: "red" },
                    }}
                  />
                </Box>
                <Typography fontSize={13} color="gray">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 1,
                    maxWidth: 300,
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      flexGrow: 1,
                      height: 6,
                      borderRadius: 2,
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: error ? "red" : "#056eca",
                      },
                    }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      minWidth: 32,
                      textAlign: "right",
                      color: error ? "red" : "rgba(5, 110, 202, 1)",
                    }}
                  >
                    {progress}%
                  </span>
                </Box>
                {error && (
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "red",
                      width: "100%",
                      maxWidth: 300,
                      marginLeft: "auto",
                      marginRight: "auto",
                      mt: 2,
                      color: "red",
                      padding: "8px 16px 8px 16px",
                      borderRadius: "48px",
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "14px",
                        width: "100%",
                      },
                    }}
                  >
                    Try Again
                  </Button>
                )}
              </Box>
            </Box>
          )}
          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                backgroundImage:
                  "linear-gradient(to right, rgba(5, 110, 202, 1), rgba(8, 58, 103, 1))",
                color: "white",
                padding: "8px 16px 8px 16px",
                borderRadius: "70px",
                fontSize: { xs: "10px", sm: "12px", md: "14px", width: "100%" },
              }}
            >
              {" "}
              Save & Continue
            </Button>
            <Button onClick={triggerError}>Simulate Upload Error</Button>
            {!file && (
              <>
                <Box
                  sx={{ display: "flex", alignItems: "center", mb: 1, mt: 2 }}
                >
                  <Divider sx={{ flex: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ mx: 1, color: "text.secondary" }}
                  >
                    OR
                  </Typography>
                  <Divider sx={{ flex: 1 }} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "rgba(92, 92, 92, 1)",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  Continue with manual registration
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    mt: 1,
                    color: "rgba(92, 92, 92, 1)",
                    fontSize: "18px",
                    cursor: "pointer",
                    lineHeight: "100%",
                  }}
                >
                  Continue without CV
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
      {!file ? (
        <>
          {/* RIGHT SIDE — Image Section (40%) */}
          <Box
            sx={{
              width: "40%",
              display: { xs: "none", md: "block" },
              height: "100%",
              overflow: "hidden",
              bgcolor: "white",
            }}
          >
            <img
              src="/authPhotos/createaccountinstantly.svg"
              alt="Sign Up Visual"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </>
      ) : error ? (
        // ✅ File uploaded but error → Show error image
        <Box
          sx={{
            width: "40%",
            display: { xs: "none", md: "block" },
            height: "100%",
            overflow: "hidden",
            bgcolor: "white",
          }}
        >
          <img
            src="/authPhotos/errorcreateaccountinstantly.svg"
            alt="Upload Failed Visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      ) : (
        // ✅ File uploaded & no error → Show success image
        <Box
          sx={{
            width: "40%",
            display: { xs: "none", md: "block" },
            height: "100%",
            overflow: "hidden",
            bgcolor: "white",
          }}
        >
          <img
            src="/authPhotos/createaccountinstantly1.svg"
            alt="Upload Success Visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      )}
    </Box>
  );
}
