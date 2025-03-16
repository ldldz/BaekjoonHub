import sys

MOD = 1000000007

def mod_pow(base, exp, mod):
    result = 1
    base = base % mod
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % mod
        base = (base * base) % mod
        exp //= 2
    return result

arr = sys.stdin.read().strip().split("\n")[1:]

ans = 0

for l in arr:
    c, k = map(int, l.split())

    if k == 0:
        continue

    coef = (c * k) % MOD
    power = mod_pow(2, k - 1, MOD)
    ans = (ans + (coef * power) % MOD) % MOD

print(ans)
