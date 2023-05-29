import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate as navigate } from "react-router-dom";

//Fetch All Products Async
export const fetchAllProducts = createAsyncThunk(
  "seller/fetchAllProducts",
  async () => {
    const response = await axios.get("http://localhost:9002/seller/products");
    return response.data;
  }
);
//new product async
export const addproduct = createAsyncThunk(
  "addproduct",
  async (data, rejectWithValue) => {
    debugger;
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:9002/seller/products/addproduct",
        data
      );

      alert(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error occurred while adding the product:", error);
      return rejectWithValue("Error: Couldn't add Product!");
    }
  }
);

export const editProduct = createAsyncThunk("editProduct", async (data) => {
  console.log(data._id);
  debugger;
  try {
    // const id=data.
    const response = await axios.put(
      `http://localhost:9002/seller/products/edit/${data._id}`,
      data
    );
    const result = response.result;
    ``````;
    // dispatch();
    navigate("/home");
  } catch (err) {
    console.log(err);
  }
});
// );

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    allProducts: [],
    filteredProducts: [],
    searchQuery: "",
  },

  extraReducers: (builder) => {
    //fetch all products
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
      })
      .addCase(addproduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts.push(action.payload);
      })
      .addCase(addproduct.rejected, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      });
  },

  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    showAllProducts: (state) => {
      state.filteredProducts = state.allProducts;
      state.searchQuery = "";
    },
    filterProducts: (state, action) => {
      const searchQuery = action.payload;
      const filteredProducts = state.allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      state.filteredProducts = filteredProducts;
    },
    //Delete Single product

    removeProduct: (state, action) => {
      const productId = action.payload;
      state.allProducts = state.allProducts.filter(
        (product) => product._id !== productId
      );
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product._id !== productId
      );
      // Api call
      axios
        .delete(`http://localhost:9002/seller/products/${productId}`)
        .then((response) => {
          console.log("Product deleted successfully:", productId);
          // navigate("/home");
        })
        .catch((error) => {
          console.error("Failed to delete product:", error);
        });
    },

    // Edit product
    editproduct: (state, action) => {
      // const { id, name, description, price, quantity, image } = action.payload;
      // const ex_product = state.allProducts.find(
      //   (product) => product._id === id);
      //   if(ex_product) {
      //     ex_product.name = name;
      //     ex_product.description = description;
      //     ex_product.price = price;
      //     ex_product.quantity = quantity;
      //     ex_product.image = image;
      //   }
    },
  },
});

export const {
  setAllProducts,
  setFilteredProducts,
  setSearchQuery,
  showAllProducts,
  editproduct,
  removeProduct,
} = productSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectSearchQuery = (state) => state.products.searchQuery;

export default productSlice.reducer;
