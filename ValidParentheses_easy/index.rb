# @param {String} s
# @return {Boolean}
def is_valid(s)
  return false if s.empty? || s.length <= 1

  result = true
  open_brackets = ['(', '{', '[']
  close_brackets = [')', '}', ']']
  array_string = s.split("")
  brackets = []

  array_string.each do |item, index|
    
    if open_brackets.include?(item)
      brackets.push([item])

    elsif close_brackets.include?(item)
      index = close_brackets.find_index(item)
      open_bracket = open_brackets[index]

      last_bracket = brackets.last
      if last_bracket&.include?(open_bracket)
        brackets.pop
        next
      else
        result = false
        break
      end
    end
  end

  return false if brackets.count > 0

  result
end

# s = "()"
# s = "()[]{}"
# s = "(]"
# s = "{[]}"
# s = "["
# s = "(("
s = "){"

puts is_valid(s)
