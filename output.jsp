<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <html>

    <head>
        <title>Success page</title>
    </head>

    <body>
        <%
        String name = request.getParameter("fullname");
        %>

            <h1>Congrats! Your account is successfully registered!</h1>
            <h3>Name:</h3>
            <%= name %>
    </body>

    </html>