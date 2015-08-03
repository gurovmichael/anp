package com.mg.model.data;

import com.mg.model.data.enums.TaskType;

import java.sql.Date;

/**
 * Created with IntelliJ IDEA.
 * User: ми
 * Date: 19.07.15
 * Time: 22:28
 * To change this template use File | Settings | File Templates.
 */
public class AnpTaskStorable
{
    private long id;

    private long objectId;

    private long ownerId;

    private TaskType taskType;

    private Date created;

    private Date deadline;

    private String comment;





}
