import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Day1 {
	public static void main(String[] args)  throws FileNotFoundException {
		Scanner f = new Scanner(new File("day1.txt"));
		int answer = 0;

		int current = 0;
		ArrayList<Integer> res = new ArrayList<>();

		while(f.hasNextLine()) {
			String line = f.nextLine();
		
			if(line.length() == 0) {
				answer = Math.max(answer,current);
				current = 0;
				res.add(current);
			} else {
				current += Integer.parseInt(line);
				res.add(current);
			}
		}

		answer = Math.max(current,answer);
		java.util.Collections.sort(res);
		answer = res.get(res.size()-1)+res.get(res.size()-2)+res.get(res.size()-3);

		System.out.println(answer);
	}
}
