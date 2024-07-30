def solution(k, dungeons):
    l = len(dungeons)
    visited = [False] * l
    
    def dfs(k, d):
        if d == l:
            return 1
        a = []
        flag = False
        
        for i in range(l):
            if not visited[i] and dungeons[i][0] <= k:
                flag = True
                visited[i] = True
                a.append(dfs(k - dungeons[i][1], d + 1))
                visited[i] = False
        
        if flag:
            return max(a) + 1
        else:
            return 1
                

    m = dfs(k, 0) - 1
    
    return m