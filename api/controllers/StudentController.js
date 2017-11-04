/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  contact: function (req, res) {
    res.view('contact')
  },

  list: function (req, res) {
    res.view('student/list')
  },

  add: function (req, res) {
    res.view('student/add')
  },

  create: function (req, res) {
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var middleName = req.body.middleName
    var gender = req.body.gender
    var birthDate = req.body.birthDate
    var emailAddress = req.body.emailAddress
    var phoneNumber = req.body.phoneNumber

    Student.create({
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      gender: gender,
      birthDate: birthDate,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber

    }).exec(function (err) {
      console.log(Student);
      if (err) {
        res.send(500, {error: 'Database Error'});
      }

      res.redirect('/student/list');
    });

    return false;
  },



  show: function (req, res) {
    res.view('student/show')
  },

  edit: function (req, res) {
    res.view('student/edit')
  }
}
