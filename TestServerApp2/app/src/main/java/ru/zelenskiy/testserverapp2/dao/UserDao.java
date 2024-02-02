package ru.zelenskiy.testserverapp2.dao;

import android.util.Log;

import ru.zelenskiy.testserverapp2.entity.User;
import ru.zelenskiy.testserverapp2.utils.DBConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;

/**
 * author: yan
 * date: 2022.02.17
 * **/
public class UserDao {

    private static final String TAG = "mysql-javabase-UserDao";

    /**
     *Function: login
     * */
    public int login(String userAccount, String userPassword){

        HashMap<String, Object> map = new HashMap<>();

        Connection connection = DBConnection.getConn();
        int msg = 0;
        try {

            String sql = "SELECT * FROM user WHERE userAccount = ?";
            if (connection != null) {
                PreparedStatement ps = connection.prepareStatement(sql);
                if (ps != null){
                    Log.e(TAG, "account:" + userAccount);

                    ps.setString(1, userAccount);

                    ResultSet rs = ps.executeQuery();
                    int count = rs.getMetaData().getColumnCount();

                    while (rs.next()){

                        for (int i = 1;i <= count;i++){
                            String field = rs.getMetaData().getColumnName(i);
                            map.put(field, rs.getString(field));
                        }
                    }
                    connection.close();
                    ps.close();

                    if (map.size()!=0){
                        StringBuilder s = new StringBuilder();
                        //Find whether passwords match
                        for (String key : map.keySet()){
                            if(key.equals("userPassword")){
                                if(userPassword.equals(map.get(key))){
                                    msg = 1;            // Correct password
                                }
                                else
                                    msg = 2;            // Password error
                                break;
                            }
                        }
                    }else {
                        Log.e (TAG, "query result is empty");
                        msg = 3;
                    }
                }else {
                    msg = 0;
                }
            }else {
                msg = 0;
            }
        }catch (Exception e){
            e.printStackTrace();
            Log.d (TAG, "abnormal login:" + e.getMessage());
            msg = 0;
        }
        return msg;
    }


    /**
     *Function: registration
     * */
    public boolean register(User user){
        HashMap<String, Object> map = new HashMap<>();

        Connection connection = DBConnection.getConn();

        try {
            String sql = "INSERT INTO user(userAccount,userPassword,userName,userType,userState,userDel) values (?,?,?,?,?,?)";
            if (connection != null) {
                PreparedStatement ps = connection.prepareStatement(sql);
                if (ps != null){

                    //Insert data into database
                    ps.setString(1,user.getUserAccount());
                    ps.setString(2,user.getUserPassword());
                    ps.setString(3,user.getUserName());
                    ps.setInt(4,user.getUserType());
                    ps.setInt(5, user.getUserState());
                    ps.setInt(6,user.getUserDel());

                    //Execute SQL query statement and return result set
                    int rs = ps.executeUpdate();
                    if(rs>0)
                        return true;
                    else
                        return false;
                }else {
                    return  false;
                }
            }else {
                return  false;
            }
        }catch (Exception e){
            e.printStackTrace();
            Log.e (TAG, "exception register:" + e.getMessage());
            return false;
        }

    }

    /**
     *Function: check whether the user exists according to the account number
     **/
    public User findUser(String userAccount) {

        Connection connection = DBConnection.getConn();
        User user = null;
        try {
            String sql = "SELECT * FROM user WHERE userAccount = ?";
            if (connection != null) {
                PreparedStatement ps = connection.prepareStatement(sql);
                if (ps != null) {
                    ps.setString(1, userAccount);
                    ResultSet rs = ps.executeQuery();

                    while (rs.next()) {
                        //Note: subscripts start with 1
                        int id = rs.getInt(1);
                        String userAccount1 = rs.getString(2);
                        String userPassword = rs.getString(3);
                        String userName = rs.getString(4);
                        int userType = rs.getInt(5);
                        int userState = rs.getInt(6);
                        int userDel = rs.getInt(7);
                        user = new User(id, userAccount1, userPassword, userName, userType, userState, userDel);
                    }
                }
            }
        }catch (Exception e){
            e.printStackTrace();
            Log.d (TAG, "exception finduser:" + e.getMessage());
            return null;
        }
        return user;
    }

}