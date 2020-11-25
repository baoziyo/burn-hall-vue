import {prefix} from '@/api/config';
import request from '@/api/request';

export const searchUsers = params => {
  return request({
    url: `${prefix}/users`,
    method: 'GET',
    params: params,
  })
}