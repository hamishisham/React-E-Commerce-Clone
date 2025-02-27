import { Box, Grid } from "@mui/material";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CardProductsContainer from "../components/Products/CardProductsContainer";
import SideFilter from "../components/Layout/SideFilter";

const Products = () => {
  return (
    <Box>
      <Header />
      <Grid container spacing={4}>
        {/* SideFilter */}
        <Grid item xs={2} sm={2}>
          <SideFilter />
        </Grid>

        {/* CardProductsContainer */}
        <Grid item xs={10} sm={10}>
          <CardProductsContainer />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Products;
