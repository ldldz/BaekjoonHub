ans = 0
find = False

def dfs(word, target, words):
    global ans, find
    if word != '': ans += 1
    if word == target:
        find = True
        return
    if len(word) == 5: return
    
    for w in words:
        if not find:
            dfs(word + w, target, words)
    

def solution(word):
    words = ['A', 'E', 'I', 'O', 'U']
    dfs('', word, words)
    return ans