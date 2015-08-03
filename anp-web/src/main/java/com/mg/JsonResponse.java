package com.mg;

/**
 * Created with IntelliJ IDEA.
 * User: ми
 * Date: 30.06.15
 * Time: 0:14
 * To change this template use File | Settings | File Templates.
 */
public class JsonResponse {

    private String status = "";
    private String errorMessage = "";

    public JsonResponse() {
    }

    public JsonResponse(String status, String errorMessage) {
        this.status = status;
        this.errorMessage = errorMessage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
