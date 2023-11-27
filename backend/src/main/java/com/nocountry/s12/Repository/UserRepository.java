package com.nocountry.s12.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.s12.models.User;


public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email); 
}
