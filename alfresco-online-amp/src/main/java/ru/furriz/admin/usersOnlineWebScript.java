package ru.furriz.admin;


import org.activiti.engine.impl.util.json.JSONObject;
import org.alfresco.repo.security.authentication.TicketComponent;
import org.alfresco.repo.security.person.PersonServiceImpl;
//import org.alfresco.rest.api.model.Person;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.security.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.extensions.webscripts.AbstractWebScript;
import org.springframework.extensions.webscripts.WebScriptRequest;
import org.springframework.extensions.webscripts.WebScriptResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Set;

/**
 * Created by VasilyevD on 24.04.2017.
 */
public class usersOnlineWebScript extends AbstractWebScript {
    @Autowired
    private TicketComponent ticketComponent;
    private PersonService personService;

    @Override
    public void execute(WebScriptRequest webScriptRequest, WebScriptResponse webScriptResponse) throws IOException {
        byte counter=0;
        JSONObject jsonUser = null;
        NodeRef nodeRef = null;
        PersonService.PersonInfo person = null;
        JSONObject response = new JSONObject();
        Set<String> onlineUsers = ticketComponent.getUsersWithTickets(true);
        ArrayList<JSONObject> users= new ArrayList<>() ;
        Iterator<String> iter = onlineUsers.iterator();


        while(iter.hasNext()){
            String username = iter.next();
            nodeRef = personService.getPerson(username, false );
            person = personService.getPerson(nodeRef);
            jsonUser = new JSONObject();
            jsonUser.put("number", ++counter);
            jsonUser.put("username",username);
            jsonUser.put("firstName", person.getFirstName());
            jsonUser.put("lastName", (person.getLastName()));
            users.add(jsonUser);
        }

        response.put("usersOnline", users);

        webScriptResponse.getWriter().write(response.toString());
        webScriptResponse.setContentEncoding("UTF-8");
    }

    public PersonService getPersonService() {
        return personService;
    }

    public void setPersonService(PersonService personService) {
        this.personService = personService;
    }
}