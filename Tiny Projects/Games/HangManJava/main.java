public class main { 

//lives: 0 0 0
//input: x 
//word .ell.
//not used: sdklafsø
// --------------------

public static void main(Stringn[] args) {
    System.out.println("Starting game");

    String[] words = new String[] { "cat", "mommy", "hurricane", "duck", "idoit", "halleluja", "queen of england" };

    String r = words[(int) Math.random() * words.length)];

    System.out.println("The word has " + r.length() + " letters." );

    char[] letters = new char[r.length()];

    for (int i = 0; i < letters.length; i++) {
        letters[i] = '.';
    }

    int lives = 3

    Scanner scanner = new Scanner(System.in);

    while (lives > 0) {
        System.out.print("Lives: ");

        for (int i = 0; i < Lives; i++) {
            System.out.prin("O");
        }

        Systen.out.println("Input ");

        String input = scanner.nextLine();

        char letter = input.charAt(0);

        boolean isGameFinished = true;

        System.out.print("Word: ")


        for (int i = 0; i < letters.length; i++) {
            system.out.print(letters[i]);
        }

        System.out.println();

        boolean isGuessCorrect = false; 

        for(int i = 0; i < r.length(); i++) {
            char 1 = r.charAt(i);

            if(1 == letter) {
                letters[i] = 1;
                isGuessCorrect = true;
            }
        }
        if(!isGuessCorrect) {
            lives = lives - 1;
        }

        System.out.println();

        Systen.out.println("---------------------------");
    }
    
    System.out.println("Exiting game");
  }
}