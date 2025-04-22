import {
  TextField,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Chip,
  IconButton,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  Box,
  Button,
  InputAdornment,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";

const DocumentLibrary = () => {
  const rows = [
    {
      title: "Savannah Nguyen",
      date: "October 30, 2017",
      status: "In Progress",
      tags: ["Folder"],
    },
    {
      title: "Courtney Henry",
      date: "October 30, 2017",
      status: "In Review",
      tags: ["Drive"],
    },
    {
      title: "Kathryn Murphy",
      date: "October 30, 2017",
      status: "In Progress",
      tags: ["Folder"],
    },
    {
      title: "Arlene McCoy",
      date: "October 30, 2017",
      status: "In Review",
      tags: ["Files"],
    },
    {
      title: "Marvin McKinney",
      date: "October 30, 2017",
      status: "In Review",
      tags: ["Folders"],
    },
    {
      title: "Eleanor Pena",
      date: "October 30, 2017",
      status: "In Review",
      tags: ["Drive"],
    },
    {
      title: "Devon Lane",
      date: "October 30, 2017",
      status: "In Review",
      tags: ["Files"],
    },
  ];

  const getTagColor = (tags) => {
    const isOnlyFolder = tags.length === 1 && tags[0] === "Folder";
    return isOnlyFolder ? "#1dc9b7" : "#a93af9";
  };

  return (
    <>
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
            All Document
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

      <Box
        sx={{
          bgcolor: "#0b1437",
          borderRadius: 2,
          p: 2,
          mt: 4,
          color: "#fff",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "#7f8aad", borderBottom: "1px solid #2c3554" }}
                />
                <TableCell
                  sx={{ color: "#7f8aad", borderBottom: "1px solid #2c3554" }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{ color: "#7f8aad", borderBottom: "1px solid #2c3554" }}
                >
                  Created Add
                </TableCell>
                <TableCell
                  sx={{ color: "#7f8aad", borderBottom: "1px solid #2c3554" }}
                >
                  Tags
                </TableCell>
                <TableCell
                  sx={{ color: "#7f8aad", borderBottom: "1px solid #2c3554" }}
                >
                  File
                </TableCell>
                <TableCell
                  sx={{ color: "#7f8aad", borderBottom: "1px solid #2c3554" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx} hover>
                  <TableCell>
                    <Checkbox sx={{ color: "#5e6eab" }} />
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>{row.title}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>{row.date}</TableCell>
                  <TableCell>
                    {row.tags.map((tag, tagIdx) => (
                      <Chip
                        key={tagIdx}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: getTagColor(row.tags),
                          color: "#fff",
                          fontWeight: 500,
                          mr: 0.5,
                        }}
                      />
                    ))}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    <PictureAsPdfIcon sx={{ color: "#fff" }} />
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" sx={{ color: "#7f8aad" }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#7f8aad" }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="#7f8aad">
            1 - 10 of 460
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2" color="#7f8aad">
              Rows per page:
            </Typography>
            <FormControl size="small">
              <Select
                value={10}
                sx={{
                  color: "#fff",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#2c3554",
                  },
                }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </FormControl>
            <Pagination
              count={46}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#fff",
                  borderColor: "#2c3554",
                },
                "& .Mui-selected": {
                  backgroundColor: "#1dc9b7",
                  color: "#fff",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DocumentLibrary;
