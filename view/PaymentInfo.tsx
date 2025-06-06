"use client";

import { TicketDetailsT } from "@/lib/types/TicketTypes";
import { UserDetailsT } from "@/lib/types/UserTypes";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PaymentInfo = ({ ticketId }: { ticketId: string }) => {
  const [userDetails, setUserDetails] = useState<UserDetailsT[]>([]);
  const [ticketDetails, setTicketDetails] = useState<TicketDetailsT | null>(
    null
  );
  const searchParams = useSearchParams();
  const nameFromParams = searchParams.get("name");
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/show-user-details/${ticketId}`
        );
        const filteredUsers = response.data.user_details.filter(
          (user: any) => user.name === nameFromParams
        );
        setUserDetails(filteredUsers);
        setTicketDetails(response.data.ticket_details);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserDetails();
  }, [ticketId]);

  console.log("userDetails", userDetails);
  return (
    <div className="px-4 py-6 flex flex-col justify-center items-center">
      {userDetails.map((details) => (
        <div
          key={details.id}
          className="flex flex-col justify-start items-start space-y-4"
        >
          <h2 className="font-bold font-serif">{ticketDetails?.class}</h2>
          <h2 className="font-bold font-serif">Boarding Pass</h2>
          <div>
            <div className="font-bold font-serif">Status</div>
            <div className="font-serif text-sm">{details.payment}</div>
          </div>
          <div>
            <div className="font-bold font-serif">From</div>
            <div className="font-serif text-sm">{ticketDetails?.from_city}</div>
          </div>
          <div>
            <div className="font-bold font-serif">To</div>
            <div className="font-serif text-sm">{ticketDetails?.to_city}</div>
          </div>
          <div className="flex justify-between items-center gap-8 lg:gap-16">
            <div>
              <div className="font-bold font-serif">Date</div>
              <div className="font-serif text-sm">{ticketDetails?.date}</div>
            </div>
            <div>
              <div className="font-bold font-serif">Time</div>
              <div className="font-serif text-sm">{ticketDetails?.time}</div>
            </div>
            <div>
              <div className="font-bold font-serif">Seat(s) No</div>
              <div className="flex justify-between items-center gap-2">
                {details.selected_seat_no.map((seat, index) => (
                  <div className="font-serif text-sm" key={index}>
                    {seat}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-8 lg:gap-16">
            <div>
              <div className="font-bold font-serif">Amount</div>
              <div className="font-serif text-sm">
                {Number(details.total_seat) *
                  Number(ticketDetails?.price?.replace("MMK", "") || 0)}{" "}
                MMK
              </div>
            </div>
            <div>
              <div className="font-bold font-serif">Class</div>
              <div className="font-serif text-sm">{ticketDetails?.class}</div>
            </div>
            <div>
              <div className="font-bold font-serif">Pickup Place</div>
              <div className="font-serif text-sm">{details.pickup_place}</div>
            </div>
          </div>
          <div className="text-green-400 font-bold font-serif text-xl">
            Included by Travelling Insurance Fees
          </div>

          <div>
            <p className="font-bold font-serif">Name: {details.name}</p>
            <p className="font-bold font-serif">NRC: {details.nrc_number}</p>
            <p className="font-bold font-serif">Contact: {details.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentInfo;
