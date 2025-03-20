def min_vertex(dice):
  return min([dice[0] + dice[1] + dice[2]
  ,dice[0] + dice[1] + dice[3]
  ,dice[0] + dice[2] + dice[4]
  ,dice[0] + dice[3] + dice[4]
  ,dice[5] + dice[1] + dice[2]
  ,dice[5] + dice[1] + dice[3]
  ,dice[5] + dice[2] + dice[4]
  ,dice[5] + dice[3] + dice[4]])
  
def min_edge(dice):
  sum_edge = []
  for i in range(1, 5):
    sum_edge += [dice[0] + dice[i], dice[5] + dice[i]]
  sum_edge += [dice[1] + dice[2], dice[1] + dice[3], dice[4] + dice[3], dice[4] + dice[2]]

  return min(sum_edge)
def solve():
  n = int(input())
  dice = list(map(int, input().split()))
  if n == 1:
    print(sum(dice) - max(dice))
    return
  ans = 0
  ans += min_vertex(dice) * 4
  ans += min_edge(dice) * ((n - 2) * 4 + (n - 1) * 4)
  ans += (((n - 2) * (n - 1)) * 4 + ((n - 2) ** 2)) * min(dice)
  print(ans)
  
solve()