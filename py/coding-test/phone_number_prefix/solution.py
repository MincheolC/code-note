def solution(phone_book):
  phone_book.sort(key=len)
  length = len(phone_book)

  for i in range(0, length):
    base_number = phone_book.pop(0)
    for number in phone_book:
      if number.startswith(base_number):
        return False
  return True