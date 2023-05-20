'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useTrail, a } from '@react-spring/web'
import styles from '../css/styles.module.css'

const Trail = ({ children, onVisible}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 10, tension: 1500, friction: 200 },
      opacity: isVisible ? 1 : 0,
      x: isVisible ? 20 : 0,
      height: isVisible ? 120 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
  
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, { threshold: 0.1 });
  
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      }
    }, []);
  
    return (
      <div ref={ref}>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={{ ...style, opacity: isVisible ? style.opacity : 0 }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  }

  const TrailText = (props) => {

    return (
            <div className={styles.container}>
            <Trail >
                {props.texts.map((val, index) => {
                    return <span className='text-blue-950' key={index}>{val}</span>
                })}
            </Trail>
            </div>
    )
  }

  export default TrailText;
