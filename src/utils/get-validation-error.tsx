import { TypeWithKey } from "../models"

export const getValidationErrors = (errorCode: string) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: 'Error en la Red',
    };

    return codeMatcher[errorCode] || 'Error desconocido';
};