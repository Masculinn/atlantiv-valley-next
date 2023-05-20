'use client'
import "../css/app.css"
import React, { useState, useEffect,useRef } from "react";
import { Chart } from "chart.js/auto";
import { useSpring, animated } from "react-spring";

export default function Graph(val) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(0);

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
    };
  }, []);

  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: isVisible ? 1 : 0 },
    config: { duration: 1000 },
  });
    // const data = [
    //     { 
    //         name: `${val.name1}`,
    //         value: val.val1, 
    //         worth: val.worth1,
    //         currency: val.currency
    //     },
    //     { 
    //         name: `${val.name2}`, 
    //         value: val.val2, 
    //         worth: val.worth2,
    //         currency: val.currency
    //     }
    //   ];

    //   const onPieEnter = useCallback(
    //     (_, index) => {
    //       setActiveIndex(index);
    //     },
    //     [setActiveIndex]
    //   );

    //   const renderActiveShape = (props) => {
    //     const RADIAN = Math.PI / 180;
    //     const {
    //       cx,
    //       cy,
    //       midAngle,
    //       innerRadius,
    //       outerRadius,
    //       startAngle,
    //       endAngle,
    //       fill,
    //       payload,
    //       percent,
    //       worth
    //     } = props;
    //     const sin = Math.sin(-RADIAN * midAngle);
    //     const cos = Math.cos(-RADIAN * midAngle);
    //     const sx = cx + (outerRadius + 10) * cos;
    //     const sy = cy + (outerRadius + 10) * sin;
    //     const mx = cx + (outerRadius + 30) * cos;
    //     const my = cy + (outerRadius + 30) * sin;
    //     const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    //     const ey = my;
    //     const textAnchor = cos >= 0 ? "start" : "end";
      
    //     return (
    //       <g>
    //         <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
    //           {payload.name}
    //         </text>
    //         <Sector
    //           cx={cx}
    //           cy={cy}
    //           innerRadius={innerRadius}
    //           outerRadius={outerRadius}
    //           startAngle={startAngle}
    //           endAngle={endAngle}
    //           fill={'#475569'}
    //         />
    //         <Sector
    //           cx={cx}
    //           cy={cy}
    //           startAngle={startAngle}
    //           endAngle={endAngle}
    //           innerRadius={outerRadius + 6}
    //           outerRadius={outerRadius + 10}
    //           fill={fill}
    //         />
    //         <path
    //           d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
    //           stroke={fill}
    //           fill="none"
    //         />
    //         <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
    //         <text
    //           x={ex + (cos >= 0 ? 1 : -1) * 12}
    //           y={ey}
    //           textAnchor={textAnchor}
    //           fill="#ffffff"
    //         >{`$ ${worth}${val.currency}`}</text>
    //         <text
    //           x={ex + (cos >= 0 ? 1 : -1) * 12}
    //           y={ey}
    //           dy={18}
    //           textAnchor={textAnchor}
    //           fill="#ffffff"
    //         >
    //           {`(Rate ${(percent * 100).toFixed(0)}%)`}
    //         </text>
    //       </g>
    //     );
    //   };

    const PieChart = () => {
      const chartRef = useRef(null);
      const canvasId = 'canvas';
      const canvasSize = 'medium';

      useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
    
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: [val.name1, val.name2],
            datasets: [
              {
                data: [val.worth1, val.worth2], 
                backgroundColor: ['rgba(4, 30, 57, 0.75)', ' rgba(0, 17, 174  , 0.75)'],
                hoverBackgroundColor: ['rgba(255, 255, 255, 0.75)', 'rgba(255, 255, 255, 0.75)'],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1,
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                const dataset = data.datasets[tooltipItem.datasetIndex];
                const value = dataset.data[tooltipItem.index];
                const label = data.labels[tooltipItem.index];
                return `${label}: ${value}`;
              },
            },
          },
        });
      }, []);
    
      return <canvas ref={chartRef} className="lg:scale-125 md:scale-110 sm:scale-100 scale-100"/>;
    };
      
    return (
      <animated.div className="flex flex-col lg:flex-row w-full lg:h-screen md:h-screen h-screen bg-slate-950 shadow-2xl" style={animation} ref={ref}>
      <div className="w-full lg:w-1/2 flex justify-center text-center items-center justify-items-center lg:my-0 md:my-0 sm:my-12 my-12">
            <center>
            {/* <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={80}
                fill="#FFFFFF"
                dataKey="value"
                onMouseEnter={onPieEnter}
                border="#000000"
              />
            </PieChart> */}
              <PieChart />
            </center>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:pt-2 md:pt-8 lg:my-0 md:my-0 sm:my-12 my-12">
        <div className="text-center lg:text-3xl md:text-4xl sm:text-3xl text-md text-white block tracking-tight" id="section_font">
          <a href="https://www.statista.com/" className="text-slate-600 text-sm lg:text-lg md:text-md sm:text-sm" id="section_font">-{val.link}-</a>
          <br />
          {val.header}
          <h3 className="text-center lg:text-lg md:text-lg sm:text-sm text-sm px-8 mb-8 tracking-tighter text-slate-600 font-light">
            <br />
            {val.desc}
          </h3>
        </div>
      </div>
    </animated.div>
    
    )
}