import { Snackbar, Alert } from "@mui/material"

function Snack({isOpen, handleClose = Function.prototype}) {
    return(
        <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
            <Alert severity="success">
                Product added to cart
            </Alert>
        </Snackbar>
    )
}

export default Snack