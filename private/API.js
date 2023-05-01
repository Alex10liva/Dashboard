var locks = [
  {
    "id": "IA-109",
    "schedule": [{"start": "01-04-23T14:00:00", "end": "01-04-23T16:00:00", "student_id" : 166710}],
    "last_activity" : {
      "message": "El usuario con ID 166710 abrió el candado del Salón <span>IA - 109</span>", 
      "date": "2023-02-21T14:48:00",
    },
    "current_state": "open",
    "warning" : ""
  },
  {
    "id": "IA-108",
    "schedule": [{"start": "01-04-23T14:00:00", "end": "01-04-23T16:00:00", "student_id" : 166710}],
    "last_activity" : {
      "message": "El usuario con ID 166710 abrió el candado del Salón <span>IA - 108</span>", 
      "date": "2023-02-20T14:48:00"
    },
    "current_state": "closed",
    "warning" : "El candado <span>IA - 109</span> está abierto fuera del programa"
  },
  {
    "id": "NE-108",
    "schedule": [{"start": "01-04-23T14:00:00", "end": "01-04-23T16:00:00", "student_id" : 166710}],
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