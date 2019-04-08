import React, {Component,Fragment} from 'react';
import {Card, Select,Input,Button,Icon ,Table} from "antd";

import MyButton from '$comp/my-button';
const Option = Select.Option;

export default class Product extends Component {
  render () {
    const dataSource = [
      {
        key: '1',
        name: '大宝',
        age: 18,
        address: '宝安区草围二巷8号708'
      }, {
        key: '2',
        name: '麻花',
        age: 19,
        address: '竖真花园xx号xx号'
      }
    ];

    const columns = [
      {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '商品描述',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '价格',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '状态',
        // dataIndex: 'address',
        key: 'address',
        render: () => {
          return <Fragment>
            <Button type="primary">下架</Button>
            &nbsp; &nbsp;在售
          </Fragment>
        }
      },
      {
        title: '操作',
        // dataIndex: 'address',
        key: 'address',
        render: () => {
          return <Fragment>
            <MyButton>详情</MyButton>
            <MyButton>修改</MyButton>
          </Fragment>
        }
      }
    ];






    return (
        <Card
          title={
            <Fragment>
              <Select value={0}>
                <Option key={0} value={0}>根据商品名称</Option>
                <Option key={1} value={1}>根据商品描述</Option>
              </Select>
              <Input placeholder="关键字" style={{width:200,margin:'0 10px'}} />
              <Button type="primary">搜索</Button>
            </Fragment>
          }
          extra={<Button type="primary"><Icon type="plus" />添加产品</Button>}
          style={{width:'100%'}}
        >
          <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={{
            showSizeChanger:true,
            pageSizeOptons:['3','6','9','12'],
            defaultPageSize:3,
            showQuickJumper:true,
          }}
          loading={false}
         />
        </Card>
    )
  }
}
