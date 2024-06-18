import { EditOutlined, FileOutlined, ProfileOutlined, QuestionOutlined } from "@ant-design/icons";


export const menuItem = [
    {
        id: 1,
        title: 'Toutes les questions',
        icon: <QuestionOutlined/>,
        path: '/'
    },
    {
        id: 2,
        title: 'Mes questions',
        icon: <FileOutlined/>,
        path: '/question'
    },
    {
        id: 3,
        title: 'Mes réponses',
        icon: <EditOutlined/>,
        path: '/response'
    },
    {
        id: 4,
        title: 'Mes informations',
        icon: <ProfileOutlined/>,
        path: '/informations'
    },
]

// export const questions = [
//     {
//         id: 1,
//         title: "Question numéro 1",
//         description: "la description"
//     },
//     {
//         id: 2,
//         title: "Question numéro 2",
//         description: "la description"
//     },
//     {
//         id: 3,
//         title: "Question numéro 3",
//         description: "la description"
//     }
// ]