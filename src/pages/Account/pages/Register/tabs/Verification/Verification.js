import React, { Component } from "react";
import "./Verification.scss";
import { Button } from "../../../../../../components/UI";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import FileUpload from "../../../../../../components/UI/FileUpload/FileUpload";

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [];

const uploadScheme = Yup.object().shape({
  documentType: Yup.string().required("Please select document type"),
  file: Yup
    .mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FILE_SIZE
    ),
    // .test(
    //   "fileFormat",
    //   "Unsupported Format",
    //   value => value && SUPPORTED_FORMATS.includes(value.type)
    // ),
  documentType2: Yup.string().required("Please select document type"),
  file2: Yup
    .mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FILE_SIZE
    ),

});

class Verification extends Component {
  render() {
    return (
      <div className='verification'>
        <div className="col-md-6 mx-auto content">
          <p className='description'>Please upload the following supporting documentation in PDF format, including company letterhead and/or
            watermark wherever possible:</p>
          <div className="file-upload-form">
            <Formik
              initialValues={{
                file: undefined,
                file2: undefined,
                documentType: '',
                documentType2: '',
              }}
              validationSchema={uploadScheme}
              onSubmit={(values) => {
                //TODO: handle upload when backend logic is ready
                this.props.goNext();
              }}
            >
              {({ errors, touched, values, setFieldValue, handleChange, handleBlur,
                }) => (
                  <Form>
                    <div className='document-select'>
                      <div className='document-select-label'>
                        PROOF OF OWNERSHIP OF ACCOUNT
                      </div>
                      <div className='document-select-actions'>
                        <div className="document-select-doc">
                          <select
                            name="documentType"
                            value={values.documentType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ display: 'block' }}
                          >
                            <option value="" label="Select Document" />
                            <option value="Certificate of Formation" label="Certificate of Formation" />
                            <option value="Articles of Incorporation" label="Articles of Incorporation" />
                          </select>
                          {errors.documentType &&
                          touched.documentType &&
                          <div className="input-feedback">
                            {errors.documentType}
                          </div>}
                        </div>
                        <Field
                          name="file"
                          component={FileUpload}
                          errorMessage={errors["file"] ? errors["file"] : undefined}
                          touched={touched["file"]}
                          setFieldValue={setFieldValue}
                          style={{ display: "flex" }}
                        />
                      </div>
                    </div>
                    <div className='document-select'>
                      <div className='document-select-label'>
                        PROOF OF OWNERSHIP OF ACCOUNT
                      </div>
                      <div className='document-select-actions'>
                        <div className="document-select-doc">
                          <select
                            name="documentType2"
                            value={values.documentType2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ display: 'block' }}
                          >
                            <option value="" label="Select Document" />
                            <option value="Certificate of Formation" label="Certificate of Formation" />
                            <option value="Articles of Incorporation" label="Articles of Incorporation" />
                          </select>
                          {errors.documentType2 &&
                          touched.documentType2 &&
                          <div className="input-feedback">
                            {errors.documentType2}
                          </div>}
                        </div>
                        <Field
                          name="file2"
                          component={FileUpload}
                          errorMessage={errors["file2"] ? errors["file2"] : undefined}
                          touched={touched["file2"]}
                          setFieldValue={setFieldValue}
                          style={{ display: "flex" }}
                        />
                      </div>
                    </div>
                    <div className="auth-button">
                      <Button
                        variant="primary"
                        style={{ marginTop: 17 }}
                        disabled={
                          (errors.file && touched.file) ||
                          (errors.file2 && touched.file2) ||
                          (errors.documentType && touched.documentType) ||
                          (errors.documentType2 && touched.documentType2)
                        }
                      >
                        Continue
                      </Button>
                    </div>
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default Verification;
