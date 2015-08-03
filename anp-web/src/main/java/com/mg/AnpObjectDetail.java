package com.mg;

import java.io.Serializable;

/**
 * User: ми
 * Date: 09.07.15
 */
public class AnpObjectDetail implements Serializable
{
    private long id;

    private String dealType;
    private String address;
    private String metro;
    private String raw;


    public AnpObjectDetail() {
    }

    public AnpObjectDetail(ChromeArendaPiter object) {
        id = 3L;
        dealType = object.getType();
        address = object.getAddress();
        metro = object.getMetro();
        raw = object.getRaw();
    }

    public AnpObjectDetail(ChromeTsnBase object) {
        id = 4l;
        dealType=object.getRooms();
        address = object.getDistrictAddress();
        metro = object.getMetro();
        raw = object.getRaw();
    }


    public String getRaw() {
        return raw;
    }

    public void setRaw(String raw) {
        this.raw = raw;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDealType() {
        return dealType;
    }

    public void setDealType(String dealType) {
        this.dealType = dealType;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMetro() {
        return metro;
    }

    public void setMetro(String metro) {
        this.metro = metro;
    }
}
