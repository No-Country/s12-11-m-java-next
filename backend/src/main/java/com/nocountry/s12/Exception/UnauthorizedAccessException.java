package com.nocountry.s12.Exception;

public class UnauthorizedAccessException extends RuntimeException {

    public UnauthorizedAccessException() {
        super("Acceso no autorizado: El usuario no tiene permiso para realizar esta acción.");
    }
}
