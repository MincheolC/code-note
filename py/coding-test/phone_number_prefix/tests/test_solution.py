from phone_number_prefix.solution import solution
from phone_number_prefix.solution2 import solution2, solution3

def test_solution():
  _phone_books_1 = ["119", "97674223", "1195524421"]
  _phone_books_2 = ["123", "456", "789"]
  _phone_books_3 = ["12", "123", "1235", "567", "88"]

  assert solution(_phone_books_1) == False, '["119", "97674223", "1195524421"] should be False'
  assert solution(_phone_books_2) == True, '["123", "456", "789"] should be True'
  assert solution(_phone_books_3) == False, '["12", "123", "1235", "567", "88"] should be False'

def test_solution2():
  _phone_books_1 = ["119", "97674223", "1195524421"]
  _phone_books_2 = ["123", "456", "789"]
  _phone_books_3 = ["12", "123", "1235", "567", "88"]

  assert solution2(_phone_books_1) == False, '["119", "97674223", "1195524421"] should be False'
  assert solution2(_phone_books_2) == True, '["123", "456", "789"] should be True'
  assert solution2(_phone_books_3) == False, '["12", "123", "1235", "567", "88"] should be False'

def test_solution3():
  _phone_books_1 = ["119", "97674223", "1195524421"]
  _phone_books_2 = ["123", "456", "789"]
  _phone_books_3 = ["12", "123", "1235", "567", "88"]

  assert solution3(_phone_books_1) == False, '["119", "97674223", "1195524421"] should be False'
  assert solution3(_phone_books_2) == True, '["123", "456", "789"] should be True'
  assert solution3(_phone_books_3) == False, '["12", "123", "1235", "567", "88"] should be False'
