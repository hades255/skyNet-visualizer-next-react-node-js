import React, { FC, useEffect, useRef, useState } from 'react';

interface Props {
  percentage: number;
  title?: string;
}

const SkillTheme2: FC<Props> = ({ percentage, title }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [viewChecker, setViewChecker] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      console.log('entry', entry);
      setViewChecker(entry.isIntersecting);
      console.log('viewChecker', entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && viewChecker) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, viewChecker]);

  if (viewChecker) {
    setTimeout(() => {
      if (progress < percentage) {
        setProgress(progress + 1);
      }
    }, 50);
  }

  return (
    <div id="kskills" className="mt-[20px]">
      <div ref={ref}>
        <span className="text-2xl mt-4 text-center text-white mb-0 font-medium">
          {title}
        </span>
        <div className="mt-4  flex items-center  h-[15px] w-full gap-5">
          <div className="w-[90%] progress-div bg-[#1e1e1e]">
            <div
              className="progress"
              style={{
                width: `${progress}%`,
                height: '10px',
                backgroundColor: '#2C6C7B',
              }}
            ></div>
          </div>

         
          <div className="text-5xl text-[#67A7B6] text-center  w-[10%]">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTheme2;
