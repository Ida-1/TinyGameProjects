import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Random r = new Random();

        // Game variables
        String[] enemies = {"Your tax accountant", "Your mother in law", "crack addict", "the stripper that you own money to"};
        int maxEnemyHealth = 100;
        int enemyAttackDamage = 50;

        //player
        int health = 100;
        int attackDamage = 50;
        int numHealthCoffee = 3;
        int healthCoffeeHealAmount = 30;
        int healthCoffeeDropChange = 50; // Percentage

        boolean running = true;

        System.out.println("Good Morning Sunshine, ready for another morning?");

        GAME:

        while (running) {
            System.out.println("-------------------------------------------------");

            int enemyHealth = r.nextInt(maxEnemyHealth);
            String enemy = enemies[r.nextInt(enemies.length)];
            System.out.println("As you got out of your car to work ");
            System.out.println("\t# " + enemy + "appeared! #\n");

            while (enemyHealth > 0) {
                System.out.println("\tYour HP: " + health);
                System.out.println("\t" + enemy + "'s HP: " + enemyHealth);
                System.out.println("\n\tWhat would you like to do?");
                System.out.println("\t1. Give that sucker a uppercut");
                System.out.println("\t2. Drink your coffee calmly ");
                System.out.println("\t3. Run, forest, run!");


                String input = in.nextLine();
                if (input.equals("1")) {
                    int damageDealt = r.nextInt(attackDamage);
                    int damageTaken = r.nextInt(enemyAttackDamage);

                    enemyHealth -= damageDealt;
                    health -= damageTaken;

                    System.out.println("\t> You strike the " + enemy + " for " + damageDealt + "damage.");
                    System.out.println("\t> You lost: " + damageTaken + " they broke your nose and rib!");

                    if (health < 1) {
                        System.out.println("\t> You have taken too much damage, you are gonna bleed to death! You need coffee!.");
                        break;
                    }
                } else if (input.equals("2")) {
                    if (numHealthCoffee > 0) {
                        health += healthCoffeeHealAmount;
                        numHealthCoffee--;
                        System.out.println("\t> You drink your now cold, disgusting beverage, healing yourself for " + healthCoffeeHealAmount + "."
                                + "\n\t> You have now " + health + " HP."
                                + "\n\t> You have " + numHealthCoffee + " coffee's left.\n");
                    } else {
                        System.out.println("\t> You have no coffee left! Defeat your enemies to steal some!\n");
                    }
                } else if (input.equals("3")) {
                    System.out.println("\tYou run like there's no tomorrow " + enemy + "!");
                    continue GAME;

                } else {
                    System.out.println("\tJerk, invalid command!");

                }
            }
            if (health > 1) {
                System.out.println("You limp out from the fight, with your face bashed inn, a broken nose, and a broken heart");
                break;
            }

            System.out.println("-------------------------------------------------");
            System.out.println(" # " + enemy + " Gave up, spat in your face and ran! #");
            System.out.println(" # You have " + health + "HP left. #");
            if (r.nextInt(100) < healthCoffeeDropChange) {
                numHealthCoffee++;
                System.out.println(" # The " + enemy + " dropped some weird looking coffee! #");
                System.out.println(" # You have " + numHealthCoffee + "coffee(s). # ");
            }
            System.out.println("-------------------------------------------------");
            System.out.println("What would you like to do now?");
            System.out.println("1. Continue fighting");
            System.out.println("2. Try to leave for work!");


            String input = in.nextLine();

            while(!input.equals("!") && !input.equals("2")){
                System.out.println("Invalid command, jerk!");
                input = in.nextLine();
            }

            if(input.equals("1")) {
                System.out.println("You continue on your Adventure to work!");
            }
            else if(input.equals("2")) {
                System.out.println("You exit the fight, not too badly hurt- and made it to work!");
                break;
            }
        }
        System.out.println("################");
        System.out.println("# THANKS FOR PLAYING #");
        System.out.println("################");

    }
}