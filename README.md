Recursion
===================
> Learning about recursion

A Principle of Recursion
-------------
>
>*Recursion is an approach to solving problems using a function that calls itself as a subroutine.*
>

You might wonder how we can implement a function that calls itself. The trick is that each time a recursive function calls itself, it reduces the given problem into subproblems. The recursion call continues until it reaches a point where the subproblem can be solved without further recursion.

A recursive function should have the following properties so that it does not result in an infinite loop:

1.  A simple `base case` (or cases) — a terminating scenario that does not use recursion to produce an answer.
2.  A set of rules, also known as `recurrence relation` that reduces all other cases towards the base case.

Note that there could be multiple places where the function may call itself.

### Example

----------

Let's start with a simple programming problem:

> Print a string in reverse order.

You can easily solve this problem iteratively, _i.e._ looping through the string starting from its last character. But how about solving it recursively?

First, we can define the desired function as `printReverse(str[0...n-1])`, where `str[0]` represents the first character in the string. Then we can accomplish the given task in two steps:

1.  `printReverse(str[1...n-1])`: print the substring `str[1...n-1]` in reverse order.
2.  `print(str[0])`: print the first character in the string.

Notice that we call the function itself in the first step, which by definition makes the function recursive.

Here is the code snippet in java:
```
private static void printReverse(char [] str) {
  helper(0, str);
}

private static void helper(int index, char [] str) {
  if (str == null || index >= str.length) {
    return;
  }
  helper(index + 1, str);
  System.out.print(str[index]);
}
```

### Reverse String

----------
Problem: ```reverseString(str[0...n-1])```, where ```str[0...n-1]``` is a list of characters with the first character denoted as ```str[0]```, with the **constraint** that one must modify the string with ```O(1)``` extra space.

**First Attempt**
Using the approach of printing a string in reversed order would following the algorithm:
1.	take the leading character ```str[0]``` from the input string.
2.	call the function itself on the remaining substring, i.e. ```reverseString(str[1...n-1])```.
3.	then append the leading character to the rest returned in the step (2).

The above algorithm could work, except that it does not meet the constraint imposed on the problem.
This is because one would need to keep the intermediate result in step **(2)** which is proportional to the input string (*i.e.* with at least ```O(N)``` space complexity), which in no case could satisfy the constraint (use ```O(1)``` space to modify the string).

**Another Divide-and-Conquer Solution**
Looking closer at the constraint imposed by the problem, if we put it into the context of recursion, we could interpret it as not having additional space consumption between two consecutive recursive calls, *i.e.* we should divide the problem into independent subproblems.
So one of the ideas about how to divide the problem would be reducing the input string at each step into two components:
1.	the leading and trailing characters.
2.	the remaining substring without the leading and trailing characters.
We then can solve the two components independently from each other.
Following the above idea, we could come up the algorithm as follows:
3.	Take the leading and trailing characters from the input string, *i.e.* ```str[0]``` and ```str[n-1]```.
4.	Swap the leading and trailing characters in place.
5.	Call the function recursively to reverse the remaining substring, *i.e.* ```reverseString(str[1...n-2])```.

Note that you can actually swap the order of steps *(2)* and *(3)*, since they are independent tasks.
Yet, it is better to keep them in this order, since this way we can use the optimization called [tail recursion](https://en.wikipedia.org/wiki/Tail_call).
 **Example of reverseString implemented in JavaScript**:
 ```
function reverseString(s) {
	helper(0, s.length - 1, s);
}

function helper(start, end, arr) {
	if(start >= end) {
		console.log(arr);
		return;
	}

	var temp = arr[start];
	arr[start] = arr[end];
	arr[end] = temp;

	helper(start + 1, end - 1, arr);
}

// outputs [ 'o', 'l', 'l', 'e', 'h' ]
reverseString(['h','e','l','l','o']);
 ```

 *NOTE*: You can see, we only need a constant memory in each recursive call in order to swap the leading and trailing characters, which meets the constraint.
