
import { readFileSync, readFile, writeFileSync, appendFileSync}  from 'fs' ; 
import { resolve } from 'path';


writeFileSync('./file.txt','Hello voila');
appendFileSync('./file.txt',' la suite')

/* const a =() => {
  setTimeout(()=>console.log('a'),1000)
}
const b =() => {
    console.log('b');
  }

  a()
  b()

  const nyPromise = new Promise ((resoleve, reject)=>{
    setTimeout(() => {
      resolve("foo")
    },300)
    })

 */
/* //const data = readFile('./file.txt',() => console.log('finish'));
const data = readFileSync('./file.txt');
// blocks here until file is read
console.log(data); 
//moreWork();nod */