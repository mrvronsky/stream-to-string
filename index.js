async function streamToString(stream) { 
   let str = ''
   for await (let data of stream) { 
     str += data
   }
   return str
}

module.exports = { 
  streamToString
}