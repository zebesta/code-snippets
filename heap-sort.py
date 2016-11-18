import math
import random
import timeit

# arr = [5,12,61,1,37,90,91,97]
# arrSorted = []
# print(arr)



def heapSortWrapped(arr):
    arrSorted = []
    def maxHeapify(i):
        print(arr)
        print("Max heapifying at index " + str(i))
        #check if in bounds and has 2 children
        if len(arr) > (i*2+2):
            #check if less than a child node
            if arr[i] < arr[i*2+1] or arr[i] < arr[i*2+2]:
                if arr[i*2+2] < arr[i*2+1]:
                    print("1")
                    #swap parent with left child
                    tmp = arr[i]
                    arr[i] = arr[i*2+1]
                    arr[i*2+1] = tmp
                    # max heapify left child
                    maxHeapify(i*2+1)
                    return arr
                else:
                    print("2")
                    #swap parent with right child
                    tmp = arr[i]
                    arr[i] = arr[i*2+2]
                    arr[i*2+2] = tmp
                    # max heapify right child
                    maxHeapify(i*2+2)
                    return arr
        #check if in bounds and has 1 child
        elif len(arr) > (i*2+1):
            if arr[i] < arr[i*2+1]:
                print("3")
                #swap parent with left child
                tmp = arr[i]
                arr[i] = arr[i*2+1]
                arr[i*2+1] = tmp
                # max heapify left child
                maxHeapify(i*2+1)
                return arr
        else:
            print("4")
            # if (i-1 > 0):
            #     maxHeapify(i-1)
            return arr

    # arrayToHeap = [5,12,61,1,37,90,91,97]
    # print(arrayToHeap)
    print(len(arr)/2 - 2)

    #construct original heap
    for i in range(math.floor(len(arr)/2-1), -1, -1):
        arr = maxHeapify(i)
    print(arr)

    #sort the heap
    def heapSort (arr):
        while len(arr) > 1:
            temp = arr[0]
            arr[0] = arr.pop()
            arrSorted.append(temp)
            maxHeapify(0)
            print(arr)
        arrSorted.append(arr[0])

    heapSort(arr)



for power in range(1,7):
    maxx = 10**power
    a = [random.randint(0,maxx) for i in range(maxx)]
    start_time = timeit.default_timer()
    print(a)
    heapSortWrapped(a)
    t = timeit.default_timer() - start_time
    print('{:07.5f} for array size {}'.format(t,maxx))
