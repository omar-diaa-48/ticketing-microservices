import { Publisher, OrderCreatedEvent, Subjects } from '@omar48/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
