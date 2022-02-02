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

  render() {
    console.log(this.state.photoFile)
    return <form className='review-create-container' onSubmit={this.handleSubmit}>
      <input type="file" onChange={this.handleFile}/>
      <input type="submit" value="Upload Photo" />
    </form>
  }
}

export default withRouter(PhotoForm)