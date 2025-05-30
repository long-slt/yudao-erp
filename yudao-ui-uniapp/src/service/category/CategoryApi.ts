import { http, httpGet, httpPost } from '@/utils/http'

// BPM 流程分类 VO
export interface CategoryVO {
  id: number // 分类编号
  name: string // 分类名
  code: string // 分类标志
  status: number // 分类状态
  sort: number // 分类排序
}

// 查询流程分类列表
// todo 测试使用  拒绝anysripe
export const getCategorySimpleList = (): Promise<any> => {
  return httpGet<any>('/bpm/category/simple-list')
}
