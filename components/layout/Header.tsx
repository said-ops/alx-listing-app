import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import DateInput from "../common/DateInput";

const Header: React.FC = () => {
  // const [dates, setDates] = useState<{ [key: string]: Date | null }>({
  //   checkin: null,
  //   checkout: null,
  // });

  // const handleDateChange = (date: Date | null, id: string) => {
  //   setDates((prevDates) => ({
  //     ...prevDates,
  //     [id]: date,
  //   }));
  // };

  return (
    <header className="font-quicksand font-semibold bg-primaryColor text-[13px] lg:text-[16px] ">
      {/* more info  */}
      <div className="flex items-end md:items-center justify-center gap-4 p-4 lg:min-h-[47px] min-h-[97px] text-white">
        <svg
          width="24"
          height="24"
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
          width="86px"
          height="30px"
        />
      </div>
    </header>
  );
};

export default Header;
