"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import SelectCar from "@/view/SelectCar";
import axios from "axios";

const Home = () => {
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [date, setDate] = useState<Date>();
  const [seatCount, setSeatCount] = useState(1);

  const [data, setData] = useState([]);

  const placeArr = [
    { id: 1, name: "Yangon" },
    { id: 2, name: "Mandalay" },
    { id: 3, name: "Nay Pyi Taw" },
    { id: 4, name: "Pago" },
    { id: 5, name: "Taunggyi" },
    { id: 6, name: "Myit Kyi Nar" },
    { id: 7, name: "Kalay" },
    { id: 8, name: "Kathar" },
    { id: 9, name: "Pyi" },
  ];

  const handleSearch = async () => {
    try {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search-ticket`,
        {
          from_city: fromPlace,
          to_city: toPlace,
          date: formattedDate,
        }
      );

      console.log("Search successful:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="text-center">
      <div className="mb-4 mt-6 font-bold text-4xl">Buy Ticket(s)</div>

      <div className="grid grid-cols-2 gap-24 ">
        <div className="text-sm text-end my-auto text-blue-500 col-span-1">
          Traveling from
        </div>
        <div className="col-span-1">
          <Select value={fromPlace} onValueChange={setFromPlace}>
            <SelectTrigger>
              <SelectValue placeholder="Select Place" />
            </SelectTrigger>
            <SelectContent>
              {placeArr.map((place) => (
                <SelectItem key={place.id} value={place.name}>
                  {place.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-24 mt-5">
        <div className="text-sm my-auto text-end text-blue-500 col-span-1">
          Traveling to
        </div>
        <div className="col-span-1">
          <Select value={toPlace} onValueChange={setToPlace}>
            <SelectTrigger>
              <SelectValue placeholder="Select Place" />
            </SelectTrigger>
            <SelectContent>
              {placeArr.map((place) => (
                <SelectItem key={place.id} value={place.name}>
                  {place.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-24 mt-5">
        <div className="col-span-1 text-sm my-auto text-end text-blue-500">
          Departure Date
        </div>
        <div className="col-span-1 flex justify-self-start items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="flex w-auto flex-col space-y-2 p-2"
            >
              <Select
                onValueChange={(value) =>
                  setDate(addDays(new Date(), parseInt(value)))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Today</SelectItem>
                  <SelectItem value="1">Tomorrow</SelectItem>
                  <SelectItem value="3">In 3 days</SelectItem>
                  <SelectItem value="7">In a week</SelectItem>
                </SelectContent>
              </Select>
              <div className="rounded-md border">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-5 mb-10 gap-24">
        <div className="col-span-1 text-end text-sm my-auto text-blue-500">
          Number of Seat
        </div>
        <div className="col-span-1 text-start">
          <input
            className="border border-gray-900 w-28 p-1"
            type="number"
            value={seatCount}
            onChange={(e) => setSeatCount(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="relative">
        <button
          onClick={handleSearch}
          className="relative rounded-md mx-auto pl-8 p-1.5 shadow-md text-white bg-blue-500 text-sm px-4"
        >
          <Search
            className="p-0.5 text-sm absolute top-1 left-1"
            color="white"
          />
          Search
        </button>
      </div>

      <div className="mt-10">
        <SelectCar data={data} />
      </div>
    </div>
  );
};

export default Home;
