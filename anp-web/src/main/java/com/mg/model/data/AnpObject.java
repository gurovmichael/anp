package com.mg.model.data;

import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * User: ми
 * Date: 19.07.15
 * Time: 22:28
 * To change this template use File | Settings | File Templates.
 */
public class AnpObject implements Serializable
{
    private long id;

    private byte srcType;

    private String dealType;
    private String address;
    private String metro;
    private String raw;

    public AnpObject() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public byte getSrcType() {
        return srcType;
    }

    public void setSrcType(byte srcType) {
        this.srcType = srcType;
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

    public String getRaw() {
        return raw;
    }

    public void setRaw(String raw) {
        this.raw = raw;
    }
}
