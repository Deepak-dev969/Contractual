import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  AccountCircle,
  LocationOn,
  Email,
  Lock,
  Business,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Signupimg from "../../../assets/svg/signup.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  const textFieldStyle = {
    backgroundColor: "#2e2e2e",
    borderRadius: "12px",
    "& .MuiInputBase-root": {
      color: "#fff",
      backgroundColor: "#2e2e2e",
      borderRadius: "10px",
    },
    "& .MuiInputBase-root:hover": {
      color: "#fff",
      border: "1px solid #EB19CC",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#bdbdbd",
    },
    "& .MuiInputBase-root:focus": {
      color: "#fff",
      border: "1px solid #EB19CC",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EB19CC",
    },
    "& .MuiInputAdornment-root": {
      color: "#bdbdbd",
    },

    "& .MuiOutlinedInput-root.Mui-focused": {
      backgroundColor: "#2e2e2e",
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px #2e2e2e inset",
      WebkitTextFillColor: "#fff",
      transition: "background-color 5000s ease-in-out 0s",
    },
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyAddress: "",
    email: "",
    password: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    if (name === "password") {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
      if (!regex.test(value)) {
        setPasswordError(
          "Password must be 8+ characters and include uppercase, lowercase, number, and special character."
        );
      } else {
        setPasswordError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agree && !passwordError) {
      const userData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Signup successful!");
    } else {
      alert("Please fill all fields correctly and accept terms.");
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.companyName &&
      formData.companyAddress &&
      formData.email &&
      formData.password &&
      formData.agree &&
      passwordError === ""
    );
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#777",
        color: "#fff",
      }}
    >
      {/* Left form section */}
      <div
        style={{
          flex: 1,
          background: "#000",

          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "1.5rem",
          paddingRight: "0",
        }}
      >
        <Box
          sx={{
            width: "97%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            backgroundColor: "transparent",
            border: "4px solid #2e2e2e",
            borderRight: "none",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            padding: "2rem",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",

              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontSize: "2.9rem",

                fontWeight: 700,
                background: "linear-gradient(to right, #eb19cc, #14e8dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "3.5rem",
              }}
            >
              Get Started
            </Typography>
            <Typography variant="body1" mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography>
            <div style={{ display: "flex", gap: "16px", marginBottom: 5 }}>
              <div style={{ width: "100%" }}>
                <label
                  htmlFor="firstName"
                  style={{
                    color: "#bdbdbd",
                    fontSize: "0.9rem",
                    marginBottom: 4,
                    display: "block",
                  }}
                >
                  First Name
                </label>
                <TextField
                  fullWidth
                  name="firstName"
                  id="firstName"
                  label=""
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  sx={textFieldStyle}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label
                  htmlFor="lastName"
                  style={{
                    color: "#bdbdbd",
                    fontSize: "0.9rem",
                    marginBottom: 4,
                    display: "block",
                  }}
                >
                  Last Name
                </label>
                <TextField
                  fullWidth
                  name="lastName"
                  id="lastName"
                  label=""
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  sx={textFieldStyle}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="companyName"
                style={{
                  color: "#bdbdbd",
                  fontSize: "0.9rem",
                  marginBottom: 4,
                  display: "block",
                }}
              >
                Company Name
              </label>
              <TextField
                fullWidth
                name="companyName"
                id="companyName"
                label=""
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business />
                    </InputAdornment>
                  ),
                }}
                sx={textFieldStyle}
              />
              <label
                htmlFor="companyAddress"
                style={{
                  color: "#bdbdbd",
                  fontSize: "0.9rem",
                  margin: "10px 0 4px",
                  display: "block",
                }}
              >
                Company Address
              </label>
              <TextField
                fullWidth
                name="companyAddress"
                id="companyAddress"
                placeholder="Company Address"
                label=""
                value={formData.companyAddress}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
                sx={textFieldStyle}
              />
              <label
                htmlFor="email"
                style={{
                  color: "#bdbdbd",
                  fontSize: "0.9rem",
                  margin: "10px 0 4px",
                  display: "block",
                }}
              >
                Email
              </label>
              <TextField
                fullWidth
                name="email"
                id="email"
                placeholder="Email"
                label=""
                type="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                sx={textFieldStyle}
              />
              <label
                htmlFor="password"
                style={{
                  color: "#bdbdbd",
                  fontSize: "0.9rem",
                  margin: "10px 0 4px",
                  display: "block",
                }}
              >
                Password
              </label>
              <TextField
                fullWidth
                name="password"
                id="password"
                label=""
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                error={!!passwordError}
                helperText={passwordError}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handlePasswordVisibilityToggle}
                        edge="end"
                        sx={{ color: "#fff" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={textFieldStyle}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!isFormValid()}
              sx={{
                background: "linear-gradient(to right, #dc28ce, #1fd1f9)",
                color: "#fff",
                padding: "10px 0",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "capitalize",
                mt: 2,
                opacity: isFormValid() ? 1 : 0.5,
                cursor: isFormValid() ? "pointer" : "not-allowed",
              }}
            >
              Signup
            </Button>
            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  sx={{
                    color: "#fff",
                    marginTop: "10px",
                    "&.Mui-checked": {
                      color: "#E61ECC",
                      transform: "scale(1.1)",
                      transition: "all 0.3s ease-in-out",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                      borderRadius: "4px",
                      backgroundColor: "#fff",
                      border: "2px solid #fff",
                      transition: "all 0.3s ease-in-out",
                    },
                    "&.Mui-checked .MuiSvgIcon-root": {
                      borderColor: "#E61ECC",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "#fff",
                    marginTop: "20px",
                    fontWeight: "100",
                    fontSize: "0.9rem",
                  }}
                >
                  Yes, I understand and agree to{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="underline underline-offset-4 font-semibold"
                  >
                    Terms of service
                  </Link>
                  , including the{" "}
                  <Link
                    to="/user-agreement"
                    className="underline underline-offset-4 font-semibold"
                  >
                    User Agreement
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="underline underline-offset-4 font-semibold"
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
            <Typography variant="body2" textAlign="center" mt={2}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#14E4D6", fontWeight: 500 }}>
                Log in
              </Link>
            </Typography>
          </Box>
        </Box>
      </div>

      {/* Right image section */}
      <div
        className="bg-no-repeat bg-center bg-cover w-[45vw]"
        style={{
          backgroundImage: `url(${Signupimg})`,
          backgroundSize: "cover",
          // backgroundPosition: "bottom cente",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "95%",
            p: 2,
            color: "#fff",
            textAlign: "right",
            fontWeight: "bold",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              .Contractual.
            </Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
