import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EvenLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage() {
   const router = useRouter();

   // This is very important
   const eventId = router.query.eventId;
   const event = getEventById(eventId);

   if (!event) {
      return (
         <ErrorAlert>
            <p>No event found</p>
         </ErrorAlert>
      );
   }

   return (
      <Fragment>
         <EventSummary title={event.title} />
         <EvenLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
         />
         <EventContent>
            <p>{event.description}</p>
         </EventContent>
      </Fragment>
   );
}

export default EventDetailPage;
