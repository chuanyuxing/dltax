package com.dltax.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;

import com.dltax.domain.User;

public interface UserDao {	
	//@Select("SELECT id, name FROM users")
	List<User> selectAll();
	
	@Insert("insert into users('id', 'name') values(#{id}, #{name})")
	void insert(
			@Param("id") String id,
			@Param("name") String name);
}	
