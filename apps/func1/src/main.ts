import { PubSub } from '@google-cloud/pubsub';
import type { Request, Response } from 'express';
const pubsub = new PubSub();

type events = 'be-1' | 'agent-1' | 'fe-22' | 'gws-1' | 'be_logs';

function publishPubSubMessage(topic: events, message: any) {
  const buffer = Buffer.from(JSON.stringify(message));
  return pubsub.topic(topic).publish(buffer);
}

const func1 = (req: Request, res: Response) => {
  const { topic } = req.body;
  delete req.body.topic;
  publishPubSubMessage(topic, req.body)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.log('Failed send PubSub topic', err); // eslint-disable-line
    });
};

export { func1 };
