import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import { Delete, Search, FilePresent, Description } from "@mui/icons-material";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";

const data = [
  "Savannah Nguyen",
  "Courtney Henry",
  "Kathryn Murphy",
  "Arlene McCoy",
  "Marvin McKinney",
  "Eleanor Pena",
  "Devon Lane",
];

const Solicitations = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#000", color: "#fff", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5" color="#fff" sx={{ fontWeight: "bold" }}>
            All Solicitations
          </Typography>
        </Box>
        <Box sx={{ gap: "10px", display: "flex", flexDirection: "row" }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
              sx: {
                color: "#fff",
                backgroundColor: "#1111",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #fff",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #fff",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #fff",
                },
              },
            }}
            inputProps={{
              style: { color: "#fff" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #D72CCD, #14E8DD)",
              color: "#fff",
              transition: "all 0.9s ease",
              gap: 1,
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(45deg, #14E8DD, #D72CCD)",
              },
            }}
          >
            <PersonAddAltSharpIcon />
            Add New
          </Button>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#111C44", borderRadius: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>
                <Checkbox sx={{ color: "#fff" }} />
              </TableCell>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>File</TableCell>
              <TableCell sx={{ color: "#fff" }}>AI Output</TableCell>
              <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((name, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox sx={{ color: "#fff" }} />
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>{name}</TableCell>
                <TableCell sx={{ color: "#fff" }}>October 30, 2017</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  <FilePresent />
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  <Description />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Delete sx={{ color: "#fff" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography variant="body2" sx={{ color: "#888" }}>
          1 - 10 of 460
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: 1, color: "#888" }}>
            Rows per page:
          </Typography>
          <Select
            size="small"
            value={10}
            sx={{ color: "#fff", backgroundColor: "#1A1A2E" }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default Solicitations;
