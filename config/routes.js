module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  'get /api/student': 'StudentController.add',
  'post /api/student/id': 'StudentController.create',
  'get /api/student/list': 'StudentController.list',
  'get /api/student/id': 'StudentController.show',

  'get /api/student/id/edit': 'StudentController.edit',
  'post /api/student/id/update': 'StudentController.update',
  'get /api/student/id/delete': 'StudentController.delete'

}
