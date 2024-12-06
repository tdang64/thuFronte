import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './home.css'

const useStyles = makeStyles(theme => ({
 card: {
 maxWidth: 1000,
 margin: 'auto',
//  marginTop: theme.spacing(5),
 display: 'flex',
 justifyContent: 'center', 
 alignItems: 'center',  
 marginTop: 300,

 

 },
 logo: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',  
    
             
  },


 media: {
    width: '100%',             // Ensures the image scales to fit within the div
    maxWidth: 300,             // Sets a maximum width for the image
    height: 'auto',            // Maintains aspect ratio
  },
 
}));
export default function Home(){ 
const classes = useStyles()

return ( 
    
    
 <Card className={classes.card}>

 <div className='logo'>
<img src='./assets/logo2.png'></img>
</div>

</Card>  



)
}

