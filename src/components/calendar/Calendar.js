import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Calendar.scss";

function Calendar(props) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const startDay = value.clone().startOf("month").startOf("isoWeek");
  const endDay = value.clone().endOf("month").endOf("isoWeek");

  useEffect(() => {
    const day = startDay.clone().subtract(1, "day");
    const temp = [];
    while (day.isBefore(endDay, "day")) {
      temp.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(temp);
  }, [endDay, startDay]);

  function dayStyles(day, value) {
    if (day.isBefore(value, "month") || day.isAfter(value, "month"))
      return "day before";
    if (day.isSame(value, "day")) return "day selected";

    if (day.isSame(new Date(), "day")) return "day today";
    return "day";
  }

  function currentMonthName(value) {
    return value.format("MMMM");
  }

  function currentYear(value) {
    return value.format("YYYY");
  }

  function previousMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function currentMonth() {
    return moment();
  }

  return (
    <div className="widget small">
      <div className="widget__main-info">
        <div className="widget__header">{props.widgetTitle}</div>
        <div className="calendar">
          <div className="calendar__header">
            <div
              className="calendar__arrow-button left"
              onClick={() => setValue(previousMonth())}
            ></div>

            <div
              className="calendar__current-month"
              onClick={() => setValue(currentMonth())}
            >
              {currentMonthName(value)} {currentYear(value)}
            </div>
            <div
              className="calendar__arrow-button right"
              onClick={() => setValue(nextMonth())}
            ></div>
          </div>
          <div className="calendar__body">
            {calendar.map((week, index) => (
              <div className="week" key={index}>
                {week.map((day, index) => (
                  <div
                    key={index}
                    className={dayStyles(day, value)}
                    onClick={() => {
                      setValue(day);
                    }}
                  >
                    {day.format("D").toString()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>{" "}
        {/* /calendar */}
      </div>
    </div>
  );
}

export default Calendar;
