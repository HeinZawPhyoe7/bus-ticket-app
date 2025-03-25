"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [tickets, setTickets] = useState<any[]>([]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ticket-all`
      );
      console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);

      setTickets(response.data.ticket);
    } catch (err) {
      console.error("Error fetching tickets:", err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <div className=" mt-4">
        {tickets.length > 0 ? (
          tickets.map((ticket: any) => (
            <div className="flex justify-between mx-auto gap-3" key={ticket.id}>
              <div className="text-[#31e4ba] text-sm mb-5 ">{ticket.class}</div>
              <div className=" mb-5 w-28">
                <div className="text-[#31e4ba] text-sm">Depart Time:</div>
                <div className=" text-[#E50046] text-sm">{ticket.time}</div>
                <div className="text-[#31e4ba] text-sm">
                  Approx Duration: 11 hour
                </div>
              </div>
              <div className=" mb-5">
                <div className="text-[#31e4ba] text-sm">Price</div>
                <div className=" text-[#E50046] text-sm">{ticket.price}</div>
              </div>
              <div className=" mb-5 ">
                <div className=" flex ">
                  <div className="text-[#31e4ba] text-sm">
                    Available seat(s):
                  </div>
                  <p className=" text-[#E50046] text-sm">{ticket.seat}</p>
                </div>
                <button className=" bg-sky-400 text-sm text-gray-100 rounded-3xl shadow-md p-2">
                  Choose Seat(s)
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No tickets available</p>
        )}
      </div>
    </div>
  );
};

export default Page;
