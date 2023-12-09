module com.example.tasktimemanagerfx {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.tasktimemanagerfx to javafx.fxml;
    exports com.example.tasktimemanagerfx;
}