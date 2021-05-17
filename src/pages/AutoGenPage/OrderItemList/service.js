// import request from 'umi-request';
import request from '@/utils/request';

import { buildFileFormData } from '@/utils/utils'
export async function queryOrderItem(params) {
  return request('/api/xadmin/v1/order_item', {
    params,
  });
}
export async function removeOrderItem(params) {
  return request(`/api/xadmin/v1/order_item/${params}`, {
    method: 'DELETE',
  });
}
export async function addOrderItem(params) {
  let fileFieldList = ["img"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/order_item', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateOrderItem(params, id) {
  let fileFieldList = ["img"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/order_item/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryOrderItemVerboseName(params) {
  return request('/api/xadmin/v1/order_item/verbose_name', {
    params,
  });
}
export async function queryOrderItemListDisplay(params) {
  return request('/api/xadmin/v1/order_item/list_display', {
    params,
  });
}
export async function queryOrderItemDisplayOrder(params) {
  return request('/api/xadmin/v1/order_item/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

