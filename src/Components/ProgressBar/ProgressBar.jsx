import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PushPinIcon from "@mui/icons-material/PushPin";
import employeeImage from '../../Images/card1.png'; // Add your image path here

const Dashboard = () => {
  return (
    <Box p={4} sx={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      {/* Dashboard Heading */}
      <Typography variant="h4" fontWeight="bold" mb={4} color="#333">
        Dashboard
      </Typography>

      {/* Statistics Section */}
      <Grid container spacing={3}>
        {/* Available Position Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #FFD5C2, #FF9A74)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              color: "#333",
            }}
          >
            <CardContent>
              <Typography variant="h5">Available Position</Typography>
              <Typography variant="h3" fontWeight="bold" mt={2}>
                24
              </Typography>
              <Typography color="error">4 Urgently needed</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Job Open Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #E3E7FF, #8FA4FF)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              color: "#333",
            }}
          >
            <CardContent>
              <Typography variant="h5">Job Open</Typography>
              <Typography variant="h3" fontWeight="bold" mt={2}>
                10
              </Typography>
              <Typography color="primary">4 Active hiring</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* New Employees Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #FFE3F0, #FF8EAF)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              color: "#333",
            }}
          >
            <CardContent>
              <Typography variant="h5">New Employees</Typography>
              <Typography variant="h3" fontWeight="bold" mt={2}>
                24
              </Typography>
              <Typography color="secondary">4 Departments</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Total Employees and Talent Request */}
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              position: "relative",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <CardContent>
              <Typography variant="h5" color="#333">Total Employees</Typography>
              <Typography variant="h3" fontWeight="bold" mt={2} color="#333">
                216
              </Typography>
              <Typography color="textSecondary">120 Men, 96 Women</Typography>
              <Typography color="error">+2% Past month</Typography>
            </CardContent>
            <img
              src={employeeImage}
              alt="Employees"
              style={{
                position: "absolute",
                right: "16px",
                top: "16px",
                width: "180px",
                height: "150px",
              }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              position: "relative",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <CardContent>
              <Typography variant="h5" color="#333">Talent Request</Typography>
              <Typography variant="h3" fontWeight="bold" mt={2} color="#333">
                16
              </Typography>
              <Typography color="textSecondary">6 Men, 10 Women</Typography>
              <Typography color="error">+5% Past month</Typography>
            </CardContent>
            <img
              src={employeeImage}
              alt="Talent Request"
              style={{
                position: "absolute",
                right: "16px",
                top: "16px",
                width: "180px",
                height: "150px",
              }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* Announcement and Recently Activity */}
      <Grid container spacing={3} mt={3}>
        {/* Announcement Section */}
        <Grid item xs={12} sm={8}>
          <Card sx={{ backgroundColor: "#fff", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)" }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight="bold" color="#333">
                  Announcement
                </Typography>
                <Button variant="text" color="primary" sx={{ fontWeight: "bold" }}>
                  Today, 13 Sep 2021
                </Button>
              </Box>

              {/* Announcement Items */}
              <Box mt={2}>
                {["Outing schedule for every department", "Meeting HR Department", "IT Department needs two more talents for UX/UI Designer position"].map(
                  (announcement, index) => (
                    <Box
                      key={index}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={2}
                      p={2}
                      bgcolor="#F9F9F9"
                      borderRadius={2}
                      boxShadow={2}
                      sx={{
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Box>
                        <Typography variant="body1" fontWeight="bold" color="#555">
                          {announcement}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {index === 0 ? "5 Minutes ago" : index === 1 ? "Yesterday, 12:30 PM" : "Yesterday, 09:15 AM"}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton>
                          <PushPinIcon />
                        </IconButton>
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  )
                )}
              </Box>

              <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                See All Announcements
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Recently Activity Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#232454", color: "white", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Typography variant="h6" color="inherit">
                Recently Activity
              </Typography>
              <Typography color="inherit" mt={2}>
                10:40 AM, Fri 10 Sept 2021
              </Typography>
              <Typography variant="body1" color="inherit" mt={1}>
                You Posted a New Job
              </Typography>
              <Typography variant="body2" color="inherit" mt={1}>
                Kindly check the requirements and terms of work and make sure
                everything is right. Today you made 12 Activities.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "red" }}
                fullWidth
              >
                See All Activity
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Upcoming Schedule */}
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12}>
          <Card sx={{ bgcolor: "#F0F4FF", borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight="bold" color="#333">
                  Upcoming Schedule
                </Typography>
                <Button variant="text" color="primary" sx={{ fontWeight: "bold" }}>
                  Today, 13 Sep 2021
                </Button>
              </Box>

              {/* Schedule Items */}
              <Box mt={2}>
                {[
                  { task: "Review candidate applications", time: "Today - 11:30 AM" },
                  { task: "Interview with candidates", time: "Today - 10:30 AM" },
                  { task: "Short meeting with product designer from IT Department", time: "Today - 09:15 AM" },
                ].map((schedule, index) => (
                  <Box
                    key={index}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                    p={2}
                    bgcolor="#F9F9F9"
                    borderRadius={2}
                    boxShadow={1}
                    sx={{
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography variant="body1" fontWeight="medium" color="#555">
                      {schedule.task}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {schedule.time}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button fullWidth variant="contained" color="error" sx={{ mt: 2 }}>
                Create a New Schedule
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
