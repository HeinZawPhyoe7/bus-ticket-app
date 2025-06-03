"use client";

interface InfoProps {
  selectedSeatNo: string[];
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const Info: React.FC<InfoProps> = ({ selectedSeatNo }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [nation, setNation] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [nrcnumber, setNrcnumber] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [place, setPlace] = useState("");
  const searchParams = useSearchParams();
  const totalSeat = searchParams.get("seatCount");
  const handleNameChange = (e: any) => {
    setName(e.target.value);
    console.log("counter");
  };

  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (value: any) => {
    setGender(value);
  };

  const handleNationChange = (value: any) => {
    setNation(value);
  };

  const handleStateChange = (value: any) => {
    setState(value);
  };

  const handleTownChange = (value: any) => {
    setTown(value);
  };

  const handleCitizenshipChange = (value: any) => {
    setCitizenship(value);
  };

  const handleNrcnumberChange = (e: any) => {
    setNrcnumber(e.target.value);
  };

  const handlePlaceChange = (value: any) => {
    setPlace(value);
  };

  const handleBuynow = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-user`,
        {
          name: name,
          phone: phone,
          email: email,
          gender: gender,
          nation: nation,
          state: state,
          town: town,
          citizenship: citizenship,
          nrc_number: nrcnumber,
          payment: paymentType,
          pickup_place: place,
          selected_seat_no: selectedSeatNo,
          total_seat: totalSeat,
        }
      );
      console.log("Create successful:", response.data);
      router.push("/home/payment");
      return response.data;
    } catch (error) {
      console.error("Create failed:", error);
    }
  };
  return (
    <div className=" mt-4">
      <div className=" w-10/12 mx-auto">
        <h2 className=" text-center mb-6">Passenger Information</h2>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Name:</div>
          <input
            type="text"
            id="name"
            onChange={handleNameChange}
            placeholder="Name"
            className=" border border-gray-300 shadow-md p-1.5"
          />
        </div>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Contact No:</div>
          <input
            type="text"
            id="phone"
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            className=" border border-gray-300 shadow-md p-1.5"
          />
        </div>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Email:</div>
          <input
            type="text"
            id="email"
            onChange={handleEmailChange}
            placeholder="Email"
            className=" border border-gray-300 shadow-md p-1.5"
          />
        </div>
        <div className=" flex justify-between mb-5">
          <div className=" my-auto">Select Gender:</div>
          <div>
            <Select onValueChange={handleGenderChange}>
              <SelectTrigger id="gender" className="w-[180px]">
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
            <Select onValueChange={handleNationChange}>
              <SelectTrigger id="nation" className="w-[180px]">
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
              <Select onValueChange={handleStateChange}>
                <SelectTrigger id="state" className="w-[70px]">
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
              <Select onValueChange={handleTownChange}>
                <SelectTrigger id="town" className="w-[140px]">
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
              <Select onValueChange={handleCitizenshipChange}>
                <SelectTrigger id="citizenship" className="w-[80px]">
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
              onChange={handleNrcnumberChange}
              className=" border border-gray-400 p-1.5 shadow-md rounded-md "
              placeholder="NRC NUMBER"
            />
          </div>
        </div>

        <div className=" flex justify-between mb-7">
          <div>Payment Type:</div>
          <RadioGroup
            value={paymentType}
            onValueChange={setPaymentType}
            className=" flex justify-center"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Booking" id="r1" />
              <Label htmlFor="r1">Booking</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Payment" id="r2" />
              <Label htmlFor="r2">Payment</Label>
            </div>
          </RadioGroup>
        </div>

        <div className=" mb-10">
          <div className=" pb-2">Pickup Place</div>
          <div>
            <Select onValueChange={handlePlaceChange}>
              <SelectTrigger id="place" className="w-[360px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Ayetharyar">Ayetharyar</SelectItem>
                  <SelectItem value="Aungmingalar">Aungmingalar</SelectItem>
                  <SelectItem value="Naung Shwe">Naung Shwe</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" text-center ">
          <button
            onClick={handleBuynow}
            className=" bg-sky-500 rounded-4xl text-white mx-auto p-1.5"
          >
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

export default Info;
