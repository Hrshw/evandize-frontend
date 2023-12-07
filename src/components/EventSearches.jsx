import { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import Paginate from "./Paginate";

const EventSearches = () => {
  const events = [];

  for (let i = 0; i < 98; i++) {
    events.push("");
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(events.length / eventsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      {events.length > 0 ? (
        <>
          <div className="w-full grid grid-cols-5 gap-4 grid-rows-2">
            {currentEvents.map((value, index) => (
              <FeaturedCard key={index} />
            ))}
          </div>
          <Paginate
            eventsPerPage={eventsPerPage}
            totalEvents={events.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </>
      ) : (
        <div className="flex items-center gap-4 w-full">
          <div className="w-full h-[0.5px] bg-gray-500"></div>
          <h2 className="text-2xl font-semibold uppercase text-gray-500 py-10 w-full flex items-center justify-center">
            No events to display
          </h2>
          <div className="w-full h-[0.5px] bg-gray-500"></div>
        </div>
      )}
    </>
  );
};

export default EventSearches;