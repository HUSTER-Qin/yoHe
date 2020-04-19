
package main

type ListNode struct {
	val int
	Next  *ListNode
}


func main() {
	var arr = [11]int{1,2,3,4,4,5,6,7,8,9}
	headNode := &ListNode{
		val:0,
		Next:nil,
	}
	list := headNode
	i := 0
	for  ; i<10;i++  {
		list.Next = &ListNode{arr[i],nil}
	}


}