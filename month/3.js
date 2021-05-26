function f(nums, i)
{
    let a = 1;
    for(let j = 0; j < i; ++j)
    {
        if(nums[j] < nums[i])
           a = max(a, f(nums, j) + 1);
    }
    console.log(a);
    return a;
}

f([10,9,2,5,3,7,101,18], 8)


let a = new Date(1621699200000)
console.log(a.getDate());