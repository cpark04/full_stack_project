import React from "react";
import { withRouter } from "react-router-dom";

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[photo]', this.state.photoFile )
    formData.append('photo[trail_id]', this.props.trail.id)
    formData.append('photo[user_id]', this.props.currentUser)
    $.ajax({
      url: '/api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(() => this.props.history.go(0))
  }

  // handleFileClick(e){
  //   document.getElementById('hide-file').click()
  // }

  render() {
    return <div className='review-create-container'>
      <form onSubmit={this.handleSubmit}>
        {/* <button id="file-label" className="review-create-button" onClick={this.handleFileClick}> */}
        <input type="file" onChange={this.handleFile} id="hide-file"/>
        {/* </button> */}
        <input type="submit" value="Upload Photo" className="review-create-button"/>
      </form>
    </div>
  }
}

export default withRouter(PhotoForm)