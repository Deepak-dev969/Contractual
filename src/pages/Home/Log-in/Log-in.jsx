import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Signupimg from "../../../assets/svg/signup.svg";
import loginhandicon from "../../../assets/svg/loginHelloicon.svg";
import GoogleIcon from "../../../assets/svg/Google.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const textFieldStyle = {
    backgroundColor: "#2e2e2e",
    borderRadius: "10px",
    "& .MuiInputBase-root": {
      color: "#fff",
      backgroundColor: "#2e2e2e",
      borderRadius: "10px",
    },
    "& .MuiInputBase-root:hover": {
      color: "#fff",
      border: "1px solid #EB19CC",
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
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px #2e2e2e inset",
      WebkitTextFillColor: "#fff",
      transition: "background-color 5000s ease-in-out 0s",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      {/* Left Image Panel */}
      <Box
        sx={{
          width: "50%",
          backgroundImage: `url(${Signupimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            .Contractual.
          </Link>
        </Typography>
      </Box>

      {/* Right Login Form */}
      <Box
        sx={{
          width: "50%",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            background: "#000",
            borderRadius: "30px",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            border: "4px solid #2e2e2e",
            borderLeft: "none",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "95%",
            boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.05)",
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
              sx={{
                fontSize: "2.9rem",
                py: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #eb19cc, #14e8dd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "3.5rem",
                display: "flex",
                gap: "10px",
                mb: 1,
              }}
            >
              Welcome Back <img src={loginhandicon} alt="hand" />
            </Typography>

            <Typography sx={{ color: "#ccc", mb: 3 }}>
              Lorem ipsum dolor sit amet, consectetur.
            </Typography>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2, ...textFieldStyle }}
              InputLabelProps={{ style: { color: "#999" } }}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 1, ...textFieldStyle }}
              InputLabelProps={{ style: { color: "#999" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      style={{ color: "#ccc" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box textAlign="right" mb={2}>
              <Link
                to="/forgot-password"
                style={{ color: "#fff", fontSize: "0.85rem" }}
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #dc28ce, #1fd1f9)",
                color: "#fff",
                py: 1.2,
                fontWeight: "bold",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Sign in
            </Button>

            <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
              <Box sx={{ flex: 1, height: "2px", backgroundColor: "#fff" }} />
              <Typography sx={{ mx: 2, color: "#fff" }}>Or</Typography>
              <Box sx={{ flex: 1, height: "2px", backgroundColor: "#fff" }} />
            </Box>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<img src={GoogleIcon} alt="Google" width={20} />}
              sx={{
                borderColor: "#444",
                color: "rgba(49, 57, 87, 1)",
                backgroundColor: "#fff",
                textTransform: "none",
                py: 1.2,
                borderRadius: "10px",
              }}
            >
              Sign in with Google
            </Button>

            <Typography variant="body1" textAlign="center" mt={3} color="#fff">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: "#14e8dd",
                  fontWeight: 400,
                  textDecoration: "underline",
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
