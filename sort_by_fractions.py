arr = [2134.1234, 14.432,231.231,2314.43,23.2314,243.4123,243.03,2134,244.01,234.02]


def sort_by_frac(a):
    return a - a//1

print(arr)
print(sorted(arr, key=sort_by_frac))
