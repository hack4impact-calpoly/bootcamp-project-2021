import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

//this is the page that shows up when you click on one of the cars on the home page. The same object of data is passed from the carPreview component

export default function CarDetails() {
  const [newCarSpec, setNewCarSpec] = React.useState("");
  const [newCarFact, setNewCarFact] = React.useState("");
  const location = useLocation();
  const { from } = location.state;
  return (
    <div>
      <div>
        <Typography
          paddingBottom="10px"
          align="center"
          variant="h5"
          component="div"
        >
          {from.carName}
        </Typography>
        <Typography>{from.briefDescription}</Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={from.imageID}
            alt="green iguana"
          />
        </Card>
      </div>
      <div>
        <Typography
          paddingBottom="10px"
          align="start"
          variant="h5"
          component="div"
        >
          Car Specs
        </Typography>
        {from.carSpecs.map((item) => {
          console.log(item);
          return <li>{item}</li>;
        })}
      </div>
      <div>
        <input
          placeholder="Add a car spec"
          value={newCarSpec}
          onChange={(e) => {
            setNewCarSpec(e.target.value);
          }}
        />
      </div>
      <div>
        <Typography
          paddingBottom="10px"
          align="start"
          variant="h5"
          component="div"
        >
          Car Facts
        </Typography>
        {from.carFacts.map((item) => {
          console.log(item);
          return <li>{item}</li>;
        })}
      </div>
      <div>
        <input
          placeholder="Add a car fact"
          value={newCarFact}
          onChange={(e) => {
            setNewCarFact(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
