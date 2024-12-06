import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { listProducts } from './api-product'; 
import { createProduct } from './api-product';
import { updateProduct } from './api-product';
import { removeProduct } from './api-product';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ArrowForward from '@material-ui/icons/ArrowForward';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        // Define your card styles here
    },
    textField: {
        // Define your text field styles here
    },
    error: {
        // Define your error icon styles here
    },
    submit: {
        // Define your submit button styles here
    },
    title: {
        // Define your title styles here
    },
    root: {
        // Define your root styles here
    },
}));

const Products = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;
  
      listProducts(signal).then((data) => {
        if (data && !data.error) {
          setProducts(data);
        }
      });
  
      return function cleanup() {
        abortController.abort();
      };
    }, []);
  
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                All Products
            </Typography>
            <List dense>
                {products.map((item, i) => (
                    <Link component={RouterLink} to={"/products/" + item._id} key={i}>
                        <ListItem button>
                            <ListItemAvatar>
                                {/* <Avatar src={productImage} /> */}
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Paper>
    );
};
export default Products;