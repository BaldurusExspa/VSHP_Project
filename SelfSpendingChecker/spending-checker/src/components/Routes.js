import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExspencesView, IncomeView, MainContent  } from './MainContent';

const ProjectRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<MainContent/>}/>
            <Route path='exspences/' element={ <ExspencesView/>}/>
            <Route path="income/" element={<IncomeView/>}/>
        </Routes>
    </BrowserRouter>
)


export default ProjectRoutes;