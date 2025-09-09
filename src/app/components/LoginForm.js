"use client";
import styles from "../Login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, setCookie, getCookie } from "cookies-next";
import { toast } from "react-hot-toast";
import Link from "next/link";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Link as MuiLink,
} from "@mui/material";

function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: "",
    firstname: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const isAuthenticated = getCookie("userData");

    if (isAuthenticated) {
      router.push("/home");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (username.trim() === "" || password.trim() === "") {
      setError("required field");
      setIsLoading(false);
      return;
    }
    setUsername("");
    setPassword("");
    //   https://dummyjson.com/auth/login
    try {
      const response = await fetch(" https://dummyjson.com/auth/login ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();

      console.log("my data", data);
      console.log("my data1", data["email"]);

      if (response.ok) {
        setUserInfo({
          username: data.username,
          firstname: data.firstName,
          email: data["email"],
        });
        toast.success("Loggin successfully!");
        console.log("user information :", userInfo);

        setCookie("userData", data);

        router.push("/home");
      } else {
        toast.error("Login failed !!", error.message);
        setError("login failed");
      }
    } catch (err) {
      setError("something went wrong!!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 18,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          boxShadow: 3,
          alignItems: "center",
          padding: 4,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          ></TextField>

          <TextField
            margin="normal"
            required
            fullWidth
            label="password"
            name="password"
            type="password"
            autoComplete="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          ></TextField>
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? "Logging in..." : "LOGIN"}
          </Button>

          <Typography variant="body2">
            Don't have an account?{" "}
            <MuiLink component={Link} href="/signup">
              SignUp
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;
