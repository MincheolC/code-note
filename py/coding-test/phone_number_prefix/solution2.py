def solution2(phone_book):
  for i in range(len(phone_book)):
    pivot = phone_book[i]
    for j in range(i+1, len(phone_book)):
      strlen = min(len(pivot), len(phone_book[j]))
      if pivot[:strlen] == phone_book[j][:strlen]:
        return False
  return True

def solution3(phoneBook):
    phoneBook = sorted(phoneBook)

    for p1, p2 in zip(phoneBook, phoneBook[1:]):
        if p2.startswith(p1):
            return False
    return True