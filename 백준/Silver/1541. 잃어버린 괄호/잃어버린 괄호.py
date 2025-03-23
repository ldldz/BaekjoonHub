exp = input().split('-')
ans = sum(map(int, exp.pop(0).split('+')))
for i in exp:
    ans -= sum(map(int, i.split('+')))
print(ans)