import axios from 'axios';
import { AppThunk, noodleSlice } from './store';

export const fetchBrands = (): AppThunk => async (dispatch) => {
  try {
    const { data: brandData } = await axios.get(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`
    );

    const { data: imageData } = await axios.get(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json'
    );

    dispatch(
      noodleSlice.actions.setList({
        list: brandData.splice(0, 10),
        images: imageData,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
