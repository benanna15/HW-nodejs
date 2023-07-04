process.stdin.write("Entrez une phrase")

process.stdin.on('data',(data) => {
    console.log(data);
    const words = data.toString().split(' ')
console.log(words);
    if(words) process.stdout.write(words.length.toString())
    else process.stderr.write(`phrase vide`)
    

            
})