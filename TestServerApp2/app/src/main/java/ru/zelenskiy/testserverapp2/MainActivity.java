package ru.zelenskiy.testserverapp2;

import androidx.appcompat.app.AppCompatActivity;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;
import ru.zelenskiy.testserverapp2.dao.UserDao;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "mysql-javabase-MainActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void reg(View view){
        startActivity(new Intent(getApplicationContext(),register.class));
    }

    /**
     *Function: login
     * */
    public void login(View view){

        EditText EditTextAccount = findViewById(R.id.userAccount);
        EditText EditTextPassword = findViewById(R.id.userPassword);

        new Thread(){
            @Override
            public void run() {
                UserDao userDao = new UserDao();
                int msg = userDao.login(EditTextAccount.getText().toString(),EditTextPassword.getText().toString());
                hand1.sendEmptyMessage(msg);
            }
        }.start();

    }

    @SuppressLint("HandlerLeak")
    final Handler hand1 = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            if (msg.what == 0){
                Toast.makeText (getApplicationContext(), "login failed", Toast.LENGTH_LONG). show();
            } else if (msg.what == 1) {
                Toast.makeText (getApplicationContext(), "login succeeded", Toast.LENGTH_LONG). show();
            } else if (msg.what == 2){
                Toast.makeText (getApplicationContext(), "password error", Toast.LENGTH_LONG). show();
            } else if (msg.what == 3){
                Toast.makeText (getApplicationContext(), "account does not exist", Toast.LENGTH_LONG). show();
            }
        }
    };
}