import java.util.HashMap;
import java.util.Map;

public class DataElementOccurrences {
    public static void main(String[] args) {
        // Create a map to store data element occurrences
        Map<String, Integer> dataElementOccurrences = new HashMap<>();

        // Simulated data
        String[] accountIds = {"A123", "B456", "C789", "A123", "B456"};
        String[] datesOfBirth = {"2000-01-01", "1995-06-15", "1987-09-30", "2000-01-01", "1995-06-15"};

        // Count occurrences of Account IDs
        for (String accountId : accountIds) {
            if (dataElementOccurrences.containsKey(accountId)) {
                int count = dataElementOccurrences.get(accountId);
                dataElementOccurrences.put(accountId, count + 1);
            } else {
                dataElementOccurrences.put(accountId, 1);
            }
        }

        // Print Account ID occurrences
        System.out.println("Account ID occurrences:");
        for (Map.Entry<String, Integer> entry : dataElementOccurrences.entrySet()) {
            String accountId = entry.getKey();
            int count = entry.getValue();
            System.out.println(accountId + ": " + count);
        }

        // Clear the map for counting Date of Birth occurrences
        dataElementOccurrences.clear();

        // Count occurrences of Date of Births
        for (String dateOfBirth : datesOfBirth) {
            if (dataElementOccurrences.containsKey(dateOfBirth)) {
                int count = dataElementOccurrences.get(dateOfBirth);
                dataElementOccurrences.put(dateOfBirth, count + 1);
            } else {
                dataElementOccurrences.put(dateOfBirth, 1);
            }
        }

        // Print Date of Birth occurrences
        System.out.println("\nDate of Birth occurrences:");
        for (Map.Entry<String, Integer> entry : dataElementOccurrences.entrySet()) {
            String dateOfBirth = entry.getKey();
            int count = entry.getValue();
            System.out.println(dateOfBirth + ": " + count);
        }
    }
}
