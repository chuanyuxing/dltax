package com.dltax.web.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {

	private static Logger log = LoggerFactory.getLogger(MainController.class);
	
    @Autowired
    MessageSource messagesource;
    
	@GetMapping("/")
	public String index( Model model){
		Locale locale = LocaleContextHolder.getLocale();
		String title = messagesource.getMessage("main.title", null, locale);
		String appName = messagesource.getMessage("app.name", null, locale);
		log.debug(title);
		model.addAttribute("title", title);
		model.addAttribute("appName", appName);
		return "index";
	}
	
	@GetMapping("/customer/list")
	@ResponseBody
	public String list( @RequestParam int start,@RequestParam int limit){
		
		StringBuilder sb = new StringBuilder();
		sb.append("{totalCount:49,");
		sb.append("items:[");
		for(int i=start; i<start + limit; ++i){
			if(i > start){
				sb.append(",");
			}
			sb.append(createJsonData(i));
		}
		sb.append("]");
		sb.append("}");
		return sb.toString();
	}
	
	private String createJsonData(int index){
		StringBuilder sb = new StringBuilder();
		sb.append("{");
		if(index % 3 == 0){
			sb.append("id:" + index + ",status:'" + getStatus(index) + "',code:'DL-201601-0001',group:'大连',name:'段誉',name_ja:'トウフ',sex:'男', birthday:'1986/03/01', phone:'13511112222', email:'jeanluc.picard@enterprise.com',qq:'1234567',webchat:'qiaofeng',address:'大连市甘井子区百合山庄1034',depart_date:'2016/03/01', return_date:'2018/03/01'");
		}else if(index % 2 == 0){
		   sb.append("id:" + index + ",status:'" + getStatus(index) + "',code:'HB-201601-0001',group:'湖北',name:'虚竹',name_ja:'トウフ',sex:'男', birthday:'1991/04/16', phone:'13533334444', email:'jeanluc.picard@enterprise.com',qq:'1234567',webchat:'qiaofeng',address:'湖北省宜昌市XXX',depart_date:'2016/03/01', return_date:'2018/03/01'");
		}else{
		  sb.append("id:" + index + ",status:'" + getStatus(index) + "',code:'SD-201601-0001',group:'山东',name:'乔峰',name_ja:'トウフ',sex:'男', birthday:'1982/09/09', phone:'13544445555', email:'jeanluc.picard@enterprise.com',qq:'1234567',webchat:'qiaofeng',address:'山东省青岛市XXX',depart_date:'2016/03/01', return_date:'2018/03/01'");
		}
		sb.append("}");
		return sb.toString();
	}
	
	private String getStatus(int index){
		if(index % 9 == 0){
			return "取消";
		}else if(index % 8 == 0){
			return "审核中";
		}else if(index % 7 == 0){
			return "核查中";
		}else if(index % 6 == 0){
			return "返回";
		}else if(index % 5 == 0){
			return "完成";
		}		
		return "新建";
	}
	
	
}
