package ru.zelenskiy.testserverapp2.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String TAG = "mysql-javabase-DBConnectionUtils";
    private static final String driver = "com.mysql.jdbc.Driver";
    private static String dbName = "javabase";
    private static String user = "root";
    private static String password = "";
    public static Connection getConn(){

        Connection connection = null;
        try {
            Class.forName(driver);
            String ip = "localhost";

            connection = DriverManager.getConnection("jdbc:mysql://" + ip + ":3306/" + dbName + user + password);

        } catch (Exception e) {
            e.printStackTrace();

        }

        return connection;

        /* Старый вариант подключения -
        public static Connection getConnection() throws SQLException {
            return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD); */

        /*    private static final String DB_URL = "jdbc:mysql://localhost/javabase";
            private static final String DB_USER = "root";
            private static final String DB_PASSWORD = ""; //5uujWR2z */
    }
}