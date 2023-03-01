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

// 修改/添加Spu 参数唯一区别：是否带id
// 修改 /admin/product/updateSpuInfo post 参数spuInfo
// 添加 /admin/product/saveSpuInfo  post 参数spuInfo
export const reqAddOrUpdateSpu = (spuInfo) => {
    if (spuInfo.id) {
        return request({
            url: '/admin/product/updateSpuInfo',
            method: 'post',
            data: spuInfo
        })
    } else {
        return request({
            url: '/admin/product/saveSpuInfo',
            method: 'post',
            data: spuInfo
        })
    }
}

// 删除Spu  /admin/product/deleteSpu/{spuId} delete 参数spuId
export const reqDeleteSpu = spuId => request({
    url: `/admin/product/deleteSpu/${spuId}`,
    method: 'delete'
})

//获取某个Spu图片接口  /admin/product/spuImageList/{spuId} get 参数spuId
// export const reqSpuImageList = spuId => request({
//     url: `/admin/product/spuImageList/${spuId}`,
//     method: 'get'
// });

// 获取某个Spu销售属性  /admin/product/spuSaleAttrList/{spuId} get 参数spuId
export const reqSpuSaleAttrList = spuId => request({
    url: `/admin/product/spuSaleAttrList/${spuId}`,
    method: 'get'
})

// 获取平台属性 /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id} get 参数categoryId
export const reqAttrInfoList = (category1Id, category2Id, category3Id) => request({
    url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
    method: 'get'
})

// 添加sku  /admin/product/saveSkuInfo  post 参数skuInfo
export const reqAddSku = skuInfo => request({
    url: '/admin/product/saveSkuInfo',
    method: 'post',
    data: skuInfo
})

// 获取Spu下的SkuList   /admin/product/findBySpuId/{spuId}  get 参数spuId
export const reqSkuList = spuId => request({
    url: `/admin/product/findBySpuId/${spuId}`,
    method: 'get'
})
