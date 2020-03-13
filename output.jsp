<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

    <%@ page import="java.util.regex.*"%>
        <html>

        <head>
            <link rel="stylesheet" href="style.css">
            <title>Success page</title>
        </head>

        <body>

            <h1>Congrats! Your account is successfully registered!</h1>
            <table align="center">
                <%
            String name = request.getParameter("fullname");
            String matric = request.getParameter("matricno");
            String currentAdd = request.getParameter("currentaddress");
            String homeAdd = request.getParameter("homeaddress");
            String email = request.getParameter("email");
            String mobileNo = request.getParameter("mobileno");
            String homeNo = request.getParameter("phoneno");

            try {
                if (Pattern.matches("^[a-zA-Z\\s]*$", name)==true) {
                    out.println("<tr>");
                        out.println("<td>Name </td>");
                        out.println("<td> : </td>");
                        out.println("<td>" + name + "</td>");
                    out.println("</tr>");
                }

                if (Pattern.matches("^[0-9]{7}$", matric)==true) {
                    out.println("<tr>");
                        out.println("<td>Matric No </td>");
                        out.println("<td> : </td>");
                        out.println("<td>" + matric + "</td>");
                    out.println("</tr>");

                }

                if (Pattern.matches("^[a-zA-Z\\s]*$", currentAdd)==true) {
                    out.println("<tr>");
                        out.println("<td>Current Address </td>");
                        out.println("<td> : </td>");
                        out.println("<td>" + currentAdd + "</td>");
                    out.println("</tr>");
                }

                if (Pattern.matches("^[a-zA-Z\\s]*$", homeAdd)==true) {
                    out.println("<tr>");
                        out.println("<td>Home Address </td>");
                        out.println("<td> : </td>");
                        out.println("<td>" + homeAdd + "</td>");
                    out.println("</tr>");
                }


                if (Pattern.matches("^(.+)@(.+)$", email)==true) {
                    out.println("<tr>");
                        out.println("<td>Email </td>");
                        out.println("<td> : </td>");
                        out.println("<td>" + email + "</td>");
                    out.println("</tr>");
                }

                if (Pattern.matches("^[(]{0,1}[0-9]{3}[)]{0,1}[0-9]{4}[-]{0,1}[0-9]{4}$", mobileNo)==false) {
                    out.println("<tr>");
                        out.println("<td>Mobile Phone No </td>");
                        out.println("<td> : </td>");
                        out.println("<td>" + mobileNo + "</td>");
                    out.println("</tr>");
                }

                if (Pattern.matches("^[(]{0,1}[0-9]{3}[)]{0,1}[0-9]{4}[-]{0,1}[0-9]{4}$", homeNo)==true) {
                    out.println("<tr>");
                        out.println("<td>Home Phone No </td>");
                        out.println("<td> : </td>");
                        out.println("<td>" + homeNo + "</td>");
                    out.println("</tr>");
                }
            }

            catch(Exception e)
           {
            out.println(e);
           }

            %>
            </table>
        </body>

        </html>
