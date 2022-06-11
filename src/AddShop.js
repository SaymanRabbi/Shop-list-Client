import React, { useState } from "react";
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from "react-redux";
import {add} from './Actions/index'
import ShopList from "./ShopList";

const AddShop = () => {
  const [shopdata, setShopData] = useState({})
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const list = useSelector((state) => state.reducers.list)
  //store opening date
  const [selectedDate, setSelectedDate] = useState(null);
 
  //store Closing date
  const [closingdDate, setClosingDate] = useState(null);
  //Handel Error
  const [nameeroor,setNameeroor] = useState('')
  const { data, isLoading } = useQuery("fakeData", () =>
    fetch("fakedata.json").then((res) => res.json())
  );
  if (isLoading) {
    return;
  }
  const Areas = data[0].Areas;
  const Category = data[1].Category;
  const submit = (event) => {
    event.preventDefault();
    //   ()
    const shopname = event.target.shopname.value;
    const area = event.target.area.value;
    const category = event.target.category.value;
    const openingdate =(selectedDate.toString()).slice(0,15);
    const closingdate = (closingdDate.toString().slice(0,15));
    const data = {shopname,area,category,openingdate,closingdate,};
    if ((/^[A-Za-z]+$/).test(shopname)) {
      setNameeroor('')
    }
    else {
      setNameeroor('Name Should Be Alphabet')
      return     
    }
    setShopData(data)
    dispatch(add(data))
    toast.success('Add Your Shop Information To our List')
    event.target.reset()
  };

  return (
    <div>
      <div className="flex justify-end p-3">
      <div class="form-control">
      <label class="input-group">
        <input type="text" placeholder="Search By Name" class="input input-bordered" onChange={(e)=>setInput(e.target.value)}/>
       <span className=" cursor-pointer">Search</span>
       </label>
      </div>
      </div>
    <div className="hero ">
      <div className="hero-content lg:w-2/4 md:w-3/4 w-full">
        <div className="card w-full shadow-2xl bg-base-100">
          <form action="" onSubmit={submit}>
            <div className="card-body w-full">
              {/* Shop Name=============================== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Name</span>
                </label>
                <input
                  name="shopname"
                  type="text"
                  placeholder="Shop Name"
                  className="input w-full  input-bordered"
                  required
                />
                {nameeroor && <span className="text-red-700 mt-2"> {nameeroor}</span>}
              </div>
              {/*Area Name=============================== */}
              <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Area</span>
                </label>
                <select
                  name="area"
                  className="select w-full max-w-lg  input-bordered"
                >
                  {Areas?.map((area, index) => (
                    <option key={index} value={area} selected>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              {/* Category=============================== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  className="select w-full max-w-lg input-bordered"
                >
                  {Category?.map((categor, index) => (
                    <option key={index} value={categor} selected>
                      {categor}
                    </option>
                  ))}
                </select>
              </div>
              </div>
              {/* Opening Date=============================== */}
              <div className="grid grid-cols-2 gap-3">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Opening Date</span>
                </label>
                <DatePicker
                  name="date"
                  className="w-full max-w-lg input-bordered input"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText={"DD/MM/YYYY"}
                  minDate={new Date()}
                  showYearDropdown
                    required
                    withPortal
                />
              </div>
              {/* Closing Date=============================== */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Closing Date</span>
                </label>
                <DatePicker
                  name="date"
                  className="w-full max-w-lg input-bordered input"
                  selected={closingdDate}
                  onChange={(date) => setClosingDate(date)}
                  placeholderText={"DD/MM/YYYY"}
                  showYearDropdown
                  minDate={selectedDate}
                    required
                    withPortal
                />
              </div>
             </div>
              <div className="my-3">
                <button className="btn btn-secondary" type="submit">
                  Add Shop To list
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
      {
          list.filter(data => data.data.shopname.toLowerCase().includes(input.toLowerCase())).map(data=><ShopList data={data} key={data.id}></ShopList>)
      }
      </div>
      </div>
  );
};

export default AddShop;
