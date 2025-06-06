"use Client";

import { redirect } from "next/navigation";

const SelectCar = ({ data, seatCount }: any) => {
  const handleChooseSeat = (ticketId: number) => {
    redirect(`/home/seat?seatCount=${seatCount}&ticketId=${ticketId}`);
  };

  return (
    <div>
      <div className=" mt-4 lg:px-[500px]">
        {data.length > 0 ? (
          data.map((ticket: any) => (
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
                <button
                  onClick={() => handleChooseSeat(ticket.id)}
                  className=" bg-sky-400 text-sm text-gray-100 rounded-3xl shadow-md p-2"
                >
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

export default SelectCar;
