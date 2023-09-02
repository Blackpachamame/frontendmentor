export const validarEmail = (email) => {
    const length = email.length;
    return ((length > 8 && length < 50) ? true : false);
};

export const validarPassword = (password) => {
    const length = password.length;
    return ((length >= 8 && length < 20) ? true : false);
};