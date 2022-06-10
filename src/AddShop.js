import React, { useState } from "react";
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddShop = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [closingdDate, setClosingDate] = useState(null);
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
    const openingdate = selectedDate;
    const closingdate = closingdDate;
    const data = {
      shopname,
      area,
      category,
      openingdate,
      closingdate,
    };
    if ((/^[A-Za-z]+$/).test(shopname)) {
      setNameeroor('')
    }
    else {
      setNameeroor('Name Should Be Alphabet')
      return     
    }
    event.target.reset()
  };

  return (
    <div className="hero ">
      <div className="hero-content lg:w-2/4 md:w-2/4 w-3/4">
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
                  className="input w-full max-w-lg input-bordered"
                  required
                />
                {nameeroor && <span className="text-red-700 mt-2"> {nameeroor}</span>}
              </div>
              {/*Area Name=============================== */}
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
              {/* Opening Date=============================== */}
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
                />
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
  );
};

export default AddShop;
