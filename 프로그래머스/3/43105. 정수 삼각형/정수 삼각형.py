def check(x, y):
    return x >= 0 and y >= 0 and y <= x

def solution(triangle):
    for i in range(len(triangle)):
        for j in range(len(triangle[i])):
            a, b = 0, 0
            if check(i - 1, j):
                a = triangle[i - 1][j]
            if check(i - 1, j - 1):
                b = triangle[i - 1][j - 1]
                
            triangle[i][j] = max([triangle[i][j] + a, triangle[i][j] + b])
            
    return max(triangle[-1])