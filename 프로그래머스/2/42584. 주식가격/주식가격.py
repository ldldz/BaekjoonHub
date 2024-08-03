def solution(prices):
    stack = []
    answer = [0] * len(prices);
    for i in range(len(prices)):
        if stack and stack[-1][0] > prices[i]:
            while stack and stack[-1][0] > prices[i]:
                [n, t] = stack.pop()
                answer[t] = i - t
        stack.append([prices[i], i]);
        
        for [n, t] in stack:
            answer[t] = len(prices) - 1 - t
        
    return answer