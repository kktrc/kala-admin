/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Modal, Button, Row, Col, Card } from 'antd';
import { getPros } from '../../axios';
import { getShops } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
const confirm = Modal.confirm;

const columns = [{
    title: '门店名称',
    dataIndex: 'name',
    width: 80,
    render: (text, record) => <a href={record.url} target="_blank">{text}</a>
}, {
    title: '电话',
    dataIndex: 'mobile',
    width: 80
}, {
    title: '地址',
    dataIndex: 'address',
    width: 80
}, {
    title: '经纬度',
    dataIndex: 'position',
    width: 200
}, {
    title: '操作',
    dataIndex: '',
    key: 'operation',
    width: 200,
    render(text, record) {
        return (
          <span>
            <a href="#" >编辑</a>
            <span className="ant-divider"></span>
            <a href="#">删除</a>
            <span className="ant-divider"></span>
          </span>
        );
      }
}];

function getColumns() {
    return [
        {
            title: '门店名称',
            dataIndex: 'name',
            width: 80,
            render: (text, record) => <a href={record.url} target="_blank">{text}</a>
        }, {
            title: '电话',
            dataIndex: 'mobile',
            width: 80
        }, {
            title: '地址',
            dataIndex: 'address',
            width: 80
        }, {
            title: '经纬度',
            dataIndex: 'position',
            width: 200
        }, {
            title: '操作',
            dataIndex: '',
            key: 'operation',
            width: 200,
            render: (text, record) => {
                return (
                  <span>
                    <a href="javascript:;" onClick={() => this.handleClick(record)}>编辑</a>
                    <span className="ant-divider"></span>
                    <a href="javascript:;" onClick={() => this.delteShop(record)}>删除</a>
                    <span className="ant-divider"></span>
                  </span>
                );
              }
        }
    ];
  }

  function showConfirm() {
    confirm({
      title: '您是否确认要删除这项内容',
      content: '点确认 1 秒后关闭',
      onOk() {
        return new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      },
      onCancel() {}
    });
  }
class AsynchronousTable extends React.Component {

    constructor( props ){
        super( props ) ;
        this.columns = getColumns.call( this ) ;
    }


    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
        data: []
    };

    handleClick(record) {
        console.log(record);

        showConfirm();
    }

    delteShop(record) {
        
        showConfirm();
    }
    componentDidMount() {
        // this.start();
        this.getShops();
    }
    start = () => {
        this.setState({ loading: true });
        getPros().then(res => {
            this.setState({
                data: [...res.data.map(val => {
                    val.key = val.id;
                    return val;
                })],
                loading: false
            });
        });
    };

    getShops = () => {

        this.setState({ loading: true });
        getShops().then(res => {
            this.setState({
                data: [...res.map(val => {
                    val.key = val.id;
                    return val;
                })],
                loading: false
            });
        });
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="商家" second="门店管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="门店管理" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Button type="primary" onClick={this.getShops}
                                            disabled={loading} loading={loading}
                                    >Reload</Button>
                                    <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
                                </div>
                                
                                <Table columns={ this.columns } dataSource={this.state.data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AsynchronousTable;