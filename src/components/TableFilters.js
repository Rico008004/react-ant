import React from 'react';
import { Table } from 'antd';
import { Affix, Button } from 'antd';

class TableFilters extends React.Component {
  render() {
    const columns = [{    //第一列
      title: 'Name',
      dataIndex: 'name',
      render(data) {return <a href="javascript:;">{data}</a>;},
      filters: [{
          text: '李',
          value: '李',
        },{
          text: '韩',
          value: '韩' ,
        }
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length
      },{   //第二列
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age
      },{   //第三列
        title: 'Address',
        dataIndex: 'address',
        filters: [{
          text: '洛阳',
          value: '洛阳',
        }, {
          text: '重庆',
          value: '重庆',
        }, {
          text: '省份',
          value: '省份',
          children: [{
            text: '渝中区',
            value: '渝中区',
          }, {
            text: '南岸区',
            value: '南岸区',
          }],
        }],
        filterMultiple: true,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length
      }
    ];

    const data = [
      {key: '1',name: '李 雷',age: 25,address: '渝中区重庆中国',}, 
      {key: '2',name: '李 雷',age: 26,address: '南岸区重庆中国',},
      {key: '3',name: '李 建国',age: 26,address: '南岸区重庆中国',},  
      {key: '4',name: '张 建国',age: 26,address: '南岸区重庆中国',}, 
      {key: '5',name: '韩 梅梅',age: 27,address: '南岸区重庆中国',}, 
      {key: '6',name: '韩 梅梅',age: 28,address: '涧西区洛阳中国',}
    ];

    return (
      <div>
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }
}

export default TableFilters;