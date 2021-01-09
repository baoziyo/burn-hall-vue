/**
 * Sunny 2021/1/8 下午11:49
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import {prefix} from '@/api/config';
import request from '@/api/request';

export const createGroup = (data) => {
  return request({
    url: `${prefix}/admin/user/group`,
    method: 'POST',
    data: data,
  })
}

export const searchGroup = (data) => {
  return request({
    url: `${prefix}/admin/user/group`,
    method: 'GET',
    params: data,
  })
}

export const updateGroup = (id, data) => {
  return request({
    url: `${prefix}/admin/user/group/${id}`,
    method: 'PUT',
    data: data,
  })
}

export const deleteGroup = (id) => {
  return request({
    url: `${prefix}/admin/user/group/${id}`,
    method: 'DELETE',
  })
}

export const getGroup = (id) => {
  return request({
    url: `${prefix}/admin/user/group/${id}`,
    method: 'GET',
  })
}