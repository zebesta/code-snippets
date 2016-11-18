import math


def bubbleUp(arr, i):
    # base case, at root
    if(i<1):
        return
    # if node is greater than parent, swap them and call again on parent
    if(arr[i]>arr[math.floor((i-1)/2)]):
        tmp = arr[i]
        arr[i] = arr[math.floor((i-1)/2)]
        arr[math.floor((i-1)/2)] = tmp
        bubbleUp(arr, math.floor((i-1)/2))
    return arr

def addToPQueue(arr, val):
    print("adding " + str(val) + " to the pQueue")
    arr.append(val)
    bubbleUp(arr, len(arr)-1)
    return arr

def removeFromPQueue(arr):
    result = arr[0];
    arr[0] = arr.pop();
    arr = maxHeap(arr, 0);
    print("Removing " + str(result) + " from the pQueue")
    return arr, result

def maxHeap(arr, i):
    #check if in bounds and has 2 children
    if len(arr) > (i*2+2):
        #check if less than a child node
        if arr[i] < arr[i*2+1] or arr[i] < arr[i*2+2]:
            if arr[i*2+2] < arr[i*2+1]:
                #swap parent with left child
                tmp = arr[i]
                arr[i] = arr[i*2+1]
                arr[i*2+1] = tmp
                # max heapify left child
                arr = maxHeap(arr,i*2+1)
                return arr
            else:
                #swap parent with right child
                tmp = arr[i]
                arr[i] = arr[i*2+2]
                arr[i*2+2] = tmp
                # max heapify right child
                arr = maxHeap(arr,i*2+2)
                return arr
    #check if in bounds and has 1 child
    elif len(arr) > (i*2+1):
        if arr[i] < arr[i*2+1]:
            #swap parent with left child
            tmp = arr[i]
            arr[i] = arr[i*2+1]
            arr[i*2+1] = tmp
            # max heapify left child
            arr = maxHeap(arr,i*2+1)
            return arr
    else:
        return arr


test = [80,45,1,3,5,100,42,38,56,23,65,23,65,83,102]
print("Original:")
print(test)

for i in range(math.floor(len(test)/2-1), -1, -1):
    maxHeap(test, i)


print("Max Heaped:")
print(test)
test = addToPQueue(test, 200)
print(test)
test, value = removeFromPQueue(test);
print(test)
test = addToPQueue(test, 45)
print(test)
test, value = removeFromPQueue(test);
print(test)
test = addToPQueue(test, 2)
print(test)
test, value = removeFromPQueue(test);
print(test)
