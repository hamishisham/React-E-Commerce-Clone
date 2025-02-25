import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const CardProductsContainer = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        paddingLeft: { xs: "30px", sm: "20px" },
        paddingRight: "12px",
        paddingTop: "10px",
      }}
    >
      <Grid item xs={6} sm={4} md={4} lg={3}>
        <ProductCard />
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={3}>
        <ProductCard />
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={3}>
        <ProductCard />
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={3}>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={3}>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={3}>
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default CardProductsContainer;
