export const validarNombre = (nombre) => {
    const length = nombre.length;
    return ((length >= 4 && length < 30) ? true : false);
};

export const validarApellido = (apellido) => {
    const length = apellido.length;
    return ((length >= 4 && length < 30) ? true : false);
};

export const validarTelefono = (telefono) => {
    const length = telefono.length;
    return ((length >= 8 && length < 14) ? true : false);
};