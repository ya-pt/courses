import React from 'react';
import { Grid } from "@mui/material";

import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    // строим на основе material
    return (
        <Grid container spacing={2}>{/* сетка-контейнер, может включать в себя spacing={} */}
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>
    );
};

export default GoodsList;