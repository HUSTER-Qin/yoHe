
// const process = Deno.run({
//     cmd:[Deno.execPath(), 'run', '--allow-net','./src/server.ts'] 
// })

// setTimeout(() => {
//     process.close()
// }, 100*60);


async function process() {
    const process: Deno.Process = Deno.run({
        cmd:[Deno.execPath(), 'run', '--allow-net','./src/server.ts'], 
        stdout: "piped",
    });
    const stdout:  (Deno.Reader & Deno.Closer) | undefined = process.stdout;
    if (stdout) {
      const chunk = new Uint8Array(1024);
      await stdout.read(chunk);
      console.log(`[process.stdout]: ${new TextDecoder().decode(chunk)}`)
    }
  
    setTimeout(() => {
      process.close();
      console.log('close process');
    }, 1000 * 60);
  }
  
  
  process();