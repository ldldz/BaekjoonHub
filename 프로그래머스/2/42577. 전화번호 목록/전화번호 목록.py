def solution(phone_book):
    dict = {}
    phone_book.sort(key=len)
    lens = [len(phone_book[0])]
    
    for n in phone_book:
        for l in lens:
            if n[:l] in dict: 
                return False
        dict[n] = True
        if len(n) > lens[-1]: lens.append(len(n))
    return True