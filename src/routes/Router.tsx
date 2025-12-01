import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
        </Routes>
    )
}

export default Router;

