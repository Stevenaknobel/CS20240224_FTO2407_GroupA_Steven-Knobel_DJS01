### DJS01: Mars Climate Orbiter Challenge

![alt text](mars.gif)

### Kinematic Calculations and Verification
This program calculates the new velocity, distance, and remaining fuel for an object in motion based on provided initial parameters. The calculations use a set of functions and then verify the results against expected values. This program demonstrates the use of props-like objects in JavaScript for passing parameters to functions.

### Program Overview
**Parameters Object: The program takes a set of parameters, including initial velocity, acceleration, time, initial distance, remaining fuel, and fuel burn rate, as an object (similar to props in React).
**Calculation Functions: There are three main functions that perform calculations based on the provided parameters:
**calcNewVel(props): Calculates the new velocity based on the initial velocity, acceleration, and time provided in the props object.
**calcNewDistance(props): Calculates the new distance based on the initial velocity, initial distance, and time provided in the props object.
**calcRemainingFuel(props): Calculates the remaining fuel based on the initial remaining fuel, fuel burn rate, and time provided in the props object.
**Expected Values: The program contains expected values for the corrected new velocity, distance, and remaining fuel.
**Verification: The program verifies the calculated results against the expected values and prints a message indicating whether the calculated results match the expected values.
**Output: The program outputs the corrected results for new velocity, distance, and remaining fuel.
### How to Run the Program
**Make sure you have the code in a JavaScript file and the necessary runtime to execute it.
**Execute the script.
**The program will calculate the corrected new velocity, distance, and remaining fuel based on the provided parameters.
**The program will verify the calculated results against the expected values and print whether the results match or not.
**The program will print the corrected results.
**Example Output
**Corrected New Velocity: Approximately 48880.00 km/h.
**Corrected New Distance: 10000.00 km.
**Corrected Remaining Fuel: 3200 kg.
**If the calculated results match the expected values, the program will print: All calculated results match expected values.
**If the calculated results do not match the expected values, the program will print: Error: Calculated results do not match expected values!
## Additional Notes
**The program uses strict comparisons to ensure the calculated values match the expected values precisely.
**The program handles exceptions during the calculation of new velocity and will revert to initial velocity in case of an error.
