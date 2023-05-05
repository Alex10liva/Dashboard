var locks = [
  {
    "id": "IA-109",
    "schedule": [{"start": "2023-05-04T14:00:00", "end": "2023-05-04T16:00:00", "student_id" : "166710"},
    {"start": "2023-05-14T14:00:00", "end": "2023-05-14T16:00:00", "student_id" : "168253"},
    {"start": "2023-05-10T13:00:00", "end": "2023-05-10T14:00:00", "student_id" : "165377"}],
    "last_activity" : {
      "message": "El usuario con ID 166710 abrió el candado del Salón <span>IA - 109</span>", 
      "date": "2023-05-04T14:00:00",
    },
    "current_state": "open",
    "warning" : ""
  },
  {
    "id": "IA-108",
    "schedule": [{"start": "2023-05-06T14:00:00", "end": "2023-05-06T16:00:00", "student_id" : "166710"}],
    "last_activity" : {
      "message": "El usuario con ID 166710 abrió el candado del Salón <span>IA - 108</span>", 
      "date": "2023-02-20T14:48:00"
    },
    "current_state": "closed",
    "warning" : "El candado <span>IA - 109</span> está abierto fuera del programa"
  },
  {
    "id": "NE-108",
    "schedule": [{"start": "2023-05-03T14:00:00", "end": "2023-05-03T16:00:00", "student_id" : "166710"},
    {"start": "2023-05-12T10:00:00", "end": "2023-05-12T11:00:00", "student_id" : "156423"},
    {"start": "2023-05-11T16:00:00", "end": "2023-05-11T18:00:00", "student_id" : "177723"}],
    "last_activity" : {
      "message": "El usuario con ID 166710 abrió el candado del Salón <span>NE - 108</span>", 
      "date": "2023-02-22T14:48:00"
    },
    "current_state": "closed",
    "warning" : ""
  },
]

const getLocksData = function(request, response) {
  response.json(locks)
}

module.exports = {
  getLocksData
}