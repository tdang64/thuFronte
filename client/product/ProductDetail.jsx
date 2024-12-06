import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Paper, Typography, List, ListItem, ListItemText, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getProductById } from './api-product';
import Edit from '@material-ui/icons/Edit';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
  },
  title: {
    marginTop: theme.spacing(3),
    color: theme.palette.protectedTitle,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getProductById(productId).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setProduct(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        Product Details
      </Typography>
      <List>
        <ListItem>
          <Avatar className={classes.avatar} src={product.image} />
          <ListItemText primary="Name" secondary={product.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Price" secondary={`$${product.price}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Quantity" secondary={product.quantity} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Description" secondary={product.description} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Category" secondary={product.category} />
        </ListItem>
      </List>     
      <IconButton component={Link} to="/products" color="secondary">
        <ArrowBack />
      </IconButton>
    </Paper>
  );
};

export default ProductDetail;