import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CallMadeIcon from "@mui/icons-material/CallMade";
import TuneIcon from "@mui/icons-material/Tune";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DocsIcon from "../../../../assets/svg/document-chart1.svg";

const data = [
  { month: "Jan", product: 8000, status: 4000 },
  { month: "Feb", product: 12000, status: 9000 },
  { month: "Mar", product: 18000, status: 16000 },
  { month: "Apr", product: 15000, status: 11000 },
  { month: "May", product: 22000, status: 13000 },
  { month: "Jun", product: 24000, status: 20000 },
  { month: "Jul", product: 28000, status: 15000 },
  { month: "Aug", product: 30000, status: 25000 },
  { month: "Sep", product: 35000, status: 20000 },
  { month: "Oct", product: 37000, status: 30000 },
  { month: "Nov", product: 40000, status: 23000 },
  { month: "Dec", product: 42000, status: 28000 },
];

const formatK = (value) => `${value / 1000}k`;

const ChartDashboard = () => {
  const CustomTuneIcon = (props) => (
    <TuneIcon {...props} sx={{ color: "#fff" }} />
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#1c1f3b",
            border: "1px solid #2c3554",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p style={{ color: "#fff", marginBottom: 5 }}>{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: "#fff", margin: 0 }}>
              {entry.name.charAt(0).toUpperCase() + entry.name.slice(1)}:{" "}
              {formatK(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Box
      display="flex"
      //gap={2}
      flexWrap="wrap"
      sx={{
        background: "linear-gradient(to right, #0b1437, #0e1a42)",
        borderRadius: 3,
        border: "1px solid #313D4F",
        //  padding: 2,

        width: "100%",
        height: 450,
        color: "#fff",
      }}
    >
      <Box flex={2} sx={{ p: 3, borderRight: "2px solid #2c3554" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Box>
            <Typography variant="body2" color="#7f8aad">
              Total Solicitations
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              240.8K{" "}
              <Typography
                component="span"
                sx={{
                  color: "#1dc9b7",
                  fontSize: 14,
                  padding: ".2rem",
                  borderRadius: "3px",
                  background: "#05C16833",
                }}
              >
                24.8% <CallMadeIcon fontSize="small" />
              </Typography>
            </Typography>
          </Box>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                width={10}
                height={10}
                borderRadius="50%"
                bgcolor="#a93af9"
              />
              <Typography variant="caption" color="#7f8aad">
                Total Product
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                width={10}
                height={10}
                borderRadius="50%"
                bgcolor="#1dc9b7"
              />
              <Typography variant="caption" color="#7f8aad">
                Operating Status
              </Typography>
            </Stack>
            <Select
              size="small"
              defaultValue="this_year"
              variant="outlined"
              IconComponent={CustomTuneIcon}
              sx={{
                fontSize: 12,
                width: 110,
                height: 30,
                borderColor: "#2c3554",
                color: "#fff",
                background: "#0A1330",
                ".MuiSelect-icon": {
                  color: "#fff",
                },
              }}
            >
              <MenuItem value="this_year">This Year</MenuItem>
              <MenuItem value="last_year">Last Year</MenuItem>
            </Select>
          </Stack>
        </Stack>

        <ResponsiveContainer width="100%" height={330}>
          <LineChart data={data}>
            {/* <CartesianGrid stroke="#2c3554" strokeDasharray="3 3" /> */}
            <XAxis dataKey="month" stroke="#7f8aad" />
            <YAxis stroke="#7f8aad" tickFormatter={formatK} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="product"
              stroke="#a93af9"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="status"
              stroke="#00C2FF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* <Box display="flex" flexDirection="row"> */}
      <Box flex={1} display="flex" flexDirection="column">
        <Box
          sx={{ padding: "10px 16px" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            {" "}
            <Typography variant="h5" fontWeight={600} fontSize={30}>
              Documents
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#C919B7B2",
              borderRadius: "50%",
              width: 35,
              height: 35,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <DocsIcon fontSize="small" /> */}
            <img src={DocsIcon} alt="DocsIcon" />
          </Box>
        </Box>

        <Box>
          <Card
            sx={{
              backgroundColor: "transparent",
              borderRadius: 3,

              px: 2,
              py: 2,
              height: "48%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  color="#fff"
                  fontSize={18}
                  sx={{ fontWeight: 550 }}
                >
                  Total Products
                </Typography>
              </Stack>
              <Typography
                variant="h6"
                mt={1}
                color="#fff"
                sx={{ fontWeight: 700, fontSize: "2rem" }}
              >
                2,318
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <span className="text-[#1dc9b7] mr-2">
                  {" "}
                  <TrendingUpIcon
                    fontSize="inherit"
                    sx={{ marginRight: "4px" }}
                  />{" "}
                  +6.08%{" "}
                </span>{" "}
                Up from yesterday
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              backgroundColor: "transparent",
              // borderRadius: 3,
              px: 2,
              py: 2,
              height: "48%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderTop: "2px solid #2c3554",
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  color="#fff"
                  fontSize={18}
                  sx={{ fontWeight: 550 }}
                >
                  New Uploaded
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#91DA35B2",
                    borderRadius: "50%",
                    width: 35,
                    height: 35,
                    //padding: "",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CloudUploadIcon fontSize="small" sx={{ color: "#fff" }} />
                </Box>
              </Stack>
              <Typography
                variant="h6"
                mt={1}
                color="#fff"
                sx={{ fontWeight: 700, fontSize: "2rem" }}
              >
                3,671
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <span className="text-[#1dc9b7] mr-2">
                  <TrendingUpIcon
                    fontSize="inherit"
                    sx={{ marginRight: "4px" }}
                  />{" "}
                  +6.08%{" "}
                </span>{" "}
                Up from yesterday
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default ChartDashboard;
