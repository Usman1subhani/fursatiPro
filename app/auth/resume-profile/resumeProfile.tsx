"use client";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  TextField,
  TextareaAutosize,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";

import StepLabel from "@mui/material/StepLabel";
import { Divider } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
const sections = [
  {
    title: "Personal Information",
    icon: "/authPhotos/resumeProfile/user-tag.svg",
    content: (
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
         <img src="/authPhotos/resumeProfile/profileimg.svg" alt="Profile Image" />
         <Box sx={{display: "flex", flexDirection: "column",mt:1 ,px:1}}>
             <Typography fontSize={16} color="rgba(33, 33, 33, 1)" >Upload Photo </Typography>
             <Typography fontSize={12} color="rgba(92, 92, 92, 1)" >Minimum size 100 x 100 px</Typography>
             <Button  sx={{mt:1,backgroundColor:"rgba(249, 249, 249, 1)",borderRadius:"4px",padding:'8px 16px 8px 16px',gap:"4px"}}>
                <img src="/authPhotos/resumeProfile/CloudArrowUp.svg" alt="CloudArrowUp" />
                 <Typography sx={{fontSize:12}}color="rgba(33, 33, 33, 1)" >Browse</Typography>

             </Button>
         </Box>
      </Box>
    ),
  },
  {
    title: "Professional Summary",
    icon: "/authPhotos/resumeProfile/user-alt.svg",
    content: (
      <Box sx={{ p: 1, bgcolor: "#f5f5f5", borderRadius: "8px" }}>
        <Typography fontSize={12}>
          Write a short summary about your professional background.
        </Typography>
        <TextareaAutosize
          minRows={4}
          placeholder="Your summary..."
          style={{ width: "100%", marginTop: 5, padding: 8 }}
        />
      </Box>
    ),
  },
  {
    title: "Job Preferences",
    icon: "/authPhotos/resumeProfile/briefcase-plus.svg",
    content: (
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 1, flexWrap: "wrap" }}
      >
        <Button variant="outlined">Full-time</Button>
        <Button variant="outlined">Part-time</Button>
        <Button variant="outlined">Remote</Button>
      </Box>
    ),
  },
  {
    title: "Professional Skills",
    icon: "/authPhotos/resumeProfile/medal-star.svg",
    content: (
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 1, flexWrap: "wrap" }}
      >
        <Chip label="JavaScript" color="primary" />
        <Chip label="React" color="primary" />
        <Chip label="Node.js" color="primary" />
      </Box>
    ),
  },
  {
    title: "Education",
    icon: "/authPhotos/resumeProfile/graduation-cap.svg",
    content: (
      <Box sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 1 }}>
        <Typography fontWeight={500}>Bachelor of Science</Typography>
        <Typography fontSize={12} color="gray">
          University Name, 2019 - 2023
        </Typography>
      </Box>
    ),
  },
];

export default function ResumeProfile() {
  const steps = ["Account Setup", "Smart CV Upload", "Complete Profile"];
  const percentage = 80;
  const radius = 50; // Adjust if your SVG radius is different
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const errorRef = useRef(false);
  const [expandedSections, setExpandedSections] = useState<boolean[]>(
    Array(9).fill(false) // 9 sections
  );
  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "application/rtf",
    "text/plain",
  ];
  React.useEffect(() => {
    errorRef.current = Boolean(error);
  }, [error]);
  React.useEffect(() => {
    const storedFile = sessionStorage.getItem("uploadedfile");
    if (storedFile) {
      const parsed = JSON.parse(storedFile);
      setFile({
        name: parsed.name,
        size: parsed.size,
        type: parsed.type,
      } as File); // Partial File-like object
    }
  }, []);

  const reset = () => {
    setIsUploading(false);
    setFile(null);
    setProgress(0);
    setError("");
    sessionStorage.removeItem("uploadedfile");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ---- Validation ----
    if (!allowedTypes.includes(file.type)) {
      setError("❗ Invalid file type. Only PDF, DOCX, DOC, RTF, TXT allowed.");
      setFile(null);
      setIsUploading(false);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("❗ File is too large. Max size 10MB.");
      setFile(null);
      setIsUploading(false);
      return;
    }

    setError("");
    setIsUploading(true);
    setFile(file);
    setProgress(0);
    // ---- Simulated Upload Progress ----
    const interval = setInterval(() => {
      setProgress((prev) => {
        // ✅ Stop exactly where progress currently is when error occurs
        if (errorRef.current) {
          clearInterval(interval);
          setIsUploading(false);
          return prev;
        }
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  const Replace = () => {
    reset(); // Clear existing file and progress

    // Small delay to ensure input is ready
    setTimeout(() => {
      if (fileInputRef.current) {
        fileInputRef.current.click(); // Open file picker manually
      }
    }, 50);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%",  mx: "auto", textAlign: "center" }}>

        <Box
          sx={{
           
            textAlign: "center",

            py: { xs: 4, md: 7 },

            backgroundImage: `
      url(/authPhotos/resumeClippathgroup.svg),
      url(/authPhotos/resumebgheader.svg)
    `,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "contain, cover",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mt: 4,
              fontWeight: 700,
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
            }}
          >
            {" "}
            Review And{" "}
            <span style={{ color: "rgba(37, 220, 224, 1)" }}>
              Complete Your Profile
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: "rgba(255, 255, 255, 1)",
              fontSize: { xs: "12px", sm: "14px", md: "12px" },
            }}
          >
            We’ve filled in your details from your CV. Please check and update
            anything missing.
          </Typography>
        </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Stepper */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              mt: { xs: 2, md: 3 },
              mb: 4,
              mx: "auto",
            }}
          >
            <Stepper
              activeStep={0 + 2}
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
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",

              gap: 2,
              borderRadius: "10px",
            }}
          >
            {/* Left button - 60% width */}
            <Box
              sx={{
                flex: 7,
                width: { xs: "fit-content", md: "800px" },
                borderRadius: "10px",
                overflow: "hidden",
                flexDirection: "column",
                bgcolor: "rgba(255, 255, 255, 1)",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                py: 3,
                px: { xs: 1, md: 2 },
              }}
            >
              {sections.map((section, index) => (
                <Box
                  key={index}
                  onClick={() => toggleSection(index)}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    border: "1px solid rgba(237, 237, 237, 1)",
                    bgcolor: "rgba(255, 255, 255, 1)",
                    borderRadius: "10px",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                      <img src={section.icon} alt={section.title} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "12px",
                          color: "rgba(0, 0, 0, 1)",
                          fontWeight: "700",
                        }}
                      >
                        {section.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        transform: expandedSections[index]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <img
                        src="/authPhotos/resumeProfile/Vector.svg"
                        alt="vector"
                      />
                    </Box>
                  </Box>
                  <Divider sx={{ flex: 1, mt: 2 }} />
                  {/* Render section-specific content */}
                  {expandedSections[index] && (
                    <Box sx={{ mt: 2 }}>{section.content}</Box>
                  )}
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  mx: "auto",
                  mt: 2,
                }}
              >
                <Button
                  sx={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(5, 110, 202, 1), rgba(8, 58, 103, 1))",
                    color: "white",
                    borderRadius: "70px",
                    textTransform: "none",
                    px: 3,
                    py: 1.2,
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(to right, rgba(5, 110, 202, 1), rgba(8, 58, 103, 1))",
                    },
                  }}
                >
                  Create My Account
                </Button>

                <Button sx={{ color: "rgba(92, 92, 92, 1)", mt: 1 }}>
                  Cancel
                </Button>
              </Box>
            </Box>

            {/* Right button - 40% width */}
            <Box
              sx={{
                flex: 3,
                width: { xs: "fit-content", md: "240px" },
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  bgcolor: "rgba(255, 255, 255, 1)",
                  borderRadius: "10px",
                  pb: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",

                    color: "rgba(28, 28, 28, 1)",
                    fontWeight: "500",
                    mt: 2,
                  }}
                >
                  {" "}
                  Profile Completion
                </Typography>
                <Box sx={{ mt: 2, px: 2 }}>
                  <svg width="180" height="180" viewBox="0 0 150 150">
                    {/* Background Circle */}
                    <circle
                      cx="75"
                      cy="75"
                      r={radius}
                      stroke="#E6E6E6"
                      strokeWidth="15"
                      fill="none"
                    />

                    {/* Dynamic Progress */}
                    <circle
                      cx="75"
                      cy="75"
                      r={radius}
                      stroke="rgba(37, 220, 224, 1)"
                      strokeWidth="15"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      style={{ transition: "stroke-dashoffset 0.6s ease" }}
                    />

                    {/* Text in Center */}
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dy=".35em"
                      fontSize="22"
                      fontWeight="600"
                      fill="black"
                    >
                      {percentage}%
                    </text>
                  </svg>
                  <Divider
                    sx={{
                      flex: 1,
                      mt: 2,
                      borderBottomWidth: 2, // <-- Increase thickness
                    }}
                  />
                  <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "rgba(0, 0, 0, 1)",
                        fontWeight: 400,
                        textAlign: "left",
                      }}
                    >
                      Your resume is only {percentage}% complete! Let’s improve
                      it
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: 1,
                        gap: 1,
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(5, 110, 202, 1)",
                          fontWeight: 400,
                          textAlign: "left",
                          border: "1px solid rgba(5, 110, 202, 1)",
                          borderRadius: "4px",
                          padding: "4px 6px 4px 6px",
                        }}
                      >
                        {" "}
                        +5%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(92, 92, 92, 1)",
                          fontWeight: 400,
                        }}
                      >
                        {" "}
                        Complete your job title
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: 1,
                        gap: 1,
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(5, 110, 202, 1)",
                          fontWeight: 400,
                          textAlign: "left",
                          border: "1px solid rgba(5, 110, 202, 1)",
                          borderRadius: "4px",
                          padding: "4px 6px 4px 6px",
                        }}
                      >
                        {" "}
                        +5%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(92, 92, 92, 1)",
                          fontWeight: 400,
                        }}
                      >
                        {" "}
                        Complete personal information
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: 1,
                        gap: 1,
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(5, 110, 202, 1)",
                          fontWeight: 400,
                          textAlign: "left",
                          border: "1px solid rgba(5, 110, 202, 1)",
                          borderRadius: "4px",
                          padding: "4px 6px 4px 6px",
                        }}
                      >
                        {" "}
                        +5%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rgba(92, 92, 92, 1)",
                          fontWeight: 400,
                        }}
                      >
                        {" "}
                        Add your work experience
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  bgcolor: "rgba(255, 255, 255, 1)",
                  borderRadius: "10px",
                  pb: 2,
                  px: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "rgba(5, 110, 202, 1)",
                    fontWeight: "500",
                    mt: 2,
                  }}
                >
                  Uploaded resume
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "12px",
                    color: "rgba(117, 117, 117, 1)",
                    fontWeight: "400",
                  }}
                >
                  Your file was successfully uploaded
                </Typography>

                {/* File Upload Box */}
                <Box
                  onClick={() => fileInputRef.current?.click()}
                  sx={{
                    border: error ? "2px dashed red" : "2px dashed #056eca",
                    borderRadius: "12px",
                    position: "relative",
                    px: 2,
                    py: 4,
                    textAlign: "center",
                    mb: 4,
                    mt: 4,
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {/* Trash Icon only shows if a file exists */}
                  {file && (
                    <img
                      src="/authPhotos/resumeProfile/trash-times.svg"
                      alt="Trash Icon"
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        width: 24,
                        height: 24,
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); // <-- Stop the parent click
                        reset(); // clear file
                      }}
                    />
                  )}

                  {/* File Icon */}
                  <img
                    src={
                      error
                        ? "/authPhotos/closebutton.svg"
                        : "/authPhotos/resumeProfile/Buttons.svg"
                    }
                    alt="Upload Icon"
                    style={{
                      width: 50,
                      height: 50,
                      color: error ? "red" : "#25DCE0",
                    }}
                  />

                  {/* File Info */}
                  {file ? (
                    <Box sx={{ mt: 2 }}>
                      <Typography fontWeight={600} sx={{ color: "black" }}>
                        {file.name}
                      </Typography>
                      <Typography fontSize={13} color="gray">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </Typography>
                    </Box>
                  ) : (
                    <Typography fontSize={13} color="gray" sx={{ mt: 2 }}>
                      Click here to upload a file
                    </Typography>
                  )}

                  {/* Error */}
                  {error && (
                    <>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "red",
                          fontSize: "12px",
                          mt: 1,
                        }}
                      >
                        {error}
                      </Typography>
                    </>
                  )}
                </Box>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {file && (
                  <Button
                    variant="outlined"
                    onClick={Replace}
                    sx={{
                      border: "1px solid rgba(5, 110, 202, 1)",
                      borderRadius: "37px",
                      fontSize: "16px",
                      fontWeight: 500,
                      textTransform: "none",
                      width: "100%",
                      height: "40px",
                    }}
                  >
                    Replace File
                  </Button>
                )}
              </Box>

              <Button
                sx={{
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to right, rgba(5, 110, 202, 1), rgba(8, 58, 103, 1))",
                  padding: "8px,16px,8px,16px",
                  borderRadius: "37px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textTransform: "none",
                  width: "100%",
                  height: "40px",
                  mt: 1,
                  mb: 1,
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
