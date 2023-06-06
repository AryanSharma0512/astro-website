import React, { useEffect } from 'react';
import './../styles/SCSS/timeline.scss';

const Timeline = ({nameList}) => {

  useEffect(() => {
    callbackFunc(); 
  }, [])
   

  var items = document.querySelectorAll("li");
  console.log(items);
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() { 
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if(!items[i].classList.contains("in-view")){
          items[i].classList.add("in-view");
        }
      } else if(items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
      }
    }
  }
  console.log(typeof(nameList));
  window.addEventListener("load", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  return (
    <section class="timeline">
    <ul>
      {nameList?.map((item) => {
        return(
        <li>
          <div className="card w-96 glass">
            <div className="flex flex-row justify-between">
              <div className="avatar ml-8"> 
                <div className="w-24 mask mask-hexagon">
                  <img src={item.image} />
                </div>
              </div>
              <div className="card-body text-white">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        </li>
      )})}
    </ul>
  </section>
  )
}

export default Timeline;
