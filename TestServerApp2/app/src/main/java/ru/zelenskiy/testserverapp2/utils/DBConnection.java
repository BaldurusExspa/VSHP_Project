package ru.zelenskiy.testserverapp2.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBConnection {
    private static String url = "jdbc:mysql://publicapis.sunday-projects.ru:33063/main";
    private static String username = "root";
    private static String password = "1234";
    private static String Driver = "com.mysql.cj.jdbc.Driver";
    public static Connection getConn() {
        Connection connection = null;
        try {
            Class.forName(Driver);
            connection = DriverManager.getConnection(url, username, password);
        } catch (ClassNotFoundException e) {

            e.printStackTrace();
        } catch (SQLException e) {

            e.printStackTrace();
        }
        return connection;
    }
}