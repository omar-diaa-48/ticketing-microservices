import { Publisher, Subjects, TicketCreatedEvent } from '@omar48/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
