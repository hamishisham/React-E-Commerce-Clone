import { Box, Rating, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProducts } from "../../redux/slices/productSlice";

const SideFilter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const filteredProducts = useSelector((state) => state.products.filteredItems);
  const brands = useSelector((state) => state.products.brands);
  const prices = useSelector((state) => state.products.prices);

  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (products.length > 0) {
      dispatch(
        filterProducts({ selectedPrice, selectedBrand, selectedRating })
      );
    }
  }, [selectedPrice, selectedBrand, selectedRating, dispatch, products.length]);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
  };

  const handleClearFilters = () => {
    setSelectedPrice("all");
    setSelectedBrand("");
    setSelectedRating(0);
  };

  const smallScreen = useMediaQuery("(max-width:600px)");
  const mediumScreen = useMediaQuery("(min-width:601px) and (max-width:960px)");

  const size = smallScreen ? 10 : mediumScreen ? 15 : 20;

  const setting = {
    size: size,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "auto" },
        minWidth: { xs: "150px", sm: "200px" },
        padding: { xs: "6px", md: "20px" },
      }}
    >
      {/* Filter title with count */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "14px", md: "16px" },
            mr: { xs: "5px", md: "10px" },
          }}
        >
          Filters
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "8px", md: "12px" },
            color: "#1F8394",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={handleClearFilters}
        >
          Clear All
        </Typography>
      </Box>

      {/* Results count */}
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: { xs: "10px", md: "12px" },
          mb: 2,
          color: "#717171",
        }}
      >
        {filteredProducts.length} results
      </Typography>

      {/* Delivery Day */}
      <div className="flex flex-col gap-3 font-main radio-group">
        <Typography
          sx={{ fontWeight: 600, fontSize: { xs: "12px", md: "14px" } }}
        >
          Delivery Day
        </Typography>
        <label className="radio-container">
          <input type="radio" name="delivery" value="2 Days" />
          <span className="checkmark"></span> Get It in 2 Days
        </label>
      </div>

      {/* Customer Reviews */}
      <div className="mt-7 font-main radio-group">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "9px", md: "14px" },
          }}
        >
          Customer Reviews
        </Typography>
        <Rating
          name="half-rating"
          precision={0.5}
          onChange={(event, newValue) => {
            handleRatingChange(newValue);
          }}
          defaultValue={selectedRating}
        />
      </div>

      {/* Brands */}
      <div className="mt-7 font-main radio-group">
        <Typography
          sx={{ fontWeight: 600, fontSize: { xs: "12px", md: "14px" } }}
        >
          Brands
        </Typography>
        {brands && brands.length > 0 ? (
          <>
            <label className="radio-container">
              <input
                type="radio"
                name="brand"
                value=""
                checked={selectedBrand === ""}
                onChange={handleBrandChange}
              />
              <span className="checkmark"></span> All Brands
            </label>
            {brands.map((brand) => (
              <label key={brand} className="radio-container">
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={selectedBrand === brand}
                  onChange={handleBrandChange}
                />
                <span className="checkmark"></span> {brand}
              </label>
            ))}
          </>
        ) : (
          <div>No brands available</div>
        )}
      </div>

      {/* Price */}
      <div className="mt-7 font-main radio-group">
        <Typography
          sx={{ fontWeight: 600, fontSize: { xs: "12px", md: "14px" } }}
        >
          Price
        </Typography>
        {prices && prices.length > 0 ? (
          prices.map((price) => (
            <label key={price} className="radio-container">
              <input
                type="radio"
                name="price"
                value={price}
                checked={selectedPrice === price}
                onChange={handlePriceChange}
              />
              <span className="checkmark"></span> {price}
            </label>
          ))
        ) : (
          <div>Loading price ranges...</div>
        )}
      </div>
    </Box>
  );
};

export default SideFilter;