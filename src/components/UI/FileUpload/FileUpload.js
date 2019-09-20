import React, { Component } from "react";
import  "./FileUpload.scss";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
  }

  state = {
    file: undefined,
    imagePreviewUrl: undefined
  };

  showFileUpload = () => {
    if (this.fileUpload) {
      this.fileUpload.current.click();
    }
  };

  handleUploadChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
      this.props.setFieldValue(this.props.field.name, file);
    }
  };

  componentDidMount() {
  }

  render() {
    const { errorMessage } = this.props;
    const { file } = this.state;
    const { name } = this.props.field;
    return (
      <div className='file-upload-button'>
        <input
          className='hidden'
          id={name}
          name={name}
          type="file"
          onChange={this.handleUploadChange}
          ref={this.fileUpload}
        />
        <button
          type="button"
          className={`oc-button primaryBack ${file ? '--success' : ''} ${errorMessage ? '--error' : ''}`}
          onClick={this.showFileUpload}
        >
          Upload
        </button>
        {file && !errorMessage && <div className='file-name'>
          {file.name}
        </div>}
        {errorMessage && (
          <div className='input-feedback' >
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
}

export default FileUpload;
