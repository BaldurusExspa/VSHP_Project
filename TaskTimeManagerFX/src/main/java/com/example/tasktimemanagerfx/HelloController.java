package com.example.tasktimemanagerfx;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.layout.AnchorPane;

public class HelloController {

    @FXML
    private ResourceBundle resources;

    @FXML
    private URL location;

    @FXML
    private Button addTimerBtn;

    @FXML
    private Button deleteTimerBtn;

    @FXML
    private Button propertyBtn;

    @FXML
    private Button resetTimerBtn;

    @FXML
    private Button startTimerBtn;

    @FXML
    private Button taskBtn;

    @FXML
    private AnchorPane taskModel;

    @FXML
    private Button timerBtn;

    @FXML
    private AnchorPane timerModel;

    @FXML
    void initialize() {
            timerBtn.setOnAction(event -> {
                timerModel.setOpacity(1);
                taskModel.setOpacity(0);
            });
                taskBtn.setOnAction(event -> {
                taskModel.setOpacity(1);
                timerModel.setOpacity(0);
            });
        }
    }
