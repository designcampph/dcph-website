import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import StreamPage from "./pages/StreamPage"
import Courses from './pages/Courses'
import Webinars from './pages/Webinars'
import WebinarOne from './WebinarPages/WebinarOne'
import WebinarTwo from './WebinarPages/WebinarTwo'
import WebinarThree from './WebinarPages/WebinarThree'
import CourseGDB from './CoursePages/CourseGDB'
import CourseCFN from './CoursePages/CourseCFN'
import CertificatePage from "./pages/CertificatePage"
import QuizPage from "./pages/QuizPage"
import ExpertClassPage from "./pages/ExpertClassPage"
import ExpertGDC from './CoursePages/ExpertGDC'
import ExpertMDC from './CoursePages/ExpertMDC'
import ExpertUIUXDC from './CoursePages/ExpertMDC'
import ExpertDDC from './CoursePages/ExpertMDC'
import AboutPage from "./pages/AboutPage"
import CorpoPage from "./pages/CorpoPage"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/streampage" element={<StreamPage />} />
          <Route path="/cert" element={<CertificatePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/corpotrainings" element={<CorpoPage/>} />
          <Route path="/expert" element={<ExpertClassPage />} />
          <Route path="/wb1" element={<WebinarOne />} />
          <Route path="/wb2" element={<WebinarTwo />} />
          <Route path="/wb3" element={<WebinarThree />} />
          <Route path="/crs1" element={<CourseGDB />} />
          <Route path="/crs2" element={<CourseCFN />} />

        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
