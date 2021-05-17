// import request from 'umi-request';
import request from '@/utils/request';

import { buildFileFormData } from '@/utils/utils'
export async function queryComment(params) {
  return request('/api/xadmin/v1/comment', {
    params,
  });
}
export async function removeComment(params) {
  return request(`/api/xadmin/v1/comment/${params}`, {
    method: 'DELETE',
  });
}
export async function addComment(params) {
  let fileFieldList = ["avatar"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/comment', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateComment(params, id) {
  let fileFieldList = ["avatar"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/comment/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryCommentVerboseName(params) {
  return request('/api/xadmin/v1/comment/verbose_name', {
    params,
  });
}
export async function queryCommentListDisplay(params) {
  return request('/api/xadmin/v1/comment/list_display', {
    params,
  });
}
export async function queryCommentDisplayOrder(params) {
  return request('/api/xadmin/v1/comment/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

