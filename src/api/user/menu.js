/**
 * Sunny 2021/1/8 下午9:26
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import {prefix} from '@/api/config';
import request from '@/api/request';

export const searchMenu = () => {
  return request({
    url: `${prefix}/admin/user/menu`,
    method: 'GET',
  })
}