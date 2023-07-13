import React, { useState } from "react";
import { useData } from "../../contexts/DataContext";
import { NavLink, useParams } from "react-router-dom";
import MyModal from "../../components/Modal";

const MeetupDetails = () => {
  const { meetupData } = useData();
  const { meetupId } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const meetup = meetupData?.find((meetup) => meetup.id === meetupId);

  const startDate = new Date(meetup?.eventStartTime).toLocaleString();
  const today = new Date();

  if (startDate < today) {
    console.log("date1 is before date2", startDate, today);
  } else if (startDate > today) {
    console.log("date1 is after date2", startDate, today);
  } else {
    console.log("date1 is equal to date2", startDate, today);
  }

  return (
    <div className="flex gap-5 flex-wrap mb-10">
      <div className="flex-1">
        <div className="flex items-center">
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M9.125 21.1L.7 12.7q-.15-.15-.213-.325T.425 12q0-.2.063-.375T.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
              />
            </svg>
          </NavLink>
          <h1 className="text-4xl font-bold text-slate-800">{meetup?.title}</h1>
        </div>
        <div className="pl-8 mt-3">
          <p className="text-md font-semibold">Hosted by: </p>
          <h2 className="text-xl font-semibold">{meetup?.hostedBy}</h2>
          <img
            src={meetup?.eventThumbnail}
            alt={meetup?.eventThumbnail}
            className="mt-5 rounded-md"
          />
          <p className="text-2xl font-semibold text-slate-700 mt-7">
            Details:{" "}
          </p>
          <p className="leading-6">{meetup?.eventDescription}</p>
          <p className="text-2xl font-semibold text-slate-700 mt-7 mb-2">
            Additional Information:{" "}
          </p>
          <p className="leading-6 text-[18px] font-semibold">
            Dress Code: {meetup?.additionalInformation?.dressCode}
          </p>
          <p className="leading-6 text-[18px] font-semibold">
            Age Restrictions: {meetup?.additionalInformation?.ageRestrictions}
          </p>
          <p className="text-2xl font-semibold text-slate-700 mt-7 mb-2">
            Event Tags:
          </p>
          <div className="flex gap-3">
            {meetup?.eventTags?.map((eventTag) => (
              <p className="px-3 py-1 bg-rose-600 text-white rounded-full flex inset-0 items-center">
                {eventTag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-32 px-10 place-items-center">
        <div className="">
          <div className="flex gap-5 items-center max-w-sm p-6 bg-white rounded-t-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="grey"
                d="M13 12.6V9q0-.425-.288-.713T12 8q-.425 0-.713.288T11 9v3.975q0 .2.075.388t.225.337l2.8 2.8q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13 12.6ZM12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22ZM2.05 7.3q-.275-.275-.275-.7t.275-.7L4.9 3.05q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L3.45 7.3q-.275.275-.7.275t-.7-.275Zm19.9 0q-.275.275-.7.275t-.7-.275L17.7 4.45q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l2.85 2.85q.275.275.275.7t-.275.7Z"
              />
            </svg>
            <div>
              <p className="text-slate-800">
                {new Date(meetup?.eventStartTime).toLocaleString()} to{" "}
                {new Date(meetup?.eventEndTime).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5 items-center max-w-sm p-6 bg-white shadow border-t-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#888888"
                d="M12 18.6q-.25 0-.488-.075t-.437-.225q-2.025-1.575-4.05-3.963T5 9.15q0-1.775.638-3.113T7.274 3.8q1-.9 2.25-1.35T12 2q1.225 0 2.475.45t2.25 1.35q1 .9 1.638 2.238T19 9.15q0 2.8-2.025 5.188t-4.05 3.962q-.2.15-.438.225T12 18.6Zm0-7.6q.825 0 1.413-.588T14 9q0-.825-.588-1.413T12 7q-.825 0-1.413.588T10 9q0 .825.588 1.413T12 11ZM6 22q-.425 0-.713-.288T5 21q0-.425.288-.713T6 20h12q.425 0 .713.288T19 21q0 .425-.288.713T18 22H6Z"
              />
            </svg>
            <div>
              <p className="text-slate-800">
                {meetup?.location} <br />
                {meetup?.address}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5 items-center max-w-sm p-6 bg-white border-t-2  rounded-b-lg shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#888888"
                d="M14.15 21q-.2 0-.388-.075t-.337-.225L7.4 14.425q-.175-.175-.288-.475T7 13.4q0-.575.413-.988T8.4 12h2.1q1.325 0 2.288-.863T13.95 9H7q-.425 0-.713-.288T6 8q0-.425.288-.713T7 7h6.65q-.425-.875-1.263-1.438T10.5 5H7q-.425 0-.713-.288T6 4q0-.425.288-.713T7 3h10q.425 0 .713.288T18 4q0 .425-.288.713T17 5h-2.25q.35.425.625.925T15.8 7H17q.425 0 .713.288T18 8q0 .425-.288.713T17 9h-1.025q-.2 2.125-1.75 3.563T10.5 14h-.725l5.1 5.3q.45.475.188 1.088T14.15 21Z"
              />
            </svg>
            <div>
              <p className="text-slate-800">{meetup?.price}</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-semibold text-slate-800">
            Speakers: ({meetup?.speakers?.length})
          </p>
          <div className="flex mt-5 gap-5">
            {meetup?.speakers?.map((speaker) => (
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 object-cover mb-3 rounded-full shadow-md"
                  src={speaker?.image}
                  alt={speaker?.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {speaker?.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {speaker?.designation}
                </span>
              </div>
            ))}
          </div>
        </div>
        {!buttonState ? (
          <button
            onClick={openModal}
            className="w-full text-center bg-rose-600 py-2 text-white font-semibold rounded"
          >
            RSVP
          </button>
        ) : (
          <p className="w-full text-center bg-rose-200 py-2 text-white font-semibold rounded cursor-not-allowed">
            RSVPed
          </p>
        )}
      </div>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setButtonState={setButtonState}
      />
    </div>
  );
};

export default MeetupDetails;
