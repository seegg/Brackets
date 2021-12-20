import request from 'superagent'

function getCellInfo(id: number) {
  return request.get(`/cell/${id}`)
    .then(res => {
      return res.body;
    })

}


export { getCellInfo };