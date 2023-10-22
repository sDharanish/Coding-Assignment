package Leo;
import java.util.*;

public class RomanNumber {

	public static void main(String[] args) {
		
		Scanner enter = new Scanner(System.in);
		System.out.println("Enter your Roman : ");
	        String roman = enter.next().toUpperCase(); 
	        int result = romanToInt(roman);
	        if (result == -1) {
	            System.out.println("Invalid Roman numeral.");
	        } else {
	            System.out.println("Integer equivalent: " + result);
	        }

	        
			
	}
	    
	 public static int romanToInt(String s) {

	int[] values = { 1, 5, 10, 50 };
    char[] symbols = { 'I', 'V','X','L' };

    int result = 0;
    int prevValue = 0;

    for (int i = 0; i < s.length(); i++) {
        char currentChar = s.charAt(i);
        int currentIndex = -1;

        for (int j = 0; j < symbols.length; j++) {
            if (symbols[j] == currentChar) {
                currentIndex = j;
                break;
            }
        }

        if (currentIndex == -1) {
            return -1; // Invalid Roman numeral
        }

        int currentValue = values[currentIndex];

        if (currentValue > prevValue) {
            result += currentValue - 2 * prevValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

}
