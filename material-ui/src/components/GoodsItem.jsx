import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    // строим на основе material
    return (
        <Grid item xs={12} md={4}>{/* сетка-элемент, может включать в себя пропсы, такие как item, (от 1-12) xs, sm, md, lg, xl, и т.д. */}
            <Card>{/* Components */}
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography variant='h6' component="h3">{name}</Typography>
                    <Typography variant='body1'>Цена: {price} грн.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default GoodsItem;