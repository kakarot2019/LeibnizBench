import numpy as np # Used this tutorial to install these modules for IDLE: https://youtu.be/oE4KeuVNqcQ
import sympy as sp

def pi_calc(n): # Using Leibniz formula to calculate Pi/4
    denominator = 1 #Starting values
    numerator = 1
    quarter_pi = 0
    for i in range(n):
        quarter_pi += numerator/denominator # Starts recurring series
        numerator = numerator * -1 # numerator is always -1 or 1
        denominator += 2 # denominator increases by two, in odd numbers
        #print(f'Stage {i}: {4 * quarter_pi}') # used to see where the program was at
    pi = 4 * quarter_pi # Need to multiply by four to get Pi
    print(pi)

val = int(input('Please give series length: ')) #For now, the degree of accuracy is user determined
pi_calc(val)

