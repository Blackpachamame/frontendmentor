import { TextField, Button, Box } from "@mui/material";

const Step = ({ data, step, pasos }) => {
    const { inputs, buttonText, onSubmit } = data;

    return (
        <Box
            component="form"
            autoComplete="off"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
            onSubmit={(e) => onSubmit(e, step, pasos)}
        >
            {inputs.map((input, i) => {
                const { label, type, value, valid, onChange, helperText, validator } = input;

                return (
                    <TextField
                        key={i}
                        label={label}
                        variant="filled"
                        fullWidth
                        margin="normal"
                        type={type}
                        error={valid === false}
                        helperText={valid === false && helperText}
                        value={value}
                        onChange={(e) => onChange(e, i, step, validator, pasos)}
                        size="small"
                    />
                );
            })}

            <Button variant="contained" type="submit" sx={{ marginTop: "16px" }}>
                {buttonText}
            </Button>
        </Box>
    );
};

export default Step;
