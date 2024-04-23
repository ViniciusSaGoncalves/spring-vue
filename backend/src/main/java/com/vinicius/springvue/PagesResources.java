package com.vinicius.springvue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller("/")
public class PagesResources {
//    @GetMapping
//    public String index() {
//        return "Hello World";
//    }

    @GetMapping()
    public ModelAndView home() {
        return new ModelAndView("/home/index.html");
    }

    @GetMapping("/contabil/")
    public ModelAndView contabil() {
        return new ModelAndView("/contabil/index.html");
    }
}
