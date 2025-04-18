def solve():
  n = int(input())
  stair = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  tmp = [0] * 10
  for _ in range(n - 1):
    tmp[0] = stair[1]
    tmp[9] = stair[8]
    for i in range(1, 9):
      tmp[i] = stair[i - 1] + stair[i + 1]
    stair = tmp.copy()
  print(sum(stair) % 1000000000)
solve()