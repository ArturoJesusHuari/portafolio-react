<%@ page import="java.sql.*" %>
<%
String nombre = request.getParameter("nombre");
String email = request.getParameter("email");
String materia = request.getParameter("materia");

try {
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/DAW2", "root", "root");
    String query = "INSERT INTO Estudiantes (nombre, email, materia) VALUES (?, ?, ?)";
    PreparedStatement pstmt = conn.prepareStatement(query);
    pstmt.setString(1, nombre);
    pstmt.setString(2, email);
    pstmt.setString(3, materia);
    pstmt.executeUpdate();
    pstmt.close();
    conn.close();
} catch (Exception e) {
    out.println(e);
}

response.sendRedirect("index.jsp");
%>