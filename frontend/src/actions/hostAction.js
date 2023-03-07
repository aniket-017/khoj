import axios from "axios";

export const CREATE_HOST_REQUEST = "CREATE_HOST_REQUEST";
export const CREATE_HOST_SUCCESS = "CREATE_HOST_SUCCESS";
export const CREATE_HOST_FAILURE = "CREATE_HOST_FAILURE";

export const createHost = (hostData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_HOST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/hosts", hostData, config);

    dispatch({
      type: CREATE_HOST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_HOST_FAILURE,
      payload: error.response && error.response.data.message,
    });
  }
};
