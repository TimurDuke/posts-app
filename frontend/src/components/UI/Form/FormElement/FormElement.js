import React from 'react';
import {Grid, TextField} from "@mui/material";

const FormElement = ({name, value, onChange, label, error, type, required}) => (
    <Grid item xs={12}>
        <TextField
            fullWidth
            autoComplete={name}
            label={label}
            name={name}
            type={type}
            required={required}
            value={value.username}
            onChange={onChange}
            error={Boolean(error)}
            helperText={error}
        />
    </Grid>
);

export default FormElement;