import React from 'react';
import { Grid } from "@mui/material";

import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const { goods, setOrder } = props; //обязательные пропсы при добавлении компонента

    // строим на основе material
    return (
        <Grid container spacing={2}>{/* сетка-контейнер, может включать в себя spacing={} */}
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} /> //{...item} -  оператор распыления, все свойства объекта item будут переданы как отдельные пропсы в компонент GoodsItem
            ))}
        </Grid>
    );
};

export default GoodsList;