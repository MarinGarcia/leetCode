# 0  1  2  3  4  5  6  7    8   9  10
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

def fib(n)
  data = {}
  (n + 1).times do |index|
    if index <= 1
      data[index] = index 
      next
    end

    before_value = data[index - 1]
    before_before_value = data[index - 2]
    data[index] = before_value + before_before_value
  end
  data[n]
end

puts "El resultado es: #{fib(8)}"
