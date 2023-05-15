import React from "react";
import { Modal, Button, Form, Col, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import { loginSchema, loginInitialValues } from "../../utils";

export const ModelLogin = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={(info) => console.log(info)}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Type credentials</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group as={Col} controlId="validationFormikUsername">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormikPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
