// 品牌数据管理模块
import request from '@/utils/handle-request';
// 获取品牌列表 /admin/product/baseTrademark/{page}/{limit} get 参数page limit
export const reqTradeMarkList = (page, limit) => request({
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: 'get'
})

// 添加品牌 /admin/product/baseTrademark/save post 参数name logo
// 修改品牌 /admin/product/baseTrademark/update put 参数id name logo
export const reqAddOrUpdateTradeMark = (trademark) => {
    if (trademark.id) {
        // 如果参数有id，则是修改
        return request({
            url: `/admin/product/baseTrademark/update`,
            method: 'put',
            data: trademark
        })
    } else {
        return request({
            url: `/admin/product/baseTrademark/save`,
            method: 'post',
            data: trademark
        })
    }
}

// 删除品牌 /admin/product/baseTrademark/remove/{id} delete 参数id
export const reqDeleteTradeMark = (id) => request({
    url: `/admin/product/baseTrademark/remove/${id}`,
    method: 'delete'
})