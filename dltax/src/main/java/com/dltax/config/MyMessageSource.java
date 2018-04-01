package com.dltax.config;

import java.util.Locale;

import org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.context.NoSuchMessageException;

public class MyMessageSource implements MessageSource{

	/** MessageSource */
    private MessageSource message = new MessageSourceAutoConfiguration().messageSource();

    /**
     * メッセージの取得
     * @param code
     * @return
     */
    public String getMessage(String code) {
        return message.getMessage(code, null, Locale.getDefault());
    }

    /**
     * メッセージの取得
     * @param code
     * @param args
     * @return
     */
    public String getMessage(String code,
                             Object[] args) {
        return message.getMessage(code, args, Locale.getDefault());
    }

    @Override
    public String getMessage(String code,
                             Object[] args,
                             String defaultMessage,
                             Locale locale) {
        return message.getMessage(code, args, defaultMessage, locale);
    }

    @Override
    public String getMessage(String code,
                             Object[] args,
                             Locale locale) throws NoSuchMessageException {
        return message.getMessage(code, args, locale);
    }

    @Override
    public String getMessage(MessageSourceResolvable resolvable,
                             Locale locale) throws NoSuchMessageException {
        return message.getMessage(resolvable, locale);
    }
}
