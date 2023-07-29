import { IconButton, ListItem, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const BasketItem = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography>
                {name} {price}грн x{quantity}
            </Typography>
            <IconButton onClick={() => removeFromOrder(id)}>
                <CloseIcon/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;