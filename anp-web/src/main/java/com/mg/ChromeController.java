package com.mg;

import com.mg.controller.TempStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

/**
 * User: ми
 * Date: 29.06.15
 */


@Controller
public class ChromeController {


    @Autowired
    private TempStore tempStore;

    @RequestMapping(value = "api/v1/arendapiter/object", method = RequestMethod.POST,
            headers = {"Content-type=application/json"})
    @ResponseBody
    public JsonResponse addPerson(@RequestBody ChromeArendaPiter object) {


        tempStore.objects.add(new AnpObjectDetail(object));

        System.out.println(object);
        return new JsonResponse("OK", "");
    }

    @RequestMapping(value = "api/v1/tdnbase/object", method = RequestMethod.POST,
            headers = {"Content-type=application/json"})
    @ResponseBody
    public JsonResponse addTsnBase(@RequestBody ChromeTsnBase object) {


        tempStore.objects.add(new AnpObjectDetail(object));

        System.out.println(object);
        return new JsonResponse("OK", "");
    }


    @RequestMapping(value = "/{ownerId}/edit", method=RequestMethod.GET)
    public String edit(@PathVariable("ownerId") String ownerId, Model model)
    {
        model.addAttribute("myid",666);

        return "singleObject";
    }



}