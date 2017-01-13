import React from 'react';
import { Table } from 'antd';

class myTableForPages extends React.Component {
    render() {
    	const columns = [			//定义第一行	
    	{
			  title: 'Name',
			  dataIndex: 'name',
			  render(data) {
			    return <a href="javascript:;">{data}</a>;
			  },
			}, {
			  title: 'Age',
			  dataIndex: 'age',
			}, {
			  title: 'Address',
			  dataIndex: 'address',
			}];

			const data = [{key: '1',name: 'data实例',age: 32,address: 'New York No. 1 Lake Park',}];
			for (let i = 2; i < 30; i++) {
			  data.push({
			    key: i,
			    name: `姓名 ${i}`,
			    age: `${i}`,
			    address: `重庆, 中国. ${i}`,
			  });
			};

			const rowSelection = {
			  onChange(selectedRowKeys, selectedRows) {
			  },
			  onSelect(record, selected, selectedRows) {
			    console.log(record);
			  },
			  onSelectAll(selected, selectedRows, changeRows) {
			    console.log(selected, selectedRows, changeRows);
			  },
			};

			const pagination = {
			  total: data.length,
			  showSizeChanger: true,
			  onShowSizeChange(current, pageSize) {
			    console.log('Current: ', current, '; PageSize: ', pageSize);
			  },
			  onChange(current) {
			    console.log('Current: ', current);
			  },
			};

        return (
            <Table columns={columns} dataSource={data} pagination={pagination}  rowSelection={rowSelection}/>
        )
    }

}

export default myTableForPages;