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

const ProductCard = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");
  const mediumScreen = useMediaQuery("(min-width:601px) and (max-width:960px)");

  const size = smallScreen ? 10 : mediumScreen ? 15 : 20;

  const setting = {
    size: size,
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
    <Card
      sx={{
        width: { xs: "100%", lg: "265px" },
        height: { xs: "100%", md: "566px" },
        border: "1.08px solid #D9D9D9",
      }}
    >
      <Box>
        <CardActionArea>
          <CardMedia
            component="img"
            image={img}
            alt="product img"
            sx={{
              width: { xs: "100%", md: "255px" },
              height: { xs: "100%", sm: "210px", md: "196px" },
              pt: { xs: "10px", md: "30px" },
              cursor: "pointer",
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
              lineHeight: { xs: "auto", mg: "19.58px" },
            }}
          >
            Elica 60 cm 1200 m3/hr Filterless Autoclean Kitchen Chimney with 15
            Years Warranty (WDFL 606 HAC LT...
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
                13,204
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
              300+ bought in past month
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
                ₹12,990 {""}
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
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
