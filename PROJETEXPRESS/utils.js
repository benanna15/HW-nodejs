export const succesResponse =(res,data) => {
   //return res.sendStatus(200).send(data)
   return res.status(200).send(data)
}

export const errorResponse =(res, error, codeStatus=500) => {
 // return   res.sendStatus(500).send({error})
 return   res.status(codeStatus).send({error})

}