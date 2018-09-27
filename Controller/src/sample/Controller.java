package sample;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.ListView;
import sample.algorithm.Script;

import java.io.IOException;

public class Controller {

    Script myScript;


    @FXML
    private Button runButton;


    public Controller(){
        super();
        myScript = new Script();
        Script bvhsCreater = new Script();
    }


    @FXML
    public void initialize(){
        runButton.setOnMouseClicked(event -> {
            try {
                myScript.createBVH("./src/sample/dataBVH/ronja.bvh", "./src/sample/dataBVH/zac.bvh");
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }
}
