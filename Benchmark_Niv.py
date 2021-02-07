# Used this tutorial to install these modules for IDLE: https://youtu.be/oE4KeuVNqcQ
import time
import cpuinfo

cpu = cpuinfo.get_cpu_info()['brand_raw']

def pi_calc(n): # Using Leibniz formula to calculate Pi/4
    print('Processing...')
    initial_time = time.time() #stores time into variable, before continuing onto the program
    denominator = 1 #Starting values
    numerator = 1
    quarter_pi = 0
    for i in range(n): # n being the value given to the function
        quarter_pi += numerator/denominator # Starts recurring series
        numerator = numerator * -1 # numerator is always -1 or 1
        denominator += 2 # denominator increases by two, in odd numbers
        #print(f'Stage {i}: {4 * quarter_pi}') # used to see where the program was at
    pi = 4 * quarter_pi # Need to multiply by four to get Pi
    print(pi)
    end_time = time.time() #stores time into variable, after executing the program
    t_length = end_time - initial_time #Difference between two values gives processing time
    print(f'Calculation time: {t_length} seconds')

#val = int(input('Please give series length: ')) #For now, the degree of accuracy is user determined

print('Welcome to PyBench.')
print(f'Processor: {cpu}')
print ('Your processor will be timed for how long it takes to calculate the Leibniz formula up to 1,000,000,000 terms, which calculates Pi.')
choice = input('Would you like to continue? ')
if choice.upper() == 'Y':
    pi_calc(1000000000)
else:
    print('Goodbye')

#Nivashan Sutharsan

