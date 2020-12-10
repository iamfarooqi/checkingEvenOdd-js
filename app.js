


var nums = [];



function isEven(nums) {
    nums.push(document.getElementById("input").value);

    document.write("You Entered :", nums + "<br />");

    if (nums % 2 === 0) {
        document.write("You Entered Even Number");
    } else {
        document.write("You Entered Odd Number")
    }

    return false;
}