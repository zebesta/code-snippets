arr = [1234234,1212343,12341234, 2134,1234,1324,3412,4312,4312,1234]
answer = [0];


def add_two_reverse_sig_arrays(a,b):
    local_sum = []
    carry = 0
    for i in range(max(len(a), len(b))):
        if(i < min(len(b), len(a))):
            local_sum.append(a[i] + b[i] + carry)
            carry = 0
        elif (i < len(b)):
            local_sum.append(b[i] + carry)
            carry = 0
        elif (i < len(a)):
            local_sum.append(a[i] + carry)
            carry = 0

        if(local_sum[i] > 9):
            local_sum[i] = local_sum[i] - 10
            carry = 1
    if(carry == 1):
        local_sum.append(carry)
    return local_sum

# convert to an array of numbers is reverse order to make carry over easier
for a in arr:
    revNum = [int(arrtmp) for arrtmp in list(str(a))[::-1]]
    answer = add_two_reverse_sig_arrays(answer, revNum)
print(answer)
bignum_ans = (answer[::-1])
sum_ans = [int(arrtmp) for arrtmp in list(str(sum(arr)))]
print(bignum_ans)
print(sum_ans)
assert(bignum_ans == sum_ans)
