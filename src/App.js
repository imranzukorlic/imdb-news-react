import "./App.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [finale, setFinale] = useState("");
  const [result, setResult] = useState([]);
  const getApi = () => {
    axios
      .get(`https://imdb-api.com/en/API/SearchTitle/k_12345678/${finale}`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      });
  };
  React.useEffect(() => {
    getApi();
  }, [finale]);
  return (
    <div className="App">
      <TextField
        helperText="Please enter movie or serie name"
        id="text"
        label="Name"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          console.log(finale);
          setFinale(inputText);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default App;
