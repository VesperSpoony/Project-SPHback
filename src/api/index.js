// 将四个模块请求的接口统一暴露
import * as trademark from './product/trademark';
import * as attr from './product/attr';
import * as sku from './product/sku';
import * as spu from './product/spu';
import permission from './acl/permission';
import role from './acl/role';
import * as user from './acl/user';

export default {
    trademark,
    attr,
    sku,
    spu,
    user,
    role,
    permission
}