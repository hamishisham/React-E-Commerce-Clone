import PropTypes from "prop-types";
import avatar from "../../assets/avatar.png";

const CustomerReviews = ({ reviews }) => {
  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

  const ratingDistribution = [0, 0, 0, 0, 0];
  reviews.forEach((review) => ratingDistribution[5 - review.rating]++);

  return (
    <div className="flex flex-col md:flex-row mt-6">
      {/* Left Side - Ratings Overview */}
      <div className="md:w-1/3 p-4 border-r">
        <h3 className="text-lg font-bold mb-2">Customer Reviews</h3>
        <div className="flex items-center text-yellow-500 text-lg font-semibold">
          {"★".repeat(Math.round(averageRating))}
          {"☆".repeat(5 - Math.round(averageRating))}
          <span className="ml-2 text-gray-700 text-lg">
            {averageRating.toFixed(1)} out of 5
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{totalReviews} global rating</p>

       {/* Rating Bars */}
{ratingDistribution.map((count, index) => (
  <div key={5 - index} className="flex items-center mt-1 text-sm">
    <span className="w-22 text-gray-700">{5 - index} star</span>
    <div className="w-3/4 max-w-40 bg-gray-200 h-3 rounded-lg mx-2 relative">
      <div
        className="bg-orange-500 h-3 rounded-lg"
        style={{ width: `${(count / totalReviews) * 100}%` }}
      />
    </div>
    <span className="w-8 text-gray-700">
      {Math.round((count / totalReviews) * 100)}%
    </span>
  </div>
))}

      </div>

      {/* Right Side - Individual Reviews */}
      <div className="md:w-2/3 p-4 space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm bg-white flex flex-col gap-2"
          >
            <div className="flex items-center space-x-3">
              <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">{review.user}</p>
                <p className="text-yellow-500 text-sm">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-sm">Reviewed on {review.date}</p>
            <p className="font-bold text-lg mt-1 text-gray-900">{review.title}</p>
            <p className="text-orange-500 font-semibold text-sm">Verified Purchase</p>
            <p className="text-gray-700 text-sm">{review.comment}</p>

            <button className="text-blue-500 text-sm mt-2">Report</button>
          </div>
        ))}
      </div>
    </div>
  );
};

CustomerReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomerReviews;
