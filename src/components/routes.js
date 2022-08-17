import Home from "../pages/Home";
import AllTasks from "../pages/tasks/AllTasks";
import MyTasks from "../pages/tasks/MyTasks";
import CreateNewTasks from "../pages/tasks/CreateNewTasks";
import PendingTasks from "../pages/tasks/PendingTasks";
import UpdateTask from "../pages/tasks/UpdateTask"; 
import TaskDetail from "../components/TaskDetail";


export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false,
    },
    {
        path: '/all-tasks',
        exact: true,
        component: AllTasks,
        auth: false,
    },
    {
        path: '/my-tasks',
        exact: true,
        component: MyTasks,
        auth: true,
    },
    {
        path: '/pending-tasks',
        exact: true,
        component: PendingTasks,
        auth: true,
    },
    {
        path: '/create-task',
        exact: true,
        component: CreateNewTasks,
        auth: false,
    },
    {
        path: '/update-tasks/:upTaskID',
        exact: true,
        component: UpdateTask,
        auth: true,
    },
    {
        path: '/detail-tasks/:taskID',
        exact: true,
        component: TaskDetail,
        auth: true,
    }

]
