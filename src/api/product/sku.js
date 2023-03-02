import request from '@/utils/handle-request'

// 获取sku列表  /admin/product / list / { page } / { limit }  get 参数 page limit
export const reqSkuList = (page, limit) => request({
    url: `/admin/product/list/${page}/${limit}`,
    method: 'get'
})

// sku上架  /admin/product/onSale/{skuId}   get 参数skuId
export const reqOnSale = skuId => request({
    url: `/admin/product/onSale/${skuId}`,
    method: 'get'
})

// sku下架  /admin/product/cancelSale/{skuId}   get 参数skuId
export const reqCancelSale = skuId => request({
    url: `/admin/product/cancelSale/${skuId}`,
    method: 'get'
})

// 获取sku详情  /admin/product/getSkuById/{skuId}   get 参数skuId
export const reqSkuById = skuId => request({
    url: `/admin/product/getSkuById/${skuId}`,
    method: 'get'
})