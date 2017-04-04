function iterativeLog(array) {
    array.forEach(function (element, index) {
        console.log(`${index}: ${element}`);
	  })
}
function iterate(callback) {
    var friends = ['nancy', 'linda', 'marcia', 'sam', 'orrie']
    friends.forEach(callback)
    return friends
}
function doToArray(array,callback) {
    array.forEach(callback)
    return callback
}
