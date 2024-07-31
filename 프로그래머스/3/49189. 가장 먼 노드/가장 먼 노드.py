def solution(n, edge):
    ans = 0
    graph = [[] for _ in range(n+1)]
    queue = [1]
    visited = [False] * (n + 1)
    visited[1] = True
    
    for [v1, v2] in edge:
        graph[v1].append(v2)
        graph[v2].append(v1)
    
    while queue:
        next_queue = []
        
        for v in queue:
            for i in graph[v]:
                if not visited[i]:
                    visited[i] = True
                    next_queue.append(i)
                    
        if len(next_queue): ans = len(next_queue)
        queue = next_queue
        
    return ans