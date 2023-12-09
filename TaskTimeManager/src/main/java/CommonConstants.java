import java.awt.*;

public class CommonConstants {

    // frame cfg
    public static final Dimension GUI_SIZE = new Dimension(540, 760);

    // banner cfg
    public static final Dimension BANNER_SIZE = new Dimension(GUI_SIZE.width, 50);

    // task panel cfg
    public static final Dimension TASKPANEL_SIZE = new Dimension(GUI_SIZE.width - 30, GUI_SIZE.height - 175);

    // add task button cfg
    public static final Dimension ADDTASK_BUTTON_SIZE = new Dimension(GUI_SIZE.width, 50);

    // taskcomponent cfg
    public static final Dimension TASKFIELD_SIZE = new Dimension((int)(TASKPANEL_SIZE.width * 0.80), 50);
    public static final Dimension CHECKBOX_SIZE = new Dimension((int)(TASKFIELD_SIZE.width * 0.05), 50);
    public static final Dimension DELETE_BUTTON_SIZE = new Dimension((int)(TASKFIELD_SIZE.width * 0.12), 50);

    // Font
    public static final Font baseFont = new Font("Arial", Font.BOLD, 16);
    public static final Font taskFont = new Font("Arial", Font.BOLD, 20);
}
