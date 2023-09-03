import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function FunHeader({handleCart, orderLength}) {
  return (
    <AppBar position="static"> {/* изменяем позиционирование на default значение */}
      <Toolbar>
        <Typography variant="h6" component="span" sx={{flexGrow: 1}}> {/* sx(добавляет стили), variant(указывает размер), component(указываем тег)*/}
          MUI shop
        </Typography>
        <IconButton onClick={handleCart} color="inherit"> {/* наследуем цвет toolbar*/}
          <Badge color="secondary" badgeContent={orderLength}>
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default FunHeader;
