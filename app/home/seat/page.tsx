"use client";

import { cn } from "@/lib/utils";
import Info from "@/view/Info";
import { Car } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const numberList = [
    { seatNo: "A.1", id: "1" },
    { seatNo: "A.2", id: "2" },
    { seatNo: "A.3", id: "3" },
    { seatNo: "B.1", id: "4" },
    { seatNo: "B.2", id: "5" },
    { seatNo: "B.3", id: "6" },
    { seatNo: "C.1", id: "7" },
    { seatNo: "C.2", id: "8" },
    { seatNo: "C.3", id: "9" },
    { seatNo: "D.1", id: "10" },
    { seatNo: "D.2", id: "11" },
    { seatNo: "D.3", id: "12" },
    { seatNo: "E.1", id: "13" },
    { seatNo: "E.2", id: "14" },
    { seatNo: "E.3", id: "15" },
    { seatNo: "F.1", id: "16" },
    { seatNo: "F.2", id: "17" },
    { seatNo: "F.3", id: "18" },
    { seatNo: "G.1", id: "19" },
    { seatNo: "G.2", id: "20" },
    { seatNo: "G.3", id: "21" },
    { seatNo: "H.1", id: "22" },
    { seatNo: "H.2", id: "23" },
    { seatNo: "H.3", id: "24" },
    { seatNo: "I.1", id: "25" },
    { seatNo: "I.2", id: "26" },
    { seatNo: "I.3", id: "27" },
  ];
  const searchParams = useSearchParams();

  const seatCount = parseInt(searchParams.get("seatCount") || "0", 10);
  const ticketId = parseInt(searchParams.get("ticketId") || "0", 10);
  const [selectedSeatNo, setSelectedSeatNo] = useState<string[]>([]);

  const handleSelectSeat = (seatNo: string) => {
    console.log("here", seatNo);
    setSelectedSeatNo((prev) => {
      if (prev.includes(seatNo)) {
        return prev.filter((s) => s !== seatNo);
      } else {
        if (prev.length >= seatCount) {
          alert(`You can only select up to ${seatCount} seats.`);
          return prev;
        }
        return [...prev, seatNo];
      }
    });
  };

  return (
    <div>
      <div className="px-12">
        <Car size={100} color="green" />
      </div>
      <div className="grid grid-cols-4 gap-4 px-12">
        {numberList.map((item) => (
          <div key={item.id}>
            <div
              onClick={() => handleSelectSeat(item.seatNo)}
              className={cn(
                "text-center cursor-pointer hover:bg-sky-200 py-4 rounded-full border-2 ",
                { "bg-yellow-400": selectedSeatNo.includes(item.seatNo) }
              )}
            >
              {item.seatNo}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <button className={cn("p-2 bg-green-400 text-white rounded-md")}>
              Continue
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle>Add Info</DialogTitle>
            <Info selectedSeatNo={selectedSeatNo} ticketId={ticketId} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Page;
