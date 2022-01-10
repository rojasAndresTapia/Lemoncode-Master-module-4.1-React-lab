import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <form onSubmit={handleNavigation}>
      <Typography variant="h2" gutterBottom component="div" align='center'>Login page</Typography>
      <div>
        <div>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="outlined-basic" label="Username" variant="outlined"
          />
        </div>
        <div>
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic" label="Password" variant="outlined"
          />
        </div>
      </div>

      <Button variant="contained" type="submit">login</Button>
    </form>
  );
};
