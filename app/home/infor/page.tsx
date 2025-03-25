"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <div className=" mt-4">
      <div className=" w-10/12 mx-auto">
        <h2 className=" text-center mb-6">Passenger Information</h2>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Name:</div>
          <input
            type="text"
            placeholder="Name"
            className=" border border-gray-300 shadow-md p-1.5"
          />
        </div>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Contact No:</div>
          <input
            type="text"
            placeholder="Phone Number"
            className=" border border-gray-300 shadow-md p-1.5"
          />
        </div>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Email:</div>
          <input
            type="text"
            placeholder="Email"
            className=" border border-gray-300 shadow-md p-1.5"
          />
        </div>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Select Gender:</div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Group">Group</SelectItem>
                  <SelectItem value="Monk">Monk</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Select Nation:</div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Nation" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="NRC">NRC</SelectItem>
                  <SelectItem value="Passport">Passport</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" mb-5">
          <h3 className=" mb-2">NRC No.</h3>
          <div className=" flex justify-between mb-2">
            <div>
              <Select>
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="13">13</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <p className="my-auto">/</p>
            <div>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="KaKaNa">KaKaNa</SelectItem>
                    <SelectItem value="KaMaNa">KaMaNa</SelectItem>
                    <SelectItem value="KaPaNa">KaPaNa</SelectItem>
                    <SelectItem value="KaTaKa">KaTaKa</SelectItem>
                    <SelectItem value="LaKaNa">LaKaNa</SelectItem>
                    <SelectItem value="LaMaNa">LaMaNa</SelectItem>
                    <SelectItem value="MaBaNa">MaBaNa</SelectItem>
                    <SelectItem value="MaKaNa">MaKaNa</SelectItem>
                    <SelectItem value="MaHaYa">MaHaYa</SelectItem>
                    <SelectItem value="MaPaNa">MaPaNa</SelectItem>
                    <SelectItem value="NaMaNa">NaMaNa</SelectItem>
                    <SelectItem value="NaPaNa">NaPaNa</SelectItem>
                    <SelectItem value="PaBaNa">PaBaNa</SelectItem>
                    <SelectItem value="PaKaNa">PaKaNa</SelectItem>
                    <SelectItem value="PaLaNa">PaLaNa</SelectItem>
                    <SelectItem value="SaKaNa">SaKaNa</SelectItem>
                    <SelectItem value="SaLaNa">SaLaNa</SelectItem>
                    <SelectItem value="TaKaNa">TaKaNa</SelectItem>
                    <SelectItem value="TaMaNa">TaMaNa</SelectItem>
                    <SelectItem value="YaKaNa">YaKaNa</SelectItem>
                    <SelectItem value="BaHaNa">BaHaNa</SelectItem>
                    <SelectItem value="BaKaNa">BaKaNa</SelectItem>
                    <SelectItem value="DaGaNa">DaGaNa</SelectItem>
                    <SelectItem value="DaMaNa">DaMaNa</SelectItem>
                    <SelectItem value="HaPaNa">HaPaNa</SelectItem>
                    <SelectItem value="HaKaNa">HaKaNa</SelectItem>
                    <SelectItem value="KaLaNa">KaLaNa</SelectItem>
                    <SelectItem value="KaMaYa">KaMaYa</SelectItem>
                    <SelectItem value="MaNyaNa">MaNyaNa</SelectItem>
                    <SelectItem value="RaKaNa">RaKaNa</SelectItem>
                    <SelectItem value="TaNaNa">TaNaNa</SelectItem>
                    <SelectItem value="WaMaNa">WaMaNa</SelectItem>
                    <SelectItem value="YaMaPa">YaMaPa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="AC">AC</SelectItem>
                    <SelectItem value="NC">NC</SelectItem>
                    <SelectItem value="V">V</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="N">N</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <input
              type="number"
              className=" border border-gray-400 p-1.5 shadow-md rounded-md "
              placeholder="NRC NUMBER"
            />
          </div>
        </div>
        <div className=" flex justify-between mb-7">
          <div>Payment Type:</div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Booking
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Payment
            </label>
          </div>
        </div>
        <div className=" mb-10">
          <div className=" pb-2">Pickup Place</div>
          <div>
            <Select>
              <SelectTrigger className="w-[360px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Taunggyi">Taunggyi</SelectItem>
                  <SelectItem value="Yangon">Yangon</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" text-center ">
          <button className=" bg-sky-500 rounded-4xl text-white mx-auto p-1.5">
            Continue to Buy Now
          </button>
        </div>
        <div className=" text-center">
          <button className=" bg-gray-200 border shadow-md text-gray-700 p-1.5 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
