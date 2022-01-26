import React from "react";
import Breadcrumb from "./breadcrumb";
import Slider from "react-slick"

class Park extends React.Component {

  constructor(props) {
    super(props);
  }

  showMore(e) {
    e.preventDefault();
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (btnText.innerHTML === "Read more") {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  }

  simpleSlider() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    };

    return(
      <Slider {...settings}>
        <div><img src="https://bit.ly/3IAAk6T" alt="" className="slide-img"/></div>
        <div><img src="https://bit.ly/3u0XHlZ" alt="" className="slide-img"/></div>
        <div><img src="https://bit.ly/3GeLz3r" alt="" className="slide-img"/></div>
        <div><img src="https://bit.ly/3o1a8um" alt="" className="slide-img"/></div>
        <div><img src="https://bit.ly/32xtRdz" alt="" className="slide-img"/></div>
        <div><img src="https://bit.ly/3AvTQyq" alt="" className="slide-img"/></div>
      </Slider>
    )
  }
  

  componentDidMount(){
    this.props.fetchPark(this.props.match.params.parkId);
  }

  socialLinkRender() {
    // console.log(this.props.park.social_url)
    // const socialLinks = JSON.parse(this.props.park.social_url);
    // console.log(socialLinks)
    // socialLinks = {Facebook: 'www.facebook.com', Website: 'www.website.com'}
    // let render = [];
    // for (const key in socialLinks) {
    //   render.push(<a href={socialLinks[key]}>{key}</a>)
    // }
    // return render
  }

  render() {
    if (!this.props.park) return null;
    const {park} = this.props;


    return <div className="park-container">

      <div className="park-search-component">
        <Breadcrumb park={park} />

        <form className='park-search-form'>
          <input type="text" className="park-search-bar" placeholder="Enter park or trail name"/>
          <button className='park-search-button'>
          </button>
        </form>

      </div>

      <div className="park-trail-photos">
        {this.simpleSlider()}
      </div>

      <div className="park-module">
        <div className="park-title-info">
          <p className="park-title">Best Trails in {park.park_name}</p>
          <div className="park-review">
            <div className="park-stars">
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star star"></span>
            </div>
            <div className='park-review-text'>1032 Reviews</div>
          </div>
        </div>

        <div className="park-summary">
          <div className="park-intro">{park.intro}</div>
          <div id="more">
            <div className="park-text-description">Description</div>
            <div className="park-description">{park.description}</div>
          </div>
          <a href="" onClick={this.showMore} id="myBtn">Read more</a>
        </div>

        <div className="park-map-container">
          <img src={park.mapUrl} alt="" className="park-map"/>
          <div className="dir-print-share-container">
            <a href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`} className="park-dir" target="_blank">
              <div className="dir-button"></div>
              <span>Directions</span>
            </a>

            <a href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`} className="park-dir" target="_blank">
              <div className="print-button"></div>
              <span>Print map</span>
            </a>

            <a href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`} className="park-dir" target="_blank">
              <div className="share-button"></div>
              <span>Share</span>
            </a>
          </div>
        </div>

        <div className="park-information">
          <div className="park-information-title">Park information</div>
          <div className="park-information-main">
            <div className="park-information-left">
              <div className="park-acre">
                <div className="park-sub-title">Acreage:</div>
                <div>{park.acre}</div>
              </div>
              <div className="park-hours">
                <div className="park-sub-title">Park hours</div>
                <div className="hour-table">
                  <div className="table-day">
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    <div>Sunday</div>
                  </div>
                  <div className="table-hours">
                    {JSON.parse(park.hours).map((hour, idx) => {
                      return <div key={idx}>{hour}</div>
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="park-information-right">
              <div className="park-contact">
                <div className="park-sub-title">Contact</div>
                <div>{park.contact}</div>
              </div>
              <div className="park-links">
                <div className="park-sub-title">Helpful links</div>
                <div className="park-link">
                  {JSON.parse(park.social_url).map((url, idx) => {
                    return <a className="park-link-individual" key={'social'+`${idx}`} href={url[1]}>{url[0]}</a>
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="park-trail-index"></div>
      </div>
    </div>
  }
}

export default Park;