import { Subjects, Publisher, PaymentCreatedEvent } from '@omar48/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
