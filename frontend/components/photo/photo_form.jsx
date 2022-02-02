import React from "react";

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
    // const formData = new FormData();
    // formData.append('post[photo]', this.state.photoFile)
    let file = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')
    // this.props.trail.photo.attach(io: file, filename: 'person_placeholder.png')
    console.log(file)
  }

  render() {
    console.log(this.state.photoFile)
    return <form className='review-create-container' onSubmit={this.handleSubmit}>
      <input type="file" onChange={this.handleFile}/>
      <input type="submit" value="Upload Photo" />
    </form>
  }
}

export default PhotoForm