import org.w3c.dom.ls.LSOutput;
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.sql.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MyServer {

    private static MyServer server;
    private ServerSocket serverSocket;

    private ExecutorService executorService = Executors.newFixedThreadPool(10);

    public static void main(String[] args) throws IOException {
        server = new MyServer();
        server.runServer();
    }

    private void runServer() {
        int serverPort = 8085;
        try {
            System.out.println("Starting Server");
            serverSocket = new ServerSocket(serverPort);

            while(true) {
                System.out.println("Waiting for request");
                try {
                    Socket s = serverSocket.accept();
                    System.out.println("Processing request");
                    executorService.submit(new ServiceRequest(s));
                } catch(IOException ioe) {
                    System.out.println("Error accepting connection");
                    ioe.printStackTrace();
                }
            }
        }catch(IOException e) {
            System.out.println("Error starting Server on "+serverPort);
            e.printStackTrace();
        }
    }

    private void stopServer() {
        //Stop the executor service.
        executorService.shutdownNow();
        try {
            //Stop accepting requests.
            serverSocket.close();
        } catch (IOException e) {
            System.out.println("Error in server shutdown");
            e.printStackTrace();
        }
        System.exit(0);
    }

    class ServiceRequest implements Runnable {

        private Socket socket;

        public ServiceRequest(Socket connection) {
            this.socket = connection;
        }

        public void run() {
            String url = "jdbc:mysql://publicapis.sunday-projects.ru:33063/main";
            String username = "root";
            String password = "1234";
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection connection = DriverManager.getConnection(url, username, password);
                Statement statement = connection.createStatement();
                ResultSet rs = statement.executeQuery("SELECT * FROM user");
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
}