import request from '@/utils/handle-request'

// 获取Spu列表数据  /admin/product / { page } / { limit }   参数 page limit category3Id
export const reqSpuList = (page, limit, category3Id) => request({
    url: `/admin/product/${page}/${limit}`,
    method: 'get',
    params: {
        category3Id
    }
}) 
