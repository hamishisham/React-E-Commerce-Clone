import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  updateUserProfile,
  updateUserPassword,
  logoutUser,
} from "../redux/slices/authSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get user from Redux store instead of localStorage
  const {
    user,
    loading: reduxLoading,
    error: reduxError,
  } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  // Initialize form states with user data from Redux
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Separate loading states for profile and password updates
  const [profileLoading, setProfileLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  // Update form values if user changes in Redux
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  // Form input handlers
  const onChangeName = (event) => setName(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePhone = (event) => setPhone(event.target.value);

  // Notification helper
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "warn" || type === "error") {
      toast.error(message);
    } else {
      toast.info(message);
    }
  };

  // Handle profile update
  const handleSubmit = async () => {
    if (!name.trim()) {
      notify("Name cannot be empty", "error");
      return;
    }

    if (!email.trim()) {
      notify("Email cannot be empty", "error");
      return;
    }

    // Prepare update data
    const updateData = { name, email, phone };

    setProfileLoading(true);
    try {
      const resultAction = await dispatch(updateUserProfile(updateData));

      if (updateUserProfile.fulfilled.match(resultAction)) {
        notify("Profile updated successfully", "success");
        handleClose();
      } else if (updateUserProfile.rejected.match(resultAction)) {
        notify(resultAction.payload || "Failed to update profile", "error");
      }
    } catch (error) {
      notify("An error occurred while updating your profile", "error");
      console.error("Profile update error:", error);
    } finally {
      setProfileLoading(false);
    }
  };

  // Handle password change
  const handlePasswordChange = async () => {
    // Validate passwords
    if (!oldPassword.trim()) {
      notify("Current password is required", "error");
      return;
    }

    if (!newPassword.trim()) {
      notify("New password is required", "error");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      notify("Passwords don't match", "error");
      return;
    }

    if (newPassword.length < 6) {
      notify("Password must be at least 6 characters", "error");
      return;
    }

    setPasswordLoading(true);
    try {
      const resultAction = await dispatch(
        updateUserPassword({
          oldPassword: oldPassword,
          newPassword: newPassword,
        })
      );

      if (updateUserPassword.fulfilled.match(resultAction)) {
        notify("Password changed successfully", "success");
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");

        // Log out after successful password change
        setTimeout(() => {
          dispatch(logoutUser());
          navigate("/login");
        }, 1500);
      } else if (updateUserPassword.rejected.match(resultAction)) {
        notify(resultAction.payload || "Incorrect password", "error");
      }
    } catch (error) {
      notify("An error occurred while updating your password", "error");
      console.error("Password update error:", error);
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <Box sx={{ px: 5, fontFamily: "Inter" }}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h6" fontWeight="bold">
            Modify Personal Data
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={onChangeName}
            fullWidth
            label="User Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            value={email}
            onChange={onChangeEmail}
            type="email"
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            value={phone}
            onChange={onChangePhone}
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={handleClose}
            disabled={profileLoading}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={profileLoading}
          >
            {profileLoading ? <CircularProgress size={24} /> : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      <Typography variant="h6" sx={{ my: 2, fontWeight: "800" }}>
        User Profile:
      </Typography>
      <Paper elevation={4} sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} container alignItems="center">
            <Typography sx={{ mr: 1, fontWeight: "bold" }}>Name:</Typography>
            <Typography>{user?.name || ""}</Typography>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={handleShow}
            >
              <EditIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography sx={{ fontWeight: "bold" }}>Edit</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <Typography sx={{ mr: 1, fontWeight: "bold" }}>Phone:</Typography>
            <Typography>{user?.phone || "Not set"}</Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center">
            <Typography sx={{ mr: 1, fontWeight: "bold" }}>Email:</Typography>
            <Typography>{user?.email || ""}</Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, fontWeight: "bold" }}>
          Change Password
        </Typography>
        <TextField
          type="password"
          fullWidth
          label="Enter Old Password"
          variant="outlined"
          margin="normal"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          type="password"
          fullWidth
          label="Enter New Password"
          variant="outlined"
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          type="password"
          fullWidth
          label="Confirm New Password"
          variant="outlined"
          margin="normal"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePasswordChange}
            disabled={passwordLoading}
          >
            {passwordLoading ? <CircularProgress size={24} /> : "Save Password"}
          </Button>
        </Box>
      </Paper>
      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
};

export default UserProfile;
