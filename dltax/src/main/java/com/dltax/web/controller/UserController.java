package com.dltax.web.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dltax.domain.User;
import com.dltax.service.UserService;

@Controller	
public class UserController {

	private static Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserService userService;
	
	@GetMapping("/user/list")
	public String list( Model model){
		log.debug("UserController.index");
		List<User> userList = userService.getAllUsers();
		if(null != userList && userList.size() > 0){
			log.debug("userList.size=" + userList.size());
			model.addAttribute("users", userList);
		}
		return "user/list";
	}
	
	@RequestMapping("/hello")
	public String welcome2(){
		return "welcome2";
	}
}
