import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ meetup }) => {
  return (
    <NavLink to={`/meetupDetails/${meetup?.id}`} >
      <div className="max-w-sm border border-gray-200 rounded-lg shadow">
        <img
          className="rounded-t-lg w-full h-60"
          src={meetup?.eventThumbnail}
        />
        <div className=" p-5 w-full bottom-0 backdrop-blur-sm">
          {meetup?.eventType.toLowerCase() === "online" ? (
            <span className="text-sm bg-green-600 px-3 mb-2 text-white rounded-full flex items-center max-w-fit">
              {meetup?.eventType}
            </span>
          ) : (
            <span className="text-sm bg-amber-700 px-3 mb-2 text-white rounded-full flex items-center max-w-fit">
              {meetup?.eventType}
            </span>
          )}
          <div className="mb-3">
            <h5 className="mb-0 text-xl font-bold tracking-tight text-black">
              {meetup?.title}
            </h5>
          </div>
          <p className="mb-1 font-normal text-gray-900 ">
            Thu Jul 13 2023 - 7:00:00 IST
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
