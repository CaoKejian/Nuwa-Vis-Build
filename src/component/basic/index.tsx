import React, { FC, useState } from "react"
import * as s from './index.module.less'
import { Button, Table, TableProps, TableSort, Tag } from "tdesign-react"
import Row from "../../share/Row"
import SvgIcon from "../../share/SvgIcon"
import { Status, StatusEnum } from "../constant"

interface TableData {
  applicant: string,
  activityName: string,
  createTime: string,
  status: string
}

const Basic: FC = () => {
  const labelWidth = '120px'
  const columns: TableProps['columns'] = [
    {
      colKey: 'applicant',
      width: 80,
      title: () => <span style={{ display: 'flex', alignItems: 'center' }}>创建人</span>
    },
    {
      colKey: 'activityName',
      title: '子活动名称',
      width: 80,
      cell: ({ row }) => <div>{row.activityName}</div>,
    },
    { colKey: 'createTime', width: 100, sorter: true, title: '创建时间' },
    {
      colKey: 'status', width: 40, title: '状态',
      cell: ({ row }) => {
        let theme: "success" | "default" | "primary" | "warning" | "danger" | undefined
        switch (row?.status) {
          case Status.online:
            theme = 'success'
            break
          case Status.draft:
            theme = 'default'
            break
          case Status.offline:
            theme = 'warning'
            break
          default:
            break
        }
        return <Tag theme={theme} variant="dark">{StatusEnum[row.status]}</Tag>
      }
    },
    {
      colKey: 'action', width: 100, title: '操作',
      cell: ({ row }) => <>
        <Button className={s.enter}>进入</Button>
        <Button disabled={row.status === Status.online} className="t-button-delete" theme="danger">删除</Button>
      </>
    },
  ]
  const data: TableData[] = [
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
      status: '0'
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
      status: '1'
    },
    {
      applicant: '张三',
      activityName: '子活动3',
      createTime: '2024-09-03',
      status: '2'
    },
  ]

  const [sort, setSort] = useState<TableSort>({
    sortBy: 'status',
    descending: true, // 是否按照降序进行排序
  })

  const onSortChange = (sort: TableSort) => {
    setSort(sort)
    console.log(sort)
    // request(sort)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.phone}>
          <div className={s.content}>
            <img src="https://gd-hbimg.huaban.com/4533f7b3c3a2daba830b35730b299228d0f7900017687e-gQmslT_fw236" alt="" />
          </div>
        </div>
      </div>
      <div className={s.right}>
        <Row label="活动名称" labelWidth={labelWidth}>加桌落地页</Row>
        <Row label="活动描述" labelWidth={labelWidth}>添加小程序到桌面，用户在桌面直接启动小程序</Row>
        <Row label="活动负责人" labelWidth={labelWidth}>colinccao</Row>
        <Row label="历史活动" labelWidth={labelWidth}>
          <Table
            bordered
            data={data}
            columns={columns}
            rowKey="property"
            sort={sort}
            onSortChange={onSortChange}
            pagination={{
              defaultCurrent: 1,
              defaultPageSize: 5,
              pageSizeOptions: [5, 10],
              total: data.length,
            }}
          />
        </Row>

        <div className={s.btn}>
          <Button className={s.create}
            suffix={<SvgIcon svgName="rule" svgClass={s.createIcon}/>}
          >活动设置</Button>
          <Button
            suffix={<SvgIcon svgName="create" svgClass={s.createIcon}/>}
          >创建新活动</Button>
        </div>
      </div>
    </div >
  )
}

export default Basic