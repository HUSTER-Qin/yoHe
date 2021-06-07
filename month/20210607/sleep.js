

function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
}

async function  main(){
    await sleep(3000).then(console.log("red"))
    await sleep(1000).then(console.log("red"))
    await sleep(2000).then(console.log("red"))
}
main()