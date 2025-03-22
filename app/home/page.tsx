import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarElement } from "@/components/element/CalendarElement";
import { Search } from "lucide-react";

const page = () => {
  const placeArr = [
    {
      id: 1,
      name: "Yangon",
    },
    {
      id: 2,
      name: "Mandalay",
    },
    {
      id: 3,
      name: "Nay Pyi Taw",
    },
    {
      id: 4,
      name: "Pago",
    },
    {
      id: 5,
      name: "Taunggyi",
    },
    {
      id: 6,
      name: "Myit Kyi Nar",
    },
    {
      id: 7,
      name: "Kalay",
    },
    {
      id: 8,
      name: "Kathar",
    },
    {
      id: 9,
      name: "Pyi",
    },
  ];
  return (
    <div className="  text-center">
      <div>Buy Ticket(s)</div>
      <div className=" flex justify-center gap-20">
        <div className=" text-sm my-auto text-blue-500">Traveling from</div>
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Place" />
            </SelectTrigger>
            <SelectContent>
              {placeArr.map((place) => (
                <div key={place.id}>
                  <SelectItem value={place.name}>{place.name}</SelectItem>
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" flex justify-center gap-24 mt-5">
        <div className=" text-sm my-auto text-blue-500">Traveling to</div>
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Place" />
            </SelectTrigger>
            <SelectContent>
              {placeArr.map((place) => (
                <div key={place.id}>
                  <SelectItem value={place.name}>{place.name}</SelectItem>
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" flex justify-center gap-24 mt-5">
        <div className=" text-sm my-auto text-blue-500">Departure Date</div>
        <CalendarElement />
      </div>
      <div className=" flex justify-center gap-24 mt-5 mb-10">
        <div className=" text-sm my-auto text-blue-500">Number of Seat</div>
        <div>
          <input className=" border border-gray-900 w-28" type="number" />
        </div>
      </div>
      <div className=" flex justify-center bg-blue-500 rounded-md mx-auto w-[100px] p-1.5 shadow-md gap-2">
        <Search className=" text-white text-sm" />
        <button className=" text-white text-sm">Search</button>
      </div>
    </div>
  );
};

export default page;
