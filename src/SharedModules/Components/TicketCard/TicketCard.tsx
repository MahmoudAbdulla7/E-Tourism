
interface Ticket {
  ticket: {
    userId: {
      image: {
        secure_url: string;
      };
      lastName: string;
      firstName: string;
      country: string;
    };
    touristDestination: {
      name: string;
    };
    DateOfVisit: string;
    status: string;
  };
}

export default function TicketCard({ ticket }: Ticket) {
  return (
    <div className="rounded-xl border border-gray-700 bg-blue-200 p-4">
      <div className="flex items-center gap-4">
        <img
          alt=""
          src={`${ticket.userId.image.secure_url}`}
          className="size-16 rounded-full object-cover"
        />

        <div>
          <h2 className="text-lg font-bold text-main">{`${ticket.userId.firstName} ${ticket.userId.lastName}`}</h2>

          <div className="flow-root">
            <p className="text-main text-sm">
              <strong>Country: </strong>{`${ticket.userId.country}`}
            </p>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="block h-full rounded-lg border border-gray-700 p-4 duration-300 hover:border-pink-600">
          <strong className="font-bold text-main">Dest Name</strong>
          <div className="text-main text-sm my-1">
            <p>
              <strong>Ticket Status: </strong>
              {`${ticket.status}`}
            </p>
            <p>
              <strong>Day of Visit: </strong>{ticket.DateOfVisit.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
