import React, { FC, useEffect, useRef, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
  percentage: number;
  title?: string;
}

const Skill: FC<Props> = ({ percentage, title }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const customStyles = {
    root: { width: '300px', height: '150px' },
    path: {
      stroke: '#ffdd9a',
      transition: 'stroke-dashoffset 2s ease-in-out',
      strokeWidth: '8px',
      transformOrigin: 'center center',
    },
    trail: { stroke: 'black' },
    text: { fill: '#fccb7c', fontSize: '16px' },
  };

  const customStyles2 = {
    root: { width: '300px', height: '100px' },
    path: {
      stroke: '#ffdd9a',
      transition: 'stroke-dashoffset 2s ease-in-out',
      strokeWidth: '8px',
      transformOrigin: 'center center',
    },
    trail: { stroke: '#FFDD9A' },
    text: { fill: '#fccb7c', fontSize: '16px' },
  };

  useEffect(() => {
    const progressBar = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setOffset((prevOffset) => prevOffset + percentage);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (progressBar) {
      observer.observe(progressBar);
    }

    return () => {
      if (progressBar) {
        observer.unobserve(progressBar);
      }
    };
  }, [percentage]);

  return (
    <div className="single-chart my-8  flex flex-col items-center" id="kskills">
      <div ref={ref}>
        <div className="hidden sm:block">
          <CircularProgressbar
            value={offset}
            styles={customStyles}
            text={`${percentage}%`}
          />
        </div>

        <div className="block sm:hidden">
          <CircularProgressbar
            value={offset}
            styles={customStyles2}
            text={`${percentage}%`}
          />
        </div>
      </div>
      <span className="sm:text-2xl mt-4 text-center text-skillColor font-semibold">
        {title}
      </span>
    </div>
  );
};

export default Skill;
