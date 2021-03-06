import { DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, ExportOutlined } from '@ant-design/icons';
import { notification, Button, Col, Descriptions, Divider, Dropdown, Form, Input, Menu, message, Popconfirm, Popover, Row, Select, Tag, Transfer, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import KeyOutlined from '@ant-design/icons/lib/icons/KeyOutlined';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from 'mtianyan-pro-table';
import CreateForm from './components/CreateForm';
import { addLesson, queryLesson, removeLesson, updateLesson, queryLessonVerboseName, queryLessonListDisplay, queryLessonDisplayOrder} from './service';
import UpdateForm from './components/UpdateForm';
import UploadAvatar from '@/components/UploadAvatar';
import {queryLabelType, queryLabelTypeVerboseName} from '@/pages/AutoGenPage/LabelTypeList/service';import {queryLessonType, queryLessonTypeVerboseName} from '@/pages/AutoGenPage/LessonTypeList/service';import {queryLessonHardType, queryLessonHardTypeVerboseName} from '@/pages/AutoGenPage/LessonHardTypeList/service';import {queryTeacher, queryTeacherVerboseName} from '@/pages/AutoGenPage/TeacherList/service';import {queryLessonScript, queryLessonScriptVerboseName} from '@/pages/AutoGenPage/LessonScriptList/service';import {queryLabel} from '@/pages/AutoGenPage/LabelList/service';

import moment from 'moment';
const { Option } = Select;
import { BooleanFormItem, dealManyToManyFieldTags, fileUpload, twoColumns, richForm, richCol, dealPureSelectField, orderForm, exportExcelCurrent, exportExcelAll, getUpdateColumns, dealRemoveError, dealError, BooleanDisplay, dealDateTimeDisplay, dealManyToManyField, dealTime, deepCopy, fieldErrorHandle, getTableColumns, renderManyToMany, richTrans, dealForeignKeyField, renderForeignKey, fieldsLevelErrorHandle } from '@/utils/utils';
import 'braft-editor/dist/index.css'
const FormItem = Form.Item;
const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
 
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef();
  const addFormRef = useRef();
  const updateFormRef = useRef();

  const handleAdd = async fields => {
    const hide = message.loading('????????????');

    try {
      await addLesson({ ...fields });
      hide();
      message.success('????????????');
      return true;
    } catch (error) {
      return dealError(error, addFormRef, hide, "??????");
    }
  };

  const handleUpdate = async (value, current_id) => {
    const hide = message.loading('????????????');

    try {
      await updateLesson(value, current_id);
      hide();
      message.success('????????????');
      return true;
    } catch (error) {
      return dealError(error, updateFormRef, hide, "??????");
    }
  };

  const handleRemove = async selectedRows => {
    const hide = message.loading('????????????');
    if (!selectedRows) return true;

    try {
      const ids = selectedRows.map(row => row.id).join(',');
      await removeLesson(ids);
      hide();
      message.success('????????????');
      return true;
    } catch (error) {
      hide()
      return dealRemoveError(error, "??????");
    }
  };
 
  const dateFieldList = ["time"]
  const base_columns = [{
                             title: 'id',
                             
        hideInForm: true,
        hideInSearch: true,
        
                             
                             dataIndex: 'id',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '????????????',
                             
                             
                             dataIndex: 'title',
                             
                             rules: [
                                     {
                      required: true,
                      message: '????????????????????????',
                     },
                             ],
                             
                             
                        },
                      {
                             title: '????????????',
                             
                             initialValue: "",
                             dataIndex: 'introduction',
                             
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '????????????',
                             
        hideInSearch: true,
        
                             
                             dataIndex: 'img',
                             
                             rules: [
                                     {
                      required: true,
                      message: '????????????????????????',
                     },
                             ],
                             
                                          render: (text, record) => {
                      return <img src={text} width="80px" alt=""/>
                    },
renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                              const imageUrl = form.getFieldValue('img');
                              return <UploadAvatar img={imageUrl}/>
                            },
    
                             
                        },
                      {
                             title: '??????Banner',
                             
        hideInSearch: true,
        
                             
                             dataIndex: 'banner',
                             
                             rules: [
                                     {
                      required: true,
                      message: '??????Banner????????????',
                     },
                             ],
                             
                                          render: (text, record) => {
                      return <img src={text} width="80px" alt=""/>
                    },
renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                              const imageUrl = form.getFieldValue('banner');
                              return <UploadAvatar img={imageUrl}/>
                            },
    
                             
                        },
                      {
                             title: '????????????',
                             
                             initialValue: 0,
                             dataIndex: 'price',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '????????????',
                             
                             
                             dataIndex: 'isDiscount',
                             
                             rules: [
                                     {
                      required: true,
                      message: '????????????????????????',
                     },
                             ],
                             
                                     render: (text, record) => {
                                  return BooleanDisplay(text);
                                },
                        renderFormItem: (item, {value, onChange}) => {
                          return BooleanFormItem(value, onChange);
                        },
        
                             
                        },
                      {
                             title: '???????????????',
                             
                             initialValue: 0,
                             dataIndex: 'discountPrice',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '??????????????????',
                             
            hideInForm: true,
            
                             
                             dataIndex: 'time',
                             valueType: 'dateTime',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '????????????',
                             
                             initialValue: 0,
                             dataIndex: 'persons',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '?????????',
                             
                             initialValue: 0,
                             dataIndex: 'comments',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: '????????????',
                             
                             initialValue: "",
                             dataIndex: 'category',
                             
                             rules: [
                                     
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, categoryForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, categoryVerboseNameMap);
                            },
                             
                        },
                      {
                             title: '????????????',
                             
                             initialValue: "",
                             dataIndex: 'type',
                             
                             rules: [
                                     
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, typeForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, typeVerboseNameMap);
                            },
                             
                        },
                      {
                             title: '??????????????????',
                             
                             initialValue: "",
                             dataIndex: 'hard',
                             
                             rules: [
                                     
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, hardForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, hardVerboseNameMap);
                            },
                             
                        },
                      {
                             title: '????????????',
                             
                             initialValue: "",
                             dataIndex: 'teacher',
                             
                             rules: [
                                     
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, teacherForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, teacherVerboseNameMap);
                            },
                             
                        },
                      {
                             title: '????????????',
                             
                             initialValue: "",
                             dataIndex: 'script',
                             
                             rules: [
                                     
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, scriptForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, scriptVerboseNameMap);
                            },
                             
                        },
                      {
                             title: '???????????????label',
                             
                             
                             dataIndex: 'labels',
                             
                             rules: [
                                     
                             ],
                             
                
                renderFormItem: (item, {value, onChange, type, defaultRender}) => {
                      return dealManyToManyField(item, value,onChange,type, labelsManyToManyList)
                },
               render: (text, record) => {
                    return renderManyToMany(text)
            }, 
        
                             
                        },
                          {
                              title: '??????',
                              dataIndex: 'option',
                              valueType: 'option',
                                    fixed: 'right',
          width: 100,
                              render: (text, record) => (
                                <>

                                  <EditOutlined title="??????" className="icon" onClick={async () => {
                                   record.time = record.time === null ? record.time : moment(record.time);
                                    handleUpdateModalVisible(true);
                                    setUpdateFormValues(record);
                                  }} />
                                  <Divider type="vertical" />
                                  <Popconfirm
                                    title="??????????????????????????????"
                                    placement="topRight"
                                    onConfirm={() => {
                                      handleRemove([record])
                                      actionRef.current.reloadAndRest();
                                    }}
                                    okText="??????"
                                    cancelText="??????"
                                  >
                                    <DeleteOutlined title="??????" className="icon" />
                                  </Popconfirm>
                                </>
                              ),
                            },];

  let cp = deepCopy(base_columns);

  const [formOrder, setFormOrder] = useState([]);

  useEffect(() => {
    queryLessonDisplayOrder().then(r => {
      setFormOrder(r.form_order)
    })
  }, [])
  const table_columns = getTableColumns(cp);

  let order_cp = deepCopy(base_columns);
  const form_ordered = orderForm(formOrder, order_cp);

  const create_columns = [...form_ordered];
  const update_cp = deepCopy(form_ordered)
  const update_columns = getUpdateColumns(update_cp);

  const [columnsStateMap, setColumnsStateMap] = useState({});

  const [paramState, setParamState] = useState({});

  useEffect(() => {
    queryLessonListDisplay().then(value => {
      setColumnsStateMap(value)
    })
  }, [])


   
                                const [categoryForeignKeyList, setCategoryForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryLabelType({all: 1}).then(value => {
                                     setCategoryForeignKeyList(value);
                                });
                                }, []);
                                const [categoryVerboseNameMap, setCategoryVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryLabelTypeVerboseName().then(value => {
                                    setCategoryVerboseNameMap(value);
                                });
                                }, []);
                                const [typeForeignKeyList, setTypeForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryLessonType({all: 1}).then(value => {
                                     setTypeForeignKeyList(value);
                                });
                                }, []);
                                const [typeVerboseNameMap, setTypeVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryLessonTypeVerboseName().then(value => {
                                    setTypeVerboseNameMap(value);
                                });
                                }, []);
                                const [hardForeignKeyList, setHardForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryLessonHardType({all: 1}).then(value => {
                                     setHardForeignKeyList(value);
                                });
                                }, []);
                                const [hardVerboseNameMap, setHardVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryLessonHardTypeVerboseName().then(value => {
                                    setHardVerboseNameMap(value);
                                });
                                }, []);
                                const [teacherForeignKeyList, setTeacherForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryTeacher({all: 1}).then(value => {
                                     setTeacherForeignKeyList(value);
                                });
                                }, []);
                                const [teacherVerboseNameMap, setTeacherVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryTeacherVerboseName().then(value => {
                                    setTeacherVerboseNameMap(value);
                                });
                                }, []);
                                const [scriptForeignKeyList, setScriptForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryLessonScript({all: 1}).then(value => {
                                     setScriptForeignKeyList(value);
                                });
                                }, []);
                                const [scriptVerboseNameMap, setScriptVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryLessonScriptVerboseName().then(value => {
                                    setScriptVerboseNameMap(value);
                                });
                                }, []);

   const [labelsManyToManyList, setLabelsManyToManyList] = useState([]);
                        useEffect(() => {
                          queryLabel({all:1}).then(value => {
                            setLabelsManyToManyList(value);
                          });
                        }, []);
  return (
    <PageHeaderWrapper>
      <ProTable
        beforeSearchSubmit={(params => {
          dealTime(params, dateFieldList);
          return params;
        })}
        params={paramState}
        scroll={{ x: '100%' }}
        columnsStateMap={columnsStateMap}
        onColumnsStateChange={(map) => setColumnsStateMap(map)}
        headerTitle="????????????"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> ??????
          </Button>,
          <Button type="primary" onClick={() => exportExcelAll(paramState, queryLesson, table_columns, '??????-All')}>
            <ExportOutlined /> ????????????
          </Button>,
          <Input.Search style={{ marginRight: 20 }} placeholder="????????????" onSearch={value => {
            setParamState({
              search: value,
            });
            actionRef.current.reload();
          }} />,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      actionRef.current.reloadAndRest();
                    }
                    else if (e.key === 'export_current') {
                      exportExcelCurrent(selectedRows, table_columns, '??????-select')
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">????????????</Menu.Item>
                  <Menu.Item key="export_current">????????????</Menu.Item>
                </Menu>
              }
            >
              <Button>
                ???????????? <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          selectedRowKeys.length > 0 ? <div>
            ?????????{' '}
            <a
              style={{
                fontWeight: 600,
              }}
            >
              {selectedRowKeys.length}
            </a>{' '}
            ???&nbsp;&nbsp;
          </div> : false

        )}
        request={(params, sorter, filter) => queryLesson({ ...params, sorter, filter })}
        columns={table_columns}
        rowSelection={{}}
      />
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          formRef={addFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          search={twoColumns}
          form={
            {
              labelCol: { span: 6 },
              labelAlign: 'left',
            }}
          columns={create_columns}
          rowSelection={{}}
        />
      </CreateForm>
      <UpdateForm onCancel={() => handleUpdateModalVisible(false)} modalVisible={updateModalVisible}>
        <ProTable
          formRef={updateFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleUpdate(value, updateFormValues.id);

            if (success) {
              handleUpdateModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          search={twoColumns}
          type="form"
          form={{
            initialValues: updateFormValues, labelCol: { span: 6 },
            labelAlign: 'left',
          }}
          columns={update_columns}
          rowSelection={{}}
        />
      </UpdateForm>
       
    </PageHeaderWrapper>
  );
};

export default TableList;
