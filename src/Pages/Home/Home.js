import "./Home.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [finale, setFinale] = useState("");
  const [result, setResult] = useState([]);
  const getApi = (finale) => {
    axios
      .get(`https://imdb-api.com/en/API/SearchTitle/k_f5o792qu/${finale}`)
      .then((res) => {
        setResult(res.data.results?.splice(0, 3));
        // console.log(res.data.results);
      });
  };
  React.useEffect(() => {
    getApi(finale);
  }, [finale]);

  return (
    <div className="App">
      <div className="input">
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
      <div className="row">
        {result?.map((el) => {
          return (
            <Card sx={{ width: 245 }} key={el.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={el.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {el.crew}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
