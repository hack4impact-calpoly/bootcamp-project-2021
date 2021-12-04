import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Data from "../carData.json";
import carDetails from './carDetails';
import history from './history';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default function carPreview(props) {

const callNewPage = (props1) => {
    console.log(history);
    history.push('/carDetails',props1);
    console.log(props1.carName);
}

  return (
      <div>
        {Data.map(item => {
            return(
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.imageID}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.carName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.briefDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button onClick={() => callNewPage(item)} size="small">Learn More</Button> */}
                    <Link
                        to='/onboarding/carDetails'
                        state={{ from: item }}
                        >
                        Learn More
                    </Link>
                    </CardActions>
                </Card>
            )
        })}
      </div>
  );
}
