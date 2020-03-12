import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/admin/info',
//     method: 'post',
//     params: { token }
//   })
// }
export function getInfo(data) {
  return request({
    url: '/admin/info',
    method: 'get',
    data
  })
}

export function logout(data) {
  return request({
    url: '/admin/logout',
    method: 'get',
    data
  })
}
