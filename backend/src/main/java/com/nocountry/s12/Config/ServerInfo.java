package com.nocountry.s12.Config;

import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

import java.net.InetAddress;

@Component
public class ServerInfo {

    
    private String serverAddress;

    @PostConstruct
    public void init() {
        try {
            // Obtener la dirección IP del sistema
            String systemIp = InetAddress.getLocalHost().getHostAddress();

            // Usar la dirección IP del sistema si no está configurada en las propiedades
            if (serverAddress == null || serverAddress.isEmpty()) {
                serverAddress = systemIp;
            }

       
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String getServerAddress() {
        return serverAddress;
    }
}