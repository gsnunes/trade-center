import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Orders = new Mongo.Collection('orders');

if (Meteor.isServer) {
  Meteor.publish('orders', () => {
    return Orders.find({});
  });
}
