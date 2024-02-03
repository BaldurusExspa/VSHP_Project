import java.sql.*;

public class DBConnection {
    public static void main(String[] args) {
        String url = "jdbc:mysql://publicapis.sunday-projects.ru:33063/main";
        String username = "root";
        String password = "1234";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery("SELECT * FROM users");
            while (rs.next()) {
                System.out.println(rs.getString(1) + ' ' + rs.getString(2) + ' ' + rs.getString(3) + ' '
                        + rs.getString(4) + ' ' + rs.getString(5) + ' ' + rs.getString(6) + ' ' + rs.getString(7));
            }
            rs.close();
            statement.close();
            connection.close();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
