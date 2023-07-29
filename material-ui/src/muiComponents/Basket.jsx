import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from "@mui/material"
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;

    return(
        <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
            <List sx={{ width: '400px' }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Basket"/>
                </ListItem>
                <Divider />

                {!order.length ? (
                        <ListItem> Basket empty! </ListItem>
                    ) : (
                        <Box>
                            { 
                                order.map((item) => (
                                    <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/> //{...item} -  оператор распыления, все свойства объекта item будут переданы как отдельные пропсы в компонент BasketItem
                                )) 
                            }
                            <Divider/>
                            <ListItem>
                                <Typography sx={{ fontWeight: '700' }}>
                                    Общая стоимость:{' '}
                                    {order.reduce((acc, item) => {
                                        return acc + item.price * item.quantity;
                                    }, 0)}{' '}
                                    грн.
                                </Typography>
                            </ListItem>
                        </Box>
                    )
                }
            </List>

        </Drawer>
    )
}

export default Basket