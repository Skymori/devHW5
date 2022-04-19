package ua.goit;

import ua.goit.controller.ApplicationController;
import ua.goit.view.Console;
import ua.goit.view.View;

public class App {
    public static void main(String[] args) {
        View view = new Console(System.in, System.out);
        ApplicationController applicationController = new ApplicationController(view);
        applicationController.run();

    }
}