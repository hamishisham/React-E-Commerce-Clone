import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import ProductCard from "./ProductCard";
import { CircularProgress, Box, Typography } from "@mui/material";

const CardProductsContainer = () => {
  const dispatch = useDispatch();
  const { filteredItems, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <Typography color="error">Error loading products: {error}</Typography>
      </Box>
    );
  }

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
      {filteredItems.length > 0 ? (
        filteredItems.map((product) => (
          <Grid item xs={6} sm={4} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography align="center" sx={{ p: 2 }}>
            No products match your filter criteria. Try adjusting your filters.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CardProductsContainer;
