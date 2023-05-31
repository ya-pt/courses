// import { Drawer, Link, ListItem, ListItemIcon, ListItemText } from "@mui/material"
// import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

// const Basket = (props) => {
//     const {cartOpen, closeCart = Function.prototype, order, removeFromOrder} = props; //С помощью destructuring, из объекта props извлекаются два свойства: order и removeFromOrder.

//     // строим на основе material
//     return(
//         <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
//             <Link>
//                 <ListItem>
//                     <ListItemIcon>
//                         <ShoppingBasket/>
//                     </ListItemIcon>
//                     <ListItemText primary="корзина"/>
//                 </ListItem>
//             </Link>

//         </Drawer>
//     )
// }

// export default Basket