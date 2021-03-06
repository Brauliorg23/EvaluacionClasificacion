import React, {useState} from "react";
import {Layout, Breadcrumb} from "antd";
import MenuTop from "../components/Admin/MenuTop/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSingIn from "../pages/Admin/Signin";
import {Routes, Route, Navigate} from 'react-router-dom';
import useAuth from "../hooks/useAuth";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props){
    const {children}=props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const {Header, Content, Footer}=Layout;
    const {user, isLoading} = useAuth();
    if (!user && !isLoading) {
           return(
                        
                <Navigate to="/admin/login"/>            
           
        );
    }

    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed}/>
            <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
                <Header className="layout-admin__header"> 
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                </Header>    
                <Content className="layout-admin__content">                    
                    {children}                    
                </Content>
            </Layout> 
        </Layout>
    );
    

    
} 