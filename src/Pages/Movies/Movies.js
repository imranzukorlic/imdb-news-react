import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Moviess.css";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";

const Movies = () => {
  const [result, setResult] = useState([]);
  const navigation = useNavigate();

  const getApi = () => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/k_f5o792qu/`)
      .then((res) => {
        setResult(res.data.items);
        console.log(res.data.items);
      });
  };

  React.useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="row">
      {result
        .map((el) => {
          return (
            <Card
              sx={{ width: 245 }}
              key={el.id}
              onClick={() =>
                navigation(`/movies/${el.id}`, {
                  state: {
                    serias: el,
                  },
                })
              }
            >
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
        })
        .slice(0, 3)}
    </div>
  );
};

export default Movies;
