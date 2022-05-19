import React from 'react'
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dishes } from './Dishes';
import {useDispatch} from 'react-redux'
import {addItem} from '../slices/thaliSlice'

const Home = () => {
    const dispatch=useDispatch();

    const handleClick=(ele)=>{
        dispatch(addItem(ele));
       }
  return (
      
    <>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
      {
        Dishes.map((ele)=>{
          const {  title, img, price, quantity, description } = ele
          return(
            <div className='card'>

              <Card sx={{ maxWidth: 600 }}>
               <CardMedia
                 component="img"
                 height="140"
                 image={img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity:{quantity}
                  <br/>
                  Price: {price}
                </Typography>
              </CardContent>
             <CardActions>
                <Button size="small"  onClick={()=>handleClick(ele)}>Add to Cart</Button>
             </CardActions>
             </Card>
            </div>
       
     
          )
       })
     }
   </div>
 </>
  )
}

export default Home