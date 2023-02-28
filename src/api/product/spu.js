import request from '@/utils/handle-request'

// 获取Spu列表数据  /admin/product / { page } / { limit }   get  参数 page limit category3Id
export const reqSpuList = (page, limit, category3Id) => request({
    url: `/admin/product/${page}/${limit}`,
    method: 'get',
    params: {
        category3Id
    }
});

// 获取Spu信息  /admin/product/getSpuById/{spuId}   get     参数SpuId
export const reqSpu = spuId => request({
    url: `/admin/product/getSpuById/${spuId}`,
    method: 'get'
})

// 获取品牌信息 /admin/product/baseTrademark/getTrademarkList get 无参数
export const reqTradeMarkList = () => request({
    url: `/admin/product/baseTrademark/getTrademarkList`,
    method: 'get'
})

// 获取Spu图片  /admin/product/spuImageList/{spuId} get 参数spuId
export const reqSpuImageList = spuId => request({
    url: `/admin/product/spuImageList/${spuId}`,
    method: 'get'
})

// 获取销售属性 /admin/product/baseSaleAttrList get 无参数
export const reqBaseSaleAttrList = () => request({
    url: `admin/product/baseSaleAttrList`,
    method: 'get'
})