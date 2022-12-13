import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, Select } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloseIcon from '@mui/icons-material/Close';
export default function FormProduct() {
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(true);
    //const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
                textAlign: 'center',
                alignItems: 'right'
            }}
            noValidate
            autoComplete="off"
        >
            <Button sx={{ mr: -55 }} open={open} onClick={handleClose}>
                <CloseIcon />
            </Button>
            <div>
                <TextField required id="outlined-required" label="Ma san pham" />
                <TextField id="outlined-password-input" label="Ten San pham" />
                <TextField
                    id="outlined-number"
                    label="So luong"
                    type="number"
                    // InputLabelProps={{
                    //     shrink: true
                    // }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Ngày nhập"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <TextField id="outlined-khoiluong" label="Khối lượng" />
                <TextField id="outlined-gia" type="number" label="Giá" />
                <TextField id="outlined-khoiluong" label="Khu vực" />
                <TextField id="outlined-khoiluong" label="Nhà cung cấp" />
                <Select labelId="demo-simple-   select-label" id="demo-simple-select" value={age} label="Age"></Select>
            </div>
            <div>
                <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }}>
                    Save
                </Button>
            </div>
        </Box>
    );
}
