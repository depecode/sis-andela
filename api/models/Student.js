/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */



module.exports = {
  attributes: {
    matricNo: {
      type: 'string',
      required: true,
      minLength: 6,
      maxLength: 6
    },

    firstName: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 15
    },

    lastName: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 15
    },

    middleName: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 15
    },

    gender: {
      type: 'string',
      required: true
    },

    birthDate: {
      type: 'date',
      required: true
    },

    emailAddress: {
      type: 'email',
      unique: true,
      required: true
    },

    phoneNumber: {
      type: 'string',
      unique: true,
      required: true,
      minLength: 11,
      maxLength: 13
    }

  }
}
