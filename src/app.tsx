import Footer from "./components/footer";
import Header from "./components/header";
import Router from './routes/Router'

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Router/>
            </main>
            <Footer/>
        </>
    )
}

export default App;