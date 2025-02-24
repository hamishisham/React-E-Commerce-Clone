import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const SideFilter = () => {
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const setting = {
    size: { xs: 5, sm: 15, md: 20 },
    count: 5,
    color: "#FFCC00",
    activeColor: "#FF9900",
    value: 7.5,
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
      {/* Delivery Day */}
      <div className="flex flex-col gap-3 font-main radio-group">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "12px", md: "14.23px" },
            lineHeight: " 17.22px",
          }}
        >
          Delivery Day
        </Typography>

        <label className="radio-container">
          <input
            type="radio"
            name="price"
            value="Get It in 2 Days"
            checked={selectedPrice === "Get It in 2 Days"}
            onChange={handleChange}
          />
          <span className="checkmark"></span> Get It in 2 Days
        </label>
      </div>

      {/* Customer Reviews */}
      <div className="mt-7 font-main radio-group ">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "10px", md: "14.23px" },
            lineHeight: "17.22px",
          }}
        >
          Customer Reviews
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "2px", md: "4.5px" },
            alignItems: { xs: "center" },
            flexDirection: { xs: "row" },
            fontSize: { xs: "9px", md: "12.45px" },
            fontFamily: "Inter",
            fontWeight: 400,
            lineHeight: "15.06px",
          }}
        >
          <ReactStars {...setting} />& up
        </Box>
      </div>

      {/* Brands */}
      <div className="mt-7 font-main radio-group">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "12px", md: "14.23px" },
            lineHeight: "17.22px",
          }}
        >
          Brands
        </Typography>

        <label className="radio-container">
          <input
            type="radio"
            name="Brands"
            value="Samsung"
            checked={selectedPrice === "Samsung"}
            onChange={handleChange}
          />
          <span className="checkmark"></span> Samsung
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="Brands"
            value="LG"
            checked={selectedPrice === "LG"}
            onChange={handleChange}
          />
          <span className="checkmark"></span> LG
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="Brands"
            value="Haier"
            checked={selectedPrice === "Haier"}
            onChange={handleChange}
          />
          <span className="checkmark"></span> Haier
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="Brands"
            value="Daikin"
            checked={selectedPrice === "Daikin"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>Daikin
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="Brands"
            value="Godrej"
            checked={selectedPrice === "Godrej"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>Godrej
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="Brands"
            value="IFB"
            checked={selectedPrice === "IFB"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>IFB
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="Brands"
            value="Panasonic"
            checked={selectedPrice === "Panasonic"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>Panasonic
        </label>
      </div>

      {/* Price */}
      <div className="mt-7 font-main radio-group">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "12px", md: "14.23px" },
            lineHeight: "17.22px",
          }}
        >
          Price
        </Typography>

        <label className="radio-container">
          <input
            type="radio"
            name="price"
            value="all"
            checked={selectedPrice === "all"}
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="price"
            value="₹5900 to ₹10,000"
            checked={selectedPrice === "₹5900 to ₹10,000"}
            onChange={handleChange}
          />
          <span className="checkmark"></span> ₹5900 to ₹10,000
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="price"
            value="₹10,000 to ₹20,000"
            checked={selectedPrice === "₹10,000 to ₹20,000"}
            onChange={handleChange}
          />
          <span className="checkmark"></span> ₹10,000 to ₹20,000
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="price"
            value="₹20,000 to ₹30,000"
            checked={selectedPrice === "₹20,000 to ₹30,000"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>₹20,000 to ₹30,000
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="price"
            value="₹30,000 to ₹45,000"
            checked={selectedPrice === "₹30,000 to ₹45,000"}
            onChange={handleChange}
          />
          <span className="checkmark"></span>₹30,000 to ₹45,000
        </label>
      </div>
    </Box>
  );
};

export default SideFilter;
