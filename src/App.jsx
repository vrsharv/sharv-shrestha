import React from 'react';
import Announce from './components/announcement';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogSection from './components/BlogSection';
import Foot from './components/Footer';  // Ensure this matches the filename exactly

function App() {
    return (
        <div className="App">
            
            <Header />
            <Announce />
            <Hero />
            <BlogSection />
            <Foot />
        </div>
    );
}

export default App;
