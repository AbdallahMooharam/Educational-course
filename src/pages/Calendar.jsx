import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [sessionTablesData, setSessionTablesData] = useState([]);
  const [tableInfo, setTableInfo] = useState(null);

  const token = JSON.parse(localStorage.getItem("user")).access_token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://unih0me.com/api/auth/sessiontables", { // Changed method to GET and endpoint
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSessionTablesData(data); // Updated state with fetched data
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleDateSelect = async (selectInfo) => {
    const title = prompt("Please enter a title for your event");
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      const eventId = createEventId();
      calendarApi.addEvent({
        id: eventId,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });

      try {
        const response = await fetch("https://unih0me.com/api/auth/sessiontable/store", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            date: selectInfo.startStr.split('T')[0], // Extract date
            time: selectInfo.startStr.split('T')[1], // Extract time
            sessiontable_id: eventId // Include event ID in the request
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to store event");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error storing event:", error);
      }
    }
  };

  const handleEventClick = (clickInfo) => {
    setEventToDelete(clickInfo.event);
    setShowDeleteModal(true);
  };

  const handleDeleteEvent = () => {
    if (eventToDelete) {
      eventToDelete.remove();
      setShowDeleteModal(false);
      setEventToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setEventToDelete(null);
  };

  const renderEventContent = (eventInfo) => (
    <>
      <b className="mr-1 text-xs sm:text-sm">{eventInfo.timeText}</b>
      <i className="text-xs sm:text-sm truncate">{eventInfo.event.title}</i>
    </>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-2 sm:p-4 overflow-x-auto">
          <div className="min-w-[800px]">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              slotDuration={"00:30:00"}
              slotLabelInterval={"01:00"}
              slotLabelFormat={{
                hour: "numeric",
                minute: "2-digit",
                omitZeroMinute: true,
                meridiem: "short",
              }}
              slotMinTime={"00:00:00"}
              slotMaxTime={"24:00:00"}
              initialEvents={sessionTablesData} // Use sessionTablesData for initial events
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              height="auto"
              contentHeight="auto"
              aspectRatio={1.35}
              stickyHeaderDates={true}
              viewClassNames="text-sm sm:text-base"
              dayHeaderClassNames="text-xs sm:text-sm"
              slotLabelClassNames="text-xs sm:text-sm"
              eventClassNames="p-1"
              dayCellClassNames="h-24 sm:h-32"
              slotLaneClassNames="h-8"
            />
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-4 rounded-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">Delete Event</h3>
            <p className="text-sm sm:text-base mb-4">
              Are you sure you want to delete the event '{eventToDelete.title}'?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancelDelete}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteEvent}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function createEventId() {
  return String(Math.random()).replace(/\D/g, "").substring(0, 10);
}

export default CalendarComponent;
