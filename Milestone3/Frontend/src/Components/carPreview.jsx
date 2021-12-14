import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

//the little cards that appear on the homepage that allow you to select which car you want to choose

export default function CarPreview(props) {
  let [item, setItem] = useState();

  useEffect(() => {
    const loadItem = async () => {
      let res = await fetch("http://localhost:3001/api/getCar");
      setItem(await res.json());
    };
    loadItem();
  }, []);

  return (
    <div>
      {item ? (
        item.map((val) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={val.imageID}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.carName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.briefDescription}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button onClick={() => callNewPage(item)} size="small">Learn More</Button> */}
              <Link to="/onboarding/carDetails" state={{ from: val }}>
                Learn More
              </Link>
            </CardActions>
          </Card>
        ))
      ) : (
        <p> Loading ...</p>
      )}
    </div>
  );
}
