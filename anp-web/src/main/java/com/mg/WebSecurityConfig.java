package com.mg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

@Configuration
@EnableWebMvcSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AushSuccess aushSuccess;

    @Autowired
    private  AuthFailure authFailure;

    @Autowired
    private AuthEntryPoint authEntryPoint;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests()
//                .antMatchers("/auth/**").permitAll()
//                .anyRequest().authenticated()
//                .and()
//
//                .formLogin()
////                    .successHandler(aushSuccess)
////                    .failureHandler(authFailure)
//                .loginPage("/login")
//                .permitAll().defaultSuccessUrl("/")
//                .and()
//                .logout()
//                .permitAll();

        http.csrf().disable();//.exceptionHandling().authenticationEntryPoint(authEntryPoint);


        //временно, для теста
        http.authorizeRequests().antMatchers("/**").permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("1").password("1").roles("USER");
    }
}