package sample;

import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.layout.Background;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;
import sample.algorithm.Algo;
import sample.algorithm.Script;

import java.io.IOException;

public class Controller {

    Script myScript;

    ToggleGroup groupRadioData;
    ToggleGroup groupRadioHeader;

    String file1 = null;
    String file2 = null;

    @FXML
    private Button runButton;

    @FXML
    private RadioButton dataZacRadio;
    @FXML
    private RadioButton dataRonjaRadio;
    @FXML
    private RadioButton dataMoritzRadio;

    @FXML
    private RadioButton headerMoritzRadio;

    @FXML
    private RadioButton headerRonjaRadio;
    @FXML
    private RadioButton headerZacRadio;
    @FXML
    private Pane myPane;




    public Controller(){
        super();
        myScript = new Script();
        Script bvhsCreater = new Script();
    }


    @FXML
    public void initialize(){






        groupRadioData = new ToggleGroup();
        groupRadioHeader = new ToggleGroup();
        /*dataZacRadio.setToggleGroup(groupRadioData);
        dataRonjaRadio.setToggleGroup(groupRadioData);
        dataMoritzRadio.setToggleGroup(groupRadioData);*/

        headerMoritzRadio.setToggleGroup(groupRadioHeader);
        headerZacRadio.setToggleGroup(groupRadioHeader);
        headerRonjaRadio.setToggleGroup(groupRadioHeader);



        runButton.setOnMouseClicked(event -> {

            //groupRadioHeader.getSelectedToggle()
            if(dataZacRadio.isSelected()){
                file1 = "./src/sample/dataBVH/zac.bvh";
            }
            if(dataMoritzRadio.isSelected()){
                file1 = "./src/sample/dataBVH/moritz.bvh";
            } else {
                file1 = "./src/sample/dataBVH/zac.bvh";
                file2 = "./src/sample/dataBVH/ronja.bvh";
            }
            file2 = "./src/sample/dataBVH/ronja.bvh";

            try {
                myScript.createBVH(file1,file2, Algo.RANDOM);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }
}
