/* 文章相关请求模块 */
import request from '../utils/request'

export const getArticles = () => {
  return request({
    method: 'GET', //请求方法
    url: '/api/articles' //请求路径
  })
}

export const getArticleBySlug = slug => {
  return request({
    method: 'GET', //请求方法
    url: `/api/articles/${slug}` //请求路径
  })
}

export const createArticle = ({
  title,
  description,
  body,
  tagList = []
}) => {
  return request({
    method: 'POST', //请求方法
    url: '/api/articles', //请求路径
    data: {
      article: {
        title,
        description,
        body,
        tagList
      }
    }
  })
}