package Leo;
import java.util.*;

public class Pangram {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter yor  sentence:");
		String  sentence = sc.next();
		
		if(ispagram( sentence)) {
			System.out.println("The input is a pangram.");
		}else {
			System.out.println("The input is not a pangram.");
		}
		

	}
	public static boolean ispagram(String  sentence) {
		boolean [] alphabet = new boolean[26];
		sentence = sentence.toLowerCase();

        for (int i = 0; i < sentence.length(); i++) {
            char currentChar = sentence.charAt(i);

            if ('a' <= currentChar && currentChar <= 'z') {
                
                alphabet[currentChar - 'a'] = true;
            }
        }

        for (boolean flag : alphabet) {
            if (!flag) {
                return false; 
            }
        }
        return true;

	}

}
