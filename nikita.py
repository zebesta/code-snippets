num_cases = int(input())

def nikita(inp, splits):
    runningSum = 0
    sumMap= {}
    for n, i in enumerate(inp):
        runningSum += i
        sumMap[runningSum] = n+1
    if runningSum==0:
        return len(inp)-1
    else:
        if runningSum % 2 == 0 and (runningSum/2 in sumMap.keys()):
            inp1 = inp[:sumMap[runningSum/2]]
            inp2 = inp[sumMap[runningSum/2]:]
            return max(nikita(inp1, splits), nikita(inp2, splits)) + 1
        else:
            return 0


for x in range(num_cases):
    input()
    nums = [int(y) for y in input().split(" ")]
    print(nikita(nums, 0))
