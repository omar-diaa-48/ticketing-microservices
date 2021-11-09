import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@omar48/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
