import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import DateInput from "../common/DateInput";

const Header: React.FC = () => {
  const [dates, setDates] = useState<{ [key: string]: Date | null }>({
    checkin: null,
    checkout: null,
  });

  const handleDateChange = (date: Date | null, id: string) => {
    setDates((prevDates) => ({
      ...prevDates,
      [id]: date,
    }));
  };

  return (
    <header className="font-quicksand font-semibold text-[12px] lg:text-[16px] ">
      {/* more info  */}
      <div className="w-full text-white  bg-primaryColor  flex justify-center sm:items-center items-end p-4 gap-4 lg:max-h-[47px] h-[92px]">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8334 8.5H14.1667C12.2459 8.5 10.6704 8.5 9.363 8.57713C7.03406 8.71454 5.55611 9.09672 4.4931 10.1597C2.83337 11.8195 2.83337 14.4907 2.83337 19.8333C2.83337 25.1759 2.83337 27.8472 4.4931 29.5069C6.15283 31.1667 8.82412 31.1667 14.1667 31.1667H19.8334C25.176 31.1667 27.8472 31.1667 29.507 29.5069C31.1667 27.8472 31.1667 25.1759 31.1667 19.8333C31.1667 14.4907 31.1667 11.8195 29.507 10.1597C28.444 9.09672 26.966 8.71454 24.6371 8.57713C23.3297 8.5 21.7542 8.5 19.8334 8.5Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M9.36328 8.57713C10.5298 8.54757 11.5589 7.72779 11.9559 6.63045C11.9681 6.5967 11.9806 6.55915 12.0056 6.48405L12.042 6.375C12.1018 6.1957 12.1316 6.10603 12.1636 6.0265C12.5719 5.01092 13.5286 4.32135 14.6212 4.25518C14.7068 4.25 14.8013 4.25 14.9903 4.25H19.0104C19.1994 4.25 19.2939 4.25 19.3795 4.25518C20.472 4.32135 21.4288 5.01092 21.837 6.0265C21.869 6.10603 21.8989 6.19569 21.9587 6.375L21.995 6.48405C22.02 6.55905 22.0326 6.59672 22.0448 6.63045C22.4417 7.72779 23.4708 8.54757 24.6374 8.57713"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M30.6876 12.3529C26.4236 15.1245 24.2917 16.5102 22.0441 17.2085C18.7589 18.2292 15.2414 18.2292 11.9562 17.2085C9.70865 16.5102 7.57668 15.1245 3.31274 12.3529"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11.3334 15.5834V18.4167"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M22.6666 15.5834V18.4167"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <p>Overseas trip? Get the latest information on travel guides</p>
        <Button
          text="More info"
          bgColor="bg-seconadyColor"
          textColor="text-white"
          height="30px"
        ></Button>
      </div>
      {/* nav bar setion */}
      <nav className="px-16 mt-8 flex items-center justify-between">
        {/* logo */}
        <svg
          width="60"
          height="32"
          viewBox="0 0 60 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.191 20.7395C22.191 26.7167 17.3455 31.5622 11.3683 31.5622C5.39112 31.5622 0.545654 26.7167 0.545654 20.7395C0.545654 14.7624 5.39112 9.91689 11.3683 9.91689C17.3455 9.91689 22.191 14.7624 22.191 20.7395ZM7.66264 20.7395C7.66264 22.7861 9.32173 24.4452 11.3683 24.4452C13.4149 24.4452 15.074 22.7861 15.074 20.7395C15.074 18.693 13.4149 17.0339 11.3683 17.0339C9.32173 17.0339 7.66264 18.693 7.66264 20.7395Z"
            fill="#262626"
          />
          <path
            d="M15.4735 9.91689H22.9374V31.5622H15.4735V9.91689Z"
            fill="#262626"
          />
          <path
            d="M26.6693 4.69216L34.1332 0.960205V31.5622H26.6693V4.69216Z"
            fill="#262626"
          />
          <path
            d="M53.8773 5.42319C54.1744 5.13749 54.6469 5.14679 54.9326 5.44394L59.071 9.74837C59.3567 10.0455 59.3474 10.518 59.0503 10.8037L42.4667 26.7476C42.1696 27.0333 41.6971 27.024 41.4114 26.7268L37.273 22.4224C36.9873 22.1252 36.9966 21.6527 37.2937 21.367L53.8773 5.42319Z"
            fill="#262626"
          />
          <path
            d="M58.9383 21.5916C59.2294 21.8834 59.2289 22.356 58.9371 22.6471L54.7103 26.8648C54.4185 27.1559 53.9459 27.1554 53.6548 26.8636L37.4056 10.5792C37.1144 10.2874 37.1149 9.8148 37.4067 9.52363L41.6335 5.30599C41.9253 5.01482 42.3979 5.01533 42.6891 5.30713L58.9383 21.5916Z"
            fill="#262626"
          />
        </svg>
        {/* header form */}
        <form action="#" className="flex items-center gap-4  border border-gray-500 rounded-full border-solid border-1 p-4 ">
          <fieldset className="flex flex-col gap-3 text-seconadyColor">
            <label htmlFor="destination" className=" text-[16px]">
              Location
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              placeholder="search for destination"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-3 text-seconadyColor">
            <label htmlFor="checkin" className=" text-[16px]">
              Check In
            </label>
            <DateInput id="checkin" onChange={handleDateChange} />
          </fieldset>
          <fieldset className="flex flex-col gap-3 text-seconadyColor">
            <label htmlFor="checkout" className=" text-[16px]">
              Check out
            </label>
            <DateInput id="checkout" onChange={handleDateChange} />
          </fieldset>
          <fieldset className="flex flex-col gap-3 text-seconadyColor">
            <label htmlFor="guest" className=" text-[16px]">
              People
            </label>
            <input
              type="number"
              name="guest"
              id="guest"
              placeholder="Add guests"
            />
          </fieldset>
          <button className="w-[42px] h-[42px] rounded-full bg-[#FFA800] flex items-center justify-center ">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16.2917"
                cy="16.2917"
                r="13.4583"
                stroke="white"
                strokeWidth="1.25"
              />
              <path
                d="M26.2084 26.2084L31.1667 31.1667"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>
        {/* sign/signup butoons */}
        <div className="flex gap-2">
        <Button text="Sign in" bgColor="bg-primaryColor" textColor="text-white" height="45px" width="103px"/>
        <Button text="Sign up" bgColor="bg-[#ECECEC]" textColor="text-secondaryColor" height="45px" width="103px"/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
