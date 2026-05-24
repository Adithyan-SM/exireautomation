import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from "@vercel/analytics/react"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Process from "./pages/Process"
import ScrollToTop from "./components/ScrollToTop"
import CaseStudies from "./pages/CaseStudies"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>

    <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/process"
          element={<Process />}
        />

        <Route
          path="/case-studies"
          element={<CaseStudies />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route 
          path="/privacy" 
          element={<Privacy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

      </Routes>

      <SpeedInsights />
      <Analytics />

    </BrowserRouter>
  )
}