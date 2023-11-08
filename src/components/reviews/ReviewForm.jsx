import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, reviewText, labelText, defaultValue }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={reviewText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        />
      </Form.Group>{" "}
      <br />
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
