import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
// import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import BungalowIcon from '@mui/icons-material/Bungalow';
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import RouterIcon from '@mui/icons-material/Router';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';

import SideBar from "./Sidebar";
// import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import MetaData from "../../layout/MetaData";
import { NEW_PRODUCT_RESET } from "../../../constants/productConstants";
import { clearErrors, createProduct } from "../../../actions/productAction";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  
  
  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");
  const [Address, setAddress] = useState("");
  const [category, setcategory] = useState("");
  const [LightFacility, setLightFacility] = useState("");
  const [WifiFacility, setWifiFacility] = useState("");
  const [NoOfRoomsVacant, setNoOfRoomsVacant] = useState("");
  const [SolarHeater, setSolarHeater] = useState("");
  const [NoOFStudents, setNoOFStudents] = useState("");
  const [Capacitiy, setCapacitiy] = useState("");
  const [MessFacility, setMessFacility] = useState("");
  const [InOutTime, setInOutTime] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [OtherFacility, setOtherFacility] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);


  const categories = [
    "Rented Rooms",
    "Boys Hostel",
    "Girls Hostel",
    "1_BHK",
    "2_BHK",
    "3_BHK",
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    // myForm.set("description", description);
    myForm.set("Address", Address);
    myForm.set("category", category);
    myForm.set("LightFacility", LightFacility);
    myForm.set("WifiFacility", WifiFacility);
    myForm.set("NoOfRoomsVacant", NoOfRoomsVacant);
    myForm.set("SolarHeater", SolarHeater);
    myForm.set("NoOFStudents", NoOFStudents);
    myForm.set("Capacitiy", Capacitiy);
    myForm.set("MessFacility", MessFacility);
    myForm.set("InOutTime", InOutTime);
    myForm.set("ContactNo", ContactNo);
    myForm.set("OtherFacility", OtherFacility);
    myForm.set("ContactNo", ContactNo);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {

    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <BungalowIcon />
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <CurrencyRupeeIcon />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/* <div>
              <DescriptionIcon />

              <textarea
                placeholder="Description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div> */}

            <div>
              <AccountTreeIcon />
              
              <select onChange={(e) => setcategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <ReduceCapacityIcon />
              <input
                type="number"
                placeholder="No. Of Vacant Rooms"
                required
                onChange={(e) => setNoOfRoomsVacant(e.target.value)}
              />
            </div>

            <div>
              <GroupsIcon />
              <input
                type="number"
                placeholder="Total no. of students"
                required
                onChange={(e) => setNoOFStudents(e.target.value)}
              />
            </div>

            <div>
              <GroupsIcon />
              <input
                type="number"
                placeholder="Capacity of Hostel"
                required
                onChange={(e) => setCapacitiy(e.target.value)}
              />
            </div>


            <div>
              <GroupsIcon />
              <input
                type="number"
                placeholder="Capacity of Hostel"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div>
              <AccessTimeIcon />
              <input
                type="text"
                placeholder="In/Out Time"
              
                value={InOutTime}
                onChange={(e) => setInOutTime(e.target.value)}
              />
            </div>

            <div>
              <AccessTimeIcon />
              <input
                type="text"
                placeholder="In/Out Time"
              
                value={OtherFacility}
                onChange={(e) => setOtherFacility(e.target.value)}
              />
            </div>

            <div>
              <RestaurantIcon />
              <input
                type="text"
                placeholder="Mess Facility"
               
                value={MessFacility}
                onChange={(e) => setMessFacility(e.target.value)}
              />
            </div>

            <div>
              <RouterIcon />
              <input
                type="text"
                placeholder="Wifi Facility"
              
                value={WifiFacility}
                onChange={(e) => setWifiFacility(e.target.value)}
              />
            </div>

            <div>
              <SolarPowerIcon />
              <input
                type="text"
                placeholder="Solar Water Heater"
                
                value={SolarHeater}
                onChange={(e) => setSolarHeater(e.target.value)}
              />
            </div>

            <div>
              <ElectricBoltIcon />
              <input
                type="text"
                placeholder="Invertor"
                
                value={LightFacility}
                onChange={(e) => setLightFacility(e.target.value)}
              />
            </div>

            {/* <div>
              <VideocamIcon />
              <input
                type="text"
                placeholder="CCTV"
                required
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div> */}

            {/* <div>
              <WhatsAppIcon/>
              <input
                type="number"
                placeholder="WhatsApp No."
                required
                // onChange={(e) => setPrice(e.target.value)}
              />
            </div> */}

            <div>
              <CallIcon/>
              <input
                type="text"
                placeholder="Phone No."
                required
                value={ContactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>

            <div>
              <LocationOnIcon />
              <input
                type="text"
                placeholder="Address"
                required
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
      
              <input
                type="file"
                name="avatar"
                
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
             disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;