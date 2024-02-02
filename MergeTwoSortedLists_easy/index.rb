# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
  return [] unless list1 || list2

  array_list1 = list_node_to_array(list1)
  array_list2 = list_node_to_array(list2)

  return array_list2 if array_list1.count.zero?
  return array_list1 if array_list2.count.zero?

  total_list = array_list1 + array_list2
  total_list.sort
end

def list_node_to_array(list)
  array = []

  while list&.val
    array.push(list.val)
    list = list.next
  end

  array
end

# [1,2,4]
# list1 = ListNode.new(1, ListNode.new(2, ListNode.new(4)))

# [1,3,4]
# list2 = ListNode.new(1, ListNode.new(3, ListNode.new(4)))

# []
# list1 = ListNode.new(nil)

# [0]
# list2 = ListNode.new

# [5]
# list1 = ListNode.new(5)

# [1,2,4]
# list2 = ListNode.new(1, ListNode.new(2, ListNode.new(4)))

# [-9,3]
list1 = ListNode.new(-9, ListNode.new(3))

# [5,7]
list2 = ListNode.new(5, ListNode.new(7))


puts "Result => " + merge_two_lists(list1, list2).to_s
