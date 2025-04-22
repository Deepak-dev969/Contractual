import {
  Paper,
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
} from "@mui/material";
import { useState } from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProposalsTable = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "title",
    direction: "asc",
  });

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <UnfoldMoreIcon sx={{ fontSize: 18, color: "#8f9bb3" }} />;
    }
    return sortConfig.direction === "asc" ? (
      <ExpandLessIcon sx={{ fontSize: 18, color: "#8f9bb3" }} />
    ) : (
      <ExpandMoreIcon sx={{ fontSize: 18, color: "#8f9bb3" }} />
    );
  };

  const rows = [
    {
      title: "Lorem Ipsum is simply dummy text",
      date: "October 30, 2017",
      status: "In Progress",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      date: "October 30, 2017",
      status: "In Review",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      date: "October 30, 2017",
      status: "In Progress",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      date: "October 30, 2017",
      status: "In Review",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      date: "October 30, 2017",
      status: "In Review",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      date: "October 30, 2017",
      status: "In Review",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const allChecked = selectedRows.length === rows.length;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < rows.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(rows.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Paper
      sx={{
        bgcolor: "#0b1437",
        borderRadius: 2,
        p: 2,
        mt: 4,
        color: "#fff",
        border: "1px solid #313D4F",
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Proposals
      </Typography>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#7f8aad",
                  backgroundColor: "#0B1437",
                  borderBottom: "1px solid #2c3554",
                }}
              >
                <Checkbox
                  indeterminate={isIndeterminate}
                  checked={allChecked}
                  onChange={handleSelectAll}
                  sx={{ color: "#5e6eab" }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#7f8aad",
                  backgroundColor: "#0B1437",
                  borderBottom: "1px solid #2c3554",
                }}
              >
                Title {renderSortIcon("title")}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7f8aad",
                  backgroundColor: "#0B1437",
                  borderBottom: "1px solid #2c3554",
                }}
              >
                Created At {renderSortIcon("date")}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7f8aad",
                  backgroundColor: "#0B1437",
                  borderBottom: "1px solid #2c3554",
                }}
              >
                Status {renderSortIcon("status")}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7f8aad",
                  backgroundColor: "#0B1437",
                  borderBottom: "1px solid #2c3554",
                }}
              >
                File
              </TableCell>
              <TableCell
                sx={{
                  color: "#7f8aad",
                  backgroundColor: "#0B1437",
                  borderBottom: "1px solid #2c3554",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                hover
                sx={{
                  "&:hover": {
                    backgroundColor: "#0A1330",
                  },
                }}
              >
                <TableCell sx={{ borderBottom: "none" }}>
                  <Checkbox
                    checked={selectedRows.includes(index)}
                    onChange={() => handleSelectRow(index)}
                    sx={{ color: "#5e6eab" }}
                  />
                </TableCell>
                <TableCell sx={{ color: "#fff", border: "none" }}>
                  {row.title}
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "none" }}>
                  {row.date}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Chip
                    label={
                      <Box display="flex" alignItems="center" gap={1}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor:
                              row.status === "In Progress"
                                ? "#00c19e"
                                : "#c039f7",
                          }}
                        />
                        {row.status}
                      </Box>
                    }
                    size="small"
                    sx={{
                      bgcolor:
                        row.status === "In Progress" ? "#003f3b" : "#2c004b",
                      color:
                        row.status === "In Progress" ? "#14CA74" : "#EB19CC",
                      fontWeight: 500,
                      px: 0.1,
                      borderRadius: "3px",
                      fontSize: "0.75rem",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ color: "#fff", borderBottom: "none" }}>
                  <PictureAsPdfIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" component="span" ml={1}>
                    PDF
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
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
    </Paper>
  );
};

export default ProposalsTable;
