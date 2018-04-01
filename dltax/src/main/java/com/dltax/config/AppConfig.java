package com.dltax.config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;

@Configuration
public class AppConfig {

//	@Bean
//	public MessageSource messageSource() {
//	    final ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
//
//	    messageSource.setBasename("messages");
//	    messageSource.setFallbackToSystemLocale(false);
//	    messageSource.setCacheSeconds(-1);
//
//	    return messageSource;
//	}
	
    /**
     * MessageSourceの拡張クラスのBean登録
     * @return
     */
//    @Bean
//    public MyMessageSource messageSourceImpl() {
//    	MyMessageSource message =  new MyMessageSource();
//    	return message;
//    }
    
//    @Bean
//    public LocaleResolver localeResolver() {
//      SessionLocaleResolver localeResolver = new SessionLocaleResolver();
//      localeResolver.setDefaultLocale(Locale.JAPAN);
//      return localeResolver;
//    }
}
