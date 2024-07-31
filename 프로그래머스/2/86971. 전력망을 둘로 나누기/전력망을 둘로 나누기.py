def dfs(graph, v, visited, weights):
    w = 0
    visited[v] = True
    
    for [c, n] in graph:
        if n == v:
            c, n = n, c
        if c == v and not visited[n]:
            w += dfs(graph, n, visited, weights)
    
    weights[v] = w + 1
    return w + 1
    
def solution(n, wires):
    ans = 101
    visited = [False] * (n + 1)
    weights = [0] * (n + 1)
    dfs(wires, wires[0][0], visited, weights)
    
    for [v1, v2] in wires:
        if weights[v1] < weights[v2]:
            v1, v2 = v2, v1
        ans = min(ans, abs(n - 2 * weights[v2]))
    return ans