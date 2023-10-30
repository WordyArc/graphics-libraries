import {FC} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./HomePage.tsx";
import Lab1 from "./lab1.tsx";
import Lab2 from "./lab2.tsx";

const Routing: FC = () => {
    const navigation = [
        {
            path: '*',
            element: <HomePage/>
        },
        {
            path: '/lab1',
            element: <Lab1/>
        },
        {
            path: '/lab2',
            element: <Lab2/>
        },

    ]

    return (
        <BrowserRouter>
            <Routes>
                {
                    navigation.map(({path, element}) =>
                        <Route key={path} path={path} element={element}/>)
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Routing