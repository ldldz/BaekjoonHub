def checkNext(x, y, maps):
    return x >= 0 and x < len(maps) and y >= 0 and y < len(maps[0]) and maps[x][y] == 1

def solution(maps):
    answer = 1
    queue = [[0, 0]]
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    flag = False
    
    while queue:
        next_queue = []
        for [x, y] in queue:
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if checkNext(nx, ny, maps):
                    next_queue.append([nx, ny])
                    maps[nx][ny] = 0
                    if nx == len(maps) - 1 and ny == len(maps[0]) - 1: return answer + 1
        answer += 1
        queue = next_queue
    
    return -1