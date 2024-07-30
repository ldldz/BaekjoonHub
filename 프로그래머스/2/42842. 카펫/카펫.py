import math

def solution(brown, yellow):
    for h in range(3, int(math.sqrt(brown + yellow)) + 1):
        w = (brown + yellow) / h
        if 2 * w + 2 * h - 4 == brown:
            return [w, h]
    return 0