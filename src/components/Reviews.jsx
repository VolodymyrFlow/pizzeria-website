const reviews = [
  {
    id: 1,
    author: "John D.",
    text: "Amazing pizza and great atmosphere. The best Italian restaurant in Prague.",
  },
  {
    id: 2,
    author: "Maria K.",
    text: "Fresh ingredients, friendly staff and authentic taste.",
  },
  {
    id: 3,
    author: "Alex P.",
    text: "I come here every week. Diavola is my favorite pizza.",
  },
];

function Reviews() {
  return (
    <section className="reviews">
      <p className="small-title">Reviews</p>
      <h2>What our customers say</h2>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <p>{review.text}</p>
            <h4>⭐ ⭐ ⭐ ⭐ ⭐</h4>
            <span>{review.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
