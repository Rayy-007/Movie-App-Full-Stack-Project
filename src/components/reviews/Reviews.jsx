import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

import React from "react";

const Reviews = ({ getMovieData, singleMovie, reviews, setReviews }) => {
  const reviewText = useRef();
  const params = useParams();
  const imdbId = params.imdbId;
  console.log(reviews);

  useEffect(() => {
    getMovieData(imdbId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const review = reviewText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: review.value,
        imdbId: imdbId,
      });
      const updateReviews = [...reviews, { body: review.value }];
      review.value = "";
      setReviews(updateReviews);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={singleMovie?.poster} alt="Movie Poster" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    reviewText={reviewText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((review, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col>{review.body}</Col>
                </Row>
                <Col>
                  <hr />
                </Col>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
