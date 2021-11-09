import { Publisher, Subjects, TicketUpdatedEvent } from '@omar48/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
