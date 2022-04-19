package ua.goit.command;

import ua.goit.entity.Order;
import ua.goit.entity.Pet;
import ua.goit.entity.PetStatus;
import ua.goit.entity.User;
import ua.goit.util.OrderClientUtil;
import ua.goit.util.PetClientUtil;
import ua.goit.util.UserClientUtil;
import ua.goit.view.View;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

public class ReadCommand extends AbstractCommand implements Command{
    private static final String MENU = """
            Please, enter the number according to list below
            1 - to get user info
            2 - to get pet info
            3 - to get order info
            return - go back to main menu
            """;
    private static final String PET_MENU = """
            Please, enter the number according to list below
            1 - to get pet by status
            2 - to get pet by id
            return - go back to main menu
            """;
    private static final String ORDER_MENU = """
            Please, enter the number according to list below
            1 - to get pet inventories by status
            2 - to get purchase order by id
            return - go back to main menu
            """;
    private final View view;

    public ReadCommand(View view) {
        super(view);
        this.view = view;
    }

    @Override
    public String commandName() {
        return "read";
    }

    @Override
    public void process() {
        boolean running = true;
        while (running) {
            view.write(MENU);
            String section = view.read();
            switch (section) {
                case "1" -> findUserByUserName();
                case "2" -> petMenuProcess();
                case "3" -> storeMenuProcess();
                case "return" -> running = false;
                default -> view.write("Please, enter the correct command\n");
            }
        }
    }

    private void findUserByUserName() {
        view.write("Enter user name");
        String userName = view.read();
        try {
            User user = UserClientUtil.getUserByUserName(userName);
            view.write("Founded user:\n" + user);
        } catch (IOException | InterruptedException ex) {
            view.write(ex.getMessage());
        }
    }

    private void petMenuProcess() {
        boolean running = true;
        while (running) {
            view.write(PET_MENU);
            String section = view.read();
            switch (section) {
                case "1" -> getPetByStatus();
                case "2" -> getPetById();
                case "return" -> running = false;
                default -> view.write("Please, enter the correct command\n");
            }
        }
    }

    private void getPetByStatus() {
        PetStatus status = readPetStatusFromConsole();
        try {
            List<Pet> pets = PetClientUtil.getPetByStatus(status);
            pets.forEach(pet -> view.write(pet.toString()));
        } catch (IOException | InterruptedException ex) {
            view.write(ex.getMessage());
        }
    }

    private void getPetById() {
        int id = readIntegerFromConsole("Enter pet id");
        try {
            Pet pet = PetClientUtil.getPetById(id);
            view.write("Founded pet:\n" + pet);
        } catch (IOException | InterruptedException ex) {
            view.write(ex.getMessage());
        }
    }

    private void storeMenuProcess() {
        boolean running = true;
        while (running) {
            view.write(ORDER_MENU);
            String section = view.read();
            switch (section) {
                case "1" -> getInventoriesByStatus();
                case "2" -> getOrderById();
                case "return" -> running = false;
                default -> view.write("Please, enter the correct command\n");
            }
        }
    }

    private void getInventoriesByStatus() {
        try {
            HashMap<String, Integer> inventories = OrderClientUtil.getInventories();
            inventories.entrySet().forEach(status -> view.write(status.toString()));
        } catch (IOException | InterruptedException ex) {
            view.write(ex.getMessage());
        }
    }

    private void getOrderById() {
        boolean running = true;
        while (running) {
            int id = readIntegerFromConsole("Enter order id in range 1-10");
            if (id < 1 || id > 10) {
                view.write("Wrong data, please, enter order id in range 1-10");
            } else {
                try {
                    Order order = OrderClientUtil.getOrderById(id);
                    view.write("Founded order:\n" + order);
                    running = false;
                } catch (IOException | InterruptedException ex) {
                    view.write(ex.getMessage());
                }
            }
        }
    }
}
