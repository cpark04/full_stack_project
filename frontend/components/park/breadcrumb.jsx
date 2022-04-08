import React from "react";

const Breadcrumb = (props) => {
  const trailNameRender = () => {
    const { item } = props;
    if (!item.trail_name) {
      return (
        <div className='breadcrumb-container'>
          <div className='breadcrumb-country breadcrumb-link'>
            {item.country}
          </div>
          <span>&nbsp; › &nbsp;</span>
          <div className='breadcrumb-state breadcrumb-link'>{item.state}</div>
          <span>&nbsp; › &nbsp;</span>
          <div className='breadcrumb-name breadcrumb-link'>
            {item.park_name}
          </div>
        </div>
      );
    } else {
      return (
        <div className='breadcrumb-container'>
          <div className='breadcrumb-country breadcrumb-link'>
            {item.country}
          </div>
          <span>&nbsp; › &nbsp;</span>
          <div className='breadcrumb-state breadcrumb-link'>{item.state}</div>
          <span>&nbsp; › &nbsp;</span>
          <div className='breadcrumb-name breadcrumb-link'>
            {item.park_name}
          </div>
          <span>&nbsp; › &nbsp;</span>
          <div className='breadcrumb-trail-name breadcrumb-link'>
            {item.trail_name}
          </div>
        </div>
      );
    }
  };

  return trailNameRender();
};

export default Breadcrumb;
