// import request from 'umi-request';
import request from '@/utils/request';

export async function changePassword(params) {
  return request('/api/xadmin/v1/change_password', {
    method: 'POST',
    data: { ...params },
  });
}
