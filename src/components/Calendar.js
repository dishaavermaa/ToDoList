import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

function Calendar() {
    return (
        <div>
        <Fullcalendar
            class = "calendar-1"
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            // events={[
            // { title: "event 1", date: "2021-06-01" },
            // { title: "event 2", date: "2021-06-02" },
            // ]}
            headerToolbar={{
                start: "prev,next today",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
        />
        </div>
    );
    }

export default Calendar;