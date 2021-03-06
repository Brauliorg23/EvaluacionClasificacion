//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";


//Admin pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/Signin";
import AdminUsers from "../pages/Admin/Users";
import AreaMenu from "../pages/Admin/areas";
import Signin from "../pages/Admin/Signin";
import RegisterForm from "../components/Admin/RegisterForm/RegisterForm";
import Ubications from "../pages/Admin/Ubications/Ubications";
import Containers from "../pages/Admin/Containers/Containers";
import Modules from "../pages/Admin/Modules/Modules";
import Reports from "../pages/Admin/Reports/Reports";


//Client pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";


//other
import Error404 from "../pages/Error404";


const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome        
    },
    {
        path: "/admin/login",
        layout: Signin,
        component: AdminSingIn
    },
    {
        path: "/admin/users",
        layout: LayoutAdmin,
        component: AdminUsers,
        exact: true
    },
    {
        path: "/admin/register",
        layout: LayoutAdmin,
        component: RegisterForm,
        exact: true
    },
    {
        path: "/admin/ubications",
        layout: LayoutAdmin,
        component: Ubications,
        exact: true
    },
    {
        path: "/admin/areas",
        layout: LayoutAdmin,
        component: AreaMenu,
        exact: true
    },
    {
        path: "/admin/containers",
        layout: LayoutAdmin,
        component: Containers,
        exact: true
    },
    {
        path: "/admin/modules",
        layout: LayoutAdmin,
        component: Modules,
        exact: true
    },
    {
        path: "/admin/reports",
        layout: LayoutAdmin,
        component: Reports,
        exact: true
    },
    {
        path: "/admin/*",
        layout: LayoutAdmin,
        component: Error404
    }
];
const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact,
    },
    {
        path: "/*",
        layout: LayoutBasic,
        component: Error404
    }
];

const routes =[...routesAdmin, ...routesClient];
    

export default routes;