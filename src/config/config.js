let config = {}

export const API_HOST = 'http://localhost:3002'
export const Product_API = API_HOST + '/product'
export const IMG_PATH = API_HOST + '/img/product_img/'
// 後端的路由
export const ProductDetail_API =
  'http://localhost:3002/product/'

config = {
  API_HOST,
  IMG_PATH,
  Product_API,
  ProductDetail_API,
}
export default config
