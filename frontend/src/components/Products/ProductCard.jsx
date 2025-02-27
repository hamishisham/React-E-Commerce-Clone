import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import img from "../../assets/image.png";
import ReactStars from "react-rating-stars-component";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  updateProductRating,
} from "../../redux/slices/productSlice";
import {addToCart} from '../../redux/slices/cartSlice'
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const smallScreen = useMediaQuery("(max-width:600px)");
  const mediumScreen = useMediaQuery("(min-width:601px) and (max-width:960px)");

  const size = smallScreen ? 10 : mediumScreen ? 15 : 20;

  // Use product rating or default to 0
  const rating = product?.rating?.rate || 0;
  const reviewCount = product?.rating?.count || 0;

  const setting = {
    size: size,
    count: 5,
    color: "#FFCC00",
    activeColor: "#FF9900",
    value: rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      dispatch(
        updateProductRating({ productId: product.id, rating: newValue })
      );
    },
  };

  const handleAddToCart = () => {
    if (!product) {
      console.error("Product data is missing.");
      return;
    }
  
    console.log("Adding to cart:", product);
  
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        quantity: 1, // Ensure default quantity is always 1
      })
    );
  };
  

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", lg: "265px" },
        height: { xs: "100%", md: "566px" },
        border: "1.08px solid #D9D9D9",
      }}
    >
      <Box>
        <CardActionArea onClick={handleProductClick}>
          <CardMedia
            component="img"
            image={product?.image || img}
            alt={product?.title || "product img"}
            sx={{
              width: { xs: "100%", md: "255px" },
              height: { xs: "100%", sm: "210px", md: "196px" },
              pt: { xs: "10px", md: "30px" },
              cursor: "pointer",
              objectFit: "contain",
            }}
          />
        </CardActionArea>

        <CardContent
          sx={{
            padding: { xs: "10px", md: "16px" },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "12px", sm: "14px", md: "16.18px" },
              fontWeight: 500,
              lineHeight: { xs: "auto", md: "19.58px" },
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product?.title || "Product Title"}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: { xs: "12px", md: "16px" },
                width: { xs: "auto" },
              }}
            >
              <ReactStars {...setting} />
              <MdOutlineKeyboardArrowDown
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "-1px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { xs: "8px", md: "16.65px" },
                  lineHeight: { xs: "auto", md: "20.63px" },
                  color: "#1F8394",
                  ml: { xs: "0px", md: "10px" },
                }}
              >
                {reviewCount}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: { xs: "8px", md: "12.94px" },
                lineHeight: { xs: "auto", md: "16.03px" },
                color: "#717171",
                mt: "7.5px",
              }}
            >
              {product?.category || "300+ bought in past month"}
            </Typography>

            <Box
              sx={{
                display: "flex",
                mt: { xs: "12px", md: "16px" },
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { xs: "18px", md: "21.57px" },
                  lineHeight: { xs: "auto", md: "26.1px" },
                  color: "#000",
                }}
              >
                ₹{product?.price * 80 || "12,990"} {""}
                <span className="font-main font-normal text-[13.42px] leading-4 text-[#717171] xs:text-[10px]">
                  (46% off)
                </span>
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 300,
                  fontSize: { xs: "10px", md: "12.94pxpx" },
                  lineHeight: { xs: "auto", md: "15.66px" },
                  color: "#7F7F7F",
                }}
              >
                Save extra with No Cost EMI
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mt: "16px", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 300,
                  fontSize: { xs: "10px", md: "12.94px" },
                  lineHeight: { xs: "auto", md: "15.66px" },
                  color: "#000",
                }}
              >
                FREE delivery by{" "}
                <span className="font-main font-bold text-[12.94px] leading-4 text-black xs:text-[10px]">
                  Sat, 14 Sept, 7:00 am - 9:00 pm{" "}
                </span>
              </Typography>
            </Box>
          </Typography>
        </CardContent>
      </Box>

      <CardActions>
        <Button
          sx={{
            fontSize: { xs: "10px", md: "12px" },
            lineHeight: { xs: "auto", md: "12px" },
            fontFamily: "Inter",
            fontWeight: 300,
            color: "black",
            background: "#FFCC00",
            width: { xs: "100px", md: "150px" },
            height: "28px",
            borderRadius: "20px",
            py: "10px",
            px: { xs: "10px", md: "15px" },
            mt: { xs: "-12px" },
          }}
          onClick={()=> handleAddToCart()}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
