/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

function decodeString(s) {
	let stack = []
	let repeat
	for (let i of s) {
		if (i !== ']') {
			stack.push(i)
		} else {
			let temp = ''
			while (stack[stack.length - 1] !== '[') {
				temp = stack.pop() + temp
			}
			stack.pop()
			let count
			if (stack.length > 0 && stack[stack.length - 1].match(/[0-9]+/)) {
				count = parseInt(stack.pop())
			}
			repeat = temp.repeat(count)
			stack.push(repeat)
		}
	}
	return repeat
}
