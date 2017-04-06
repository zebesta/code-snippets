#!/bin/python3

import sys


n,e = input().strip().split(' ')
n,e = [int(n),int(e)]
adjlist = {}
for a0 in range(e):
    x,y,r = input().strip().split(' ')
    x,y,r = [int(x),int(y),int(r)]
    if x not in adjlist:
        adjlist[x] = {}
        adjlist[x][y] = r
    else:
        adjlist[x][y] = r
    if y not in adjlist:
        adjlist[y] = {}
        adjlist[y][x] = 1000-r
    else:
        adjlist[y][x] = 1000-r

#print(adjlist)

# set up total array
totals = []
for node in range (10):
    totals.append(0)

def dfs(visited, node, distance):
    # print("In DFS with: ",visited,node,distance)
    if distance != 0:
        totals[distance % 10] += 1
    for n in adjlist[node].keys():
        if n not in visited:
            nextvisited = visited[:]
            nextvisited.append(n)
            dfs(nextvisited, n, distance+adjlist[node][n])


# Start at each starting node
for node in range(1,n+1):
    dfs([node], node, 0)

#print(totals)
for t in totals:
    print(t)
