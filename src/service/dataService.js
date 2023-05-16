import axios from 'axios'

const URL2 = 'https://kosis.kr/openapi/statisticsList.do'
const URL = 'http://localhost:18307'
const PATH = '/api/v1/home'
const method = 'getList'
const format = 'json'
const jsonVD = 'Y'
const apiKey = 'MWQ3NDIwZDIwMWIxNDZlMjRkNzg5ZTMwZDdmMzM0ZjU='
const orgId = '101' //기관 ID
const tblId = 'DT_1B8000F' //통계표 ID
const objL1 = '11+30' //분류1
const objL2 = ''
const objL3 = ''
const objL4 = ''
const objL5 = ''
const objL6 = ''
const objL7 = ''
const objL8 = ''

const itmId = '' //항목
const prdSe = 'Y' //수록주기
const newEstPrdCnt = '3' //최근시점 기준
const startPrdDe = '2022' //시작 기간
const endPrdDe = '2022' //종료 기간

export const getDatas = () => {
  axios
    .get(URL + PATH, {
      params: {
        apiKey: apiKey,
        orgId: orgId,
        tblId: tblId,
        objL1: objL1,
        prdSe: prdSe,
        newEstPrdCnt: newEstPrdCnt,
        format: format,
        jsonVD: jsonVD,
      },
    })
    .then((res) => {
      console.log(res)
    })
}
