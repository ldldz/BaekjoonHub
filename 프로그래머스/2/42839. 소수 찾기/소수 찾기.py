import math

def isPrime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True
    
def solution(numbers):
    ans = set()
    l = len(numbers)
    visited = [False] * l
    
    def dfs(n):
        nonlocal ans
        if len(n) > 0 and isPrime(int(n)):
            ans.add(int(n))
        if len(n) == l:
            return
        
        for i in range(l):
            if not visited[i]:
                visited[i] = True
                dfs(n + numbers[i])
                visited[i] = False
    dfs('')
    return len(ans)