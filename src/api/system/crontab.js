/**
 * Sunny 2020/12/26 上午12:31
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import {prefix} from '@/api/config';
import request from '@/api/request';

export const initCrontab = (params) => {
  return request({
    url: `${prefix}/admin/system/crontab`,
    method: 'POST',
    data: params,
  })
}

export const searchCrontab = () => {
  return request({
    url: `${prefix}/admin/system/crontab`,
    method: 'GET',
  })
}

export const searchJob = (data) => {
  return request({
    url: `${prefix}/admin/system/job`,
    method: 'GET',
    params: data,
  })
}

export const getJob = (id) => {
  return request({
    url: `${prefix}/admin/system/job/${id}`,
    method: 'GET',
  })
}

export const setJobStatus = (id, status) => {
  return request({
    url: `${prefix}/admin/system/job/${id}`,
    method: 'PATCH',
    data: {status: status},
  })
}

export const getJobLog = (params) => {
  return request({
    url: `${prefix}/admin/system/job_log`,
    method: 'GET',
    params: params,
  })
}