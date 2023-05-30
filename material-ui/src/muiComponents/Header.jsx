// строим на основе material

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <AppBar position="static"> {/* изменяем позиционирование на default значение */}
      <Toolbar>
        <Typography variant="h6" component="span" sx={{flexGrow: 1}}> {/* sx(добавляет стили), variant(указывает размер), component(указываем тег)*/}
          MUI shop
        </Typography>
        <IconButton color="inherit"> {/* наследуем цвет toolbar*/}
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
