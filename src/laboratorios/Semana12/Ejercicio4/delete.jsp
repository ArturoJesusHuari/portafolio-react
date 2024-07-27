<%@ page import="java.sql.*" %>
<%
int id = Integer.parseInt(request.getParameter("id"));

try {
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/DAW2", "root", "root");
    String query = "DELETE FROM Estudiantes WHERE id = ?";
    PreparedStatement pstmt = conn.prepareStatement(query);
    pstmt.setInt(1, id);
    pstmt.executeUpdate();
    pstmt.close();
    conn.close();
} catch (Exception e) {
    out.println(e);
}

response.sendRedirect("index.jsp");
%>