import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import s from "./App.module.css";

import Lesson_1 from "./components/Lesson_1/Lesson_1";
import Lesson_2 from "./components/Lesson_2/Lesson_2";
import Lesson_3 from "./components/Lesson_3/Lesson_3";
import Lesson_4 from "./components/Lesson_4/Lesson_4";


export default function App() {



    return (
        <Router>
            <div className={s.container}>
                <Link to="/lesson_1" className={s.link}>Lesson 1</Link>
                <Link to="/lesson_2" className={s.link}>Lesson 2</Link>
                <Link to="/lesson_3" className={s.link}>Lesson 3</Link>
                <Link to="/lesson_4" className={s.link}>Lesson 4</Link>
            </div>

            <Routes>
                <Route path="/lesson_1" element={<Lesson_1 />} />
                <Route path="/lesson_2" element={<Lesson_2 />} />
                <Route path="/lesson_3" element={<Lesson_3 />} />
                <Route path="/lesson_4" element={<Lesson_4 />} />

            </Routes>

        </Router>
    );
}


