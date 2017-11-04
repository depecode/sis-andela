/**
 * StudentController
 *
 * @description :: Server-side logic for managing students @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (req, res) {
    Student.find({}).exec(function (err, students) {
      if (err) {
        res.send(500, {error: 'Database Error'})
      }
      res.view('student/list', {students: students})
    })
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
      if (err) {
        res.send(500, {error: 'Database Error'})
      }

      res.redirect('/student/list')
    })

    return false
  },

  show: function (req, res) {
    Student.findOne({id: req.params.id}).exec(function (err, student) {
      if (err) {
        res.send(500, {error: 'Database Error'})
      }

      res.view('student/list', {student: student})
    })
  },

  edit: function (req, res) {
    Student.findOne({id: req.params.id}).exec(function (err, student) {
      if (err) {
        res.send(500, {error: 'Database Error'})
      }

      res.view('student/edit', {student: student})
    })
  },

  update: function (req, res) {
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var middleName = req.body.middleName
    var gender = req.body.gender
    var birthDate = req.body.birthDate
    var emailAddress = req.body.emailAddress
    var phoneNumber = req.body.phoneNumber

    Student.update({id: req.params.id}, {
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      gender: gender,
      birthDate: birthDate,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber

    }).exec(function (err) {
      if (err) {
        res.send(500, {error: 'Database Error'})
      }

      res.redirect('/student/list')
    })

    return false
  },

  delete: function (req, res) {
    Student.destroy({id: req.params.id}).exec(function (err) {
      if (err) {
        res.send(500, {error: 'Database Error'})
      }

      res.redirect('/student/list')
    })

    return false
  }

}
