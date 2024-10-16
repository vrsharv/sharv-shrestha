import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './styles.css';

const BlogSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const blogs = [
        {
            title: 'Cybersecurity Trends 2024',
            description: 'Discover the latest trends in cybersecurity...',
            link: './cybertrend.html'
        },
        {
            title: 'Proactive Threat Detection',
            description: 'Learn about proactive measures to detect threats...',
            link: './proactive.html'
        },
        {
            title: 'AI in Cyber Defense',
            description: 'Explore the role of AI in cybersecurity defense...',
            link: './AICyber.html'
        }
    ];

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const handleSwipe = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) =>
                prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
            );
        } else if (direction === 'right') {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <section className="blog-section" {...handlers}>
            <h2>Latest Blogs</h2>
            <div className="blog-cards">
                {blogs.map((blog, index) => (
                    <div
                        className={`card ${index === currentIndex ? 'active' : 'inactive'}`}
                        key={index}
                    >
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <a href={blog.link} className="read-more">Read More</a>
                    </div>
                ))}
            </div>
            <div className="navigation">
                <button onClick={() => handleSwipe('right')}>Previous</button>
                <button onClick={() => handleSwipe('left')}>Next</button>
            </div>
        </section>
    );
};

export default BlogSection;
