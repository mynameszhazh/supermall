import { request } from '@/network/request'

export function getHomeMuiltidata () {
  return request({
    url: '/home/multidata'
  })
}
