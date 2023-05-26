import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import { Date, Device } from './Types';

const Calendar: React.FC<Date> = ({startDate,endDate,handleStartDate,handleEndDate}) => {
    const handleCalendarStart = (date: Date ) => {
        handleStartDate(date);
        // console.log(date);
      };
      const handleCalendarEnd = (date: Date ) => {
        handleEndDate(date);
        // console.log(date);
      };
  return (
  <>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                //   defaultValue={new stringify('04-04-2023')}
                label="From Date"
                value={startDate}
                // format="yyyy-MM-dd"
                onChange={(date: Date | any) => handleCalendarStart(date)}
                sx={{ marginBlockStart: "18px ", width: "300px" }}
              />

              <DatePicker
                label="To Date"
                // value={endDate}
                onChange={(date: Date | any) => handleCalendarEnd(date)}
                // onChange={(newValue: any) => {
                //     setStartDateTime(new Date(newValue));
                //   }}
                sx={{
                  marginBlockStart: "18px ",
                  width: "300px",
                  marginLeft: "20px",
                  paddingRight: "20px",
                }}
              />
            </LocalizationProvider>
  </>
  )
}

export default Calendar
