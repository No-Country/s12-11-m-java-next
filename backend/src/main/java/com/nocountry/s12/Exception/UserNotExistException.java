package com.nocountry.s12.Exception;

public class UserNotExistException extends RuntimeException {

	
    public UserNotExistException(){
        super("No existe un usuario con ese id/email");
    }
}
