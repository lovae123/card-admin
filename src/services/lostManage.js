import { request, config } from 'utils'
const { api } = config
const { lostManage } = api

export async function query (params) {
  return request({
    url: lostManage,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: lostManage,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: lostManage,
    method: 'post',
    data: params,
  })
}
