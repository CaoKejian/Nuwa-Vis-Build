export const Status: { [key: string]: string} = {
  online: '0',
  draft: '1',
  offline: '2',
}
export const StatusEnum: { [key: string]: string } = {
  [Status.online]: '线上',
  [Status.draft]: '草稿',
  [Status.offline]: '下线',
}