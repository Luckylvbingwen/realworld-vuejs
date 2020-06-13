/* 标签相关请求模块 */
import request from '../utils/request'

export const login = ({
  email,
  password
}) => {
  return request({
    method: 'POST', //请求方法
    url: '/api/users/login', //请求路径
    data: { //POST 请求体放到 data 里面
      user: {
        email,
        password
      }
    }
  })
}