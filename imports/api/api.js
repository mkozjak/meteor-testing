import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'sum': function(arg1, arg2) {
    return arg1 + arg2
  }
})
