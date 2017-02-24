with open ('./input.txt') as file:
    contents = file.readlines()
def pretty_print(ls): [print(e) for e in ls]
pyramid = []
lines = contents
for l in lines:
    split_line = l.split()
    # print(split_line)
    split_lines_nums = list(map(int, split_line))
    pyramid.append(split_lines_nums)
# print(pyramid[0])
print(pyramid)
pyramid.reverse()
print(pyramid)
possible_routes = []
pyr = []

for i in range(len(pyramid)):
    pyr.append(pyramid[i].copy())
    for j in range(len(pyramid[i])):
        if(i>0):
            pyr[i][j] = max(pyr[i-1][j] + pyramid[i][j], pyr[i-1][j+1] + pyramid[i][j])
print(pyr[-1][-1])
pretty_print(pyramid)
pretty_print(pyr)
