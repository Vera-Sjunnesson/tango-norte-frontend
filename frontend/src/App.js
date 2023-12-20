import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyles } from 'components/lib/GlobalStyles'
import { Hero } from 'components/pages/hero/Hero';
import { CalendarBoard } from 'components/pages/calendar_news/CalendarBoard';
import { News } from 'components/pages/calendar_news/News';
import { About } from 'components/pages/about/About';
import { EventDetails } from 'components/pages/details/EventDetails';
import { AboutTango } from 'components/pages/aboutTango/AboutTango';
import { NewsDetails } from 'components/pages/details/NewsDetails';
import { Footer } from 'components/lib/Footer';
import { VenueDetails } from 'components/pages/details/VenueDetails';
import { Glossary } from 'components/pages/aboutTango/Glossary';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/kalendarium" element={<CalendarBoard />} />
        <Route path="/kalendarium/:id" element={<EventDetails />} />
        <Route path="/lokal/:venueid" element={<VenueDetails />} />
        <Route path="/aktuellt" element={<News />} />
        <Route path="/aktuellt/:id" element={<NewsDetails />} />
        <Route path="/om" element={<About />} />
        <Route path="/om-tango" element={<AboutTango />} />
        <Route path="/om-tango/ordlist" element={<Glossary />} />
        <Route path="/lokal/:venueid" element={<VenueDetails />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

