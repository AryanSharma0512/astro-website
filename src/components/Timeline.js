import React, { useEffect, useRef } from 'react';
import './../styles/SCSS/timeline.scss';

const Timeline = ({ nameList }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const callbackFunc = () => {
      const items = timelineRef.current.querySelectorAll("li");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    };

    // Call the callbackFunc initially
    callbackFunc();

    // Add event listeners for load and scroll events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <section className="timeline" ref={timelineRef}>
      <ul>
        {nameList?.map((item) => (
          <li key={item.id}>
            <div className="card w-96 glass">
              <div className="flex flex-row justify-between">
                <div className="avatar ml-8">
                  <div className="w-24 mask mask-hexagon">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
                <div className="card-body text-white">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
