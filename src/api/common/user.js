/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import {prefix} from '@/api/config';
import request from '@/api/request';

export const searchUsers = params => {
  return request({
    url: `${prefix}/user/user`,
    method: 'GET',
    params: params,
  })
}