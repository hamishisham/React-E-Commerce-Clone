import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CardProductsContainer from "../components/Products/CardProductsContainer";
import SideFilter from "../components/SideFilter";

const CategoryProducts = () => {
  const { category } = useParams(); // Get category from URL

  return (
    <Box>
      <Header />
      <Grid container spacing={4}>
        {/* SideFilter */}
        <Grid item xs={2} sm={2}>
          <SideFilter />
        </Grid>

        {/* CardProductsContainer - Pass category to fetch filtered products */}
        <Grid item xs={10} sm={10}>
          <CardProductsContainer category={category} />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default CategoryProducts;
