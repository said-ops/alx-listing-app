import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
  id: string; // Unique ID for each DateInput
  onChange: (date: Date | null, id: string) => void; // Callback to handle date change
}
const DateInput: React.FC<DateInputProps> = ({id,onChange}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date, id); // Pass the date value along with the id to the parent component
  };
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Add date"
        dateFormat="yyyy-MM-dd"
        id={id}
      />
    </div>
  );
};

export default DateInput;
