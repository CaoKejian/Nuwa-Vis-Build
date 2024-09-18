import React, { FC, useState } from "react"
import * as s from './index.module.less'
import { Button, Table, TableProps, TableSort } from "tdesign-react"
import Row from "../../share/Row"
import SvgIcon from "../../share/SvgIcon"

interface TableData {
  applicant: string,
  activityName: string,
  createTime: string,
}

const Basic: FC = () => {
  const columns: TableProps['columns'] = [
    {
      colKey: 'applicant',
      width: 120,
      title: () => <span style={{ display: 'flex', alignItems: 'center' }}>创建人</span>
    },
    {
      colKey: 'activityName',
      title: '子活动名称',
      width: 120,
      cell: ({ row }) => <div>{row.activityName}</div>,
    },
    { colKey: 'createTime', width: 100, sorter: true, title: '创建时间' },
    { colKey: 'action', width: 100, title: '操作',
      cell: () => <>
        <Button className={s.enter}>进入</Button>
        <Button className="t-button-delete" theme="danger">删除</Button>
      </>
    },
  ]
  const data: TableData[] = [
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
    },
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
    },
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
    },
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
    },
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
    },
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
    },
    {
      applicant: '张三',
      activityName: '子活动1',
      createTime: '2024-09-01',
    },
    {
      applicant: '李四',
      activityName: '测试活动2',
      createTime: '2024-09-02',
    }
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
        <Row label="活动名称" labelWidth="100px">加桌落地页</Row>
        <Row label="活动描述" labelWidth="100px">添加小程序到桌面，用户在桌面直接启动小程序</Row>
        <Row label="历史活动" labelWidth="100px">
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
            suffix={<SvgIcon svgName="rule" svgClass={s.createIcon} />}
          >活动设置</Button>
          <Button
            suffix={<SvgIcon svgName="create" svgClass={s.createIcon} />}
          >创建新活动</Button>
        </div>
      </div>
    </div >
  )
}

export default Basic