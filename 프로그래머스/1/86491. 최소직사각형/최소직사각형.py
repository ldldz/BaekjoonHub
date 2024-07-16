def solution(sizes):
    w = 0
    h = 0
    
    for size in sizes:
        w = max(w, max(size))
        h = max(h, min(size))
        
    return w * h