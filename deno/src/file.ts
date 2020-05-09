
const bytes = Deno.readFileSync('./src/example.ts');

const text = new TextDecoder().decode(bytes)

console.log(text);

console.log('======');

const main = async () => {
    const bytes = await Deno.readFile('./src/os.ts');
    const text = new TextDecoder().decode(bytes)

    console.log(text);
   }


main()


// const data = new TextEncoder().encode('this is sync result!')

// Deno.writeFileSync('./a.txt', data)

const file = async ()=>{
    const data = new TextEncoder().encode('this is wrating result!')

    await Deno.writeFile('./a.txt', data)
}


file()