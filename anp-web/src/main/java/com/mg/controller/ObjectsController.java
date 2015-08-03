package com.mg.controller;

import com.mg.AnpObjectDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * User: ми
 * Date: 29.06.15
 */


@RestController
public class ObjectsController {

   @Autowired
   private TempStore tempStore;


    @RequestMapping(value = "/api/getObjects", method = RequestMethod.GET/*,
            headers = {"Content-type=application/json"}*/)
    @ResponseBody
    public List<AnpObjectDetail> getObjects(HttpServletRequest request) {

       return tempStore.objects;

    }




}