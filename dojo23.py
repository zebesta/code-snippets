def balanced(str):
    stack = []
    brackets = {')' : '(', ']':'[', '}':'{'}

    for l in str:
        if (l not in brackets):
            stack.append(l)
        else:
            if (len(stack) == 0 or stack.pop() != brackets[l]):
                print("NO")
                return

    if(len(stack) == 0):
        print("YES")
    else:
        print("NO")

#Truthy
balanced("{[()]}")
balanced("")

#Falsy
balanced("{")
balanced("]")
balanced("[({}])")
