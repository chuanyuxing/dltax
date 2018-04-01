package com.dltax.config;

import java.io.IOException;

import javax.sql.DataSource;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternUtils;

@Configuration
@MapperScan("com.dltax.dao")
public class MyBatisConfig {
  /**
   * SqlSessionFactoryBean格納クラス。
   *
   * <PRE>
  * DataSourceをSqlSessionFactoryBeanにセットします。
  * mybatisの設定情報をSqlSessionFactoryBeanにセットします。
   * </PRE>
   *
   * @return SqlSessionFactoryBean。
   */
  @Bean
  public SqlSessionFactoryBean sqlSessionFactoryBean(DataSource dataSource) throws IOException {
    SqlSessionFactoryBean factory = new SqlSessionFactoryBean();
    factory.setDataSource(dataSource);
    ResourcePatternResolver resolver =
        ResourcePatternUtils.getResourcePatternResolver(new DefaultResourceLoader());
    // MyBatis のコンフィグレーションファイル
    factory.setConfigLocation(resolver.getResource("classpath:config/mybatis-config.xml"));
    // MyBatis で使用する SQL ファイル群(daoフォルダ内のサブフォルダ内も含んだ全てのxml)
    factory.setMapperLocations(resolver.getResources("classpath:sql/*.xml"));
    return factory;
  }
}