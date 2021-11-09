import { Subjects, Publisher, OrderCancelledEvent } from '@omar48/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
