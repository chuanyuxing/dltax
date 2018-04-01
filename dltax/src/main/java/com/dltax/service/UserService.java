package com.dltax.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dltax.dao.UserDao;
import com.dltax.domain.User;

@Service
@Transactional  
public class UserService {

	@Autowired
	UserDao userDao;
	
	@Transactional()
	public List<User> getAllUsers(){
		return userDao.selectAll();
	}
}
