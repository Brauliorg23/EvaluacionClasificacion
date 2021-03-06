import React, { useState, useEffect } from "react";
import { Form, Input,  Button, Row, Col, notification}from "antd";
import { updateContainerApi } from "../../../../api/containers";
import {getAccessTokenApi} from "../../../../api/auth";

import "./EditContainerForm.scss";

export default function EditContainerFrom(props) {
    const {container, setIsVisibleModal, setReloadContainers} = props;
    const [containerData, setContainerData] = useState({});

    useEffect(() => {
      setContainerData({
        title: container.title,
        description: container.description,
      });
    }, [container]);

    const updateContainer = e => {
      e.preventDefault();
      const token = getAccessTokenApi();
      let containerUpdate = containerData;
  
      if (!containerUpdate.title || !containerUpdate.description ) {
        notification["error"]({
          message: "El nombre, apellidos y email son obligatorios."
        });
        return;
      }
  
      
      updateContainerApi(token, containerUpdate, container._id).then(result => {
        notification["success"]({
          message: result.message
        });
        setIsVisibleModal(false);
        setReloadContainers(true);
      });
      
    };


    return (
        <div className="edit-container-form">        
        <EditForm  containerData={containerData} setContainerData={setContainerData} updateContainer={updateContainer}/>
        </div>
    );
}

function EditForm(props) {
    const {  containerData, setContainerData, updateContainer } = props;    

    return (
      <Form className="form-edit" onSubmitCapture={updateContainer}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input               
                placeholder="Title"
                value={containerData.title}
                onChange={e => setContainerData({ ...containerData, title: e.target.value })}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input                
                placeholder="Description"
                value={containerData.description}
                onChange={e =>
                  setContainerData({ ...containerData, description: e.target.value })
                }
              />
            </Form.Item>
          </Col>
        </Row>
    
        <Form.Item>
          <Button type="primary" htmlType="submit" className="buttonModal">
            Actualizar Usuario
          </Button>
        </Form.Item>
      </Form>
    );
  }