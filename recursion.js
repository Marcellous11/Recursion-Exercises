/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
	if (idx === nums.length) return 1;
	return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, long = 0) {
	if (words.length === 0) return long;
	long = Math.max(words.pop().length, long);
	return longest(words, long);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
	if (str.length <= idx) return newStr;
	newStr += str[idx];
	return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
	let lefttIdx = idx;
	let rightIdx = str.length - idx - 1;
	if (lefttIdx >= rightIdx) return true;
	if (str[lefttIdx] !== str[rightIdx]) return false;
	return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
	if (arr.length === idx) return -1;
	if (arr[idx] === val) return idx;
	return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = '', idx = 0) {
	if (str.length < idx) return newStr;
	newStr += str.slice(str.length - 1 - idx, str.length - idx);
	return revString(str, newStr, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let stringArr = [];
	for (let key in obj) {
		if (typeof obj[key] === 'string') stringArr.push(obj[key]);
		if (typeof obj[key] === 'object') stringArr.push(...gatherStrings(obj[key]));
	}
	return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
* return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx = 0) {
	if (idx === arr.length) return -1;
	if (arr[idx] === val) return idx;
	return binarySearch(arr, val, idx + 1);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
