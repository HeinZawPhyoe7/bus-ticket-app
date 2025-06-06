import PaymentInfo from "@/view/PaymentInfo";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <div>
        <PaymentInfo ticketId={id} />
      </div>
    </div>
  );
};

export default Page;
