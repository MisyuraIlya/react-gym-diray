const PROGRAM_TYPES = {
  POWER: 'POWER',
  MASS: 'MASS',
  FITNESS: 'FITNESS',
}
// Data
let programExercises = {
  0: [
    [
      {
        id: 1,
        name: 'Подтягушки',
        sets: 4,
        repetitions: '12-6'
      },
      {
        id: 2,
        name: '2',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 3,
        name: 'aa',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 4,
        name: 'bb',
        sets: '4',
        repetitions: '12-6'
      }
    ],
    [
      {
        id: 1,
        name: '3',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 2,
        name: '4',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 3,
        name: '5',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 4,
        name: '6',
        sets: '4',
        repetitions: '12-6'
      }
    ],
    [
      {
        id: 1,
        name: '7',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 2,
        name: '8',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 3,
        name: '9',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 4,
        name: '10',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 5,
        name: '11',
        sets: '4',
        repetitions: '12-6'
      }
    ],
    [
      {
        id: 1,
        name: '12',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 2,
        name: '13',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 3,
        name: '14',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 4,
        name: '15',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 5,
        name: '16',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 6,
        name: '17',
        sets: '4',
        repetitions: '12-6'
      }
  
    ],
    [
      {
        id: 1,
        name: '18',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 2,
        name: '19',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 3,
        name: '20',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 4,
        name: '21',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 5,
        name: '22',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 6,
        name: '23',
        sets: '4',
        repetitions: '12-6'
      },
      {
        id: 7,
        name: '24',
        sets: '4',
        repetitions: '12-6'
      }
  
    ]
  ]
}

let programs = [
  {
    id: 0,
    name: 'Program A [0]',
    type: PROGRAM_TYPES.POWER,
    description: 'Fancy program!',
    createDate: ''
  },
  {
    id: 1,
    name: 'Program Eat fast die slow [1]',
    type: PROGRAM_TYPES.MASS,
    description: 'Eat to your content'
  },
  {
    id: 2,
    name: 'PB',
    type: PROGRAM_TYPES.FITNESS,
    description: 'Hello!'
  },
  {
    id: 3,
    name: 'Program C',
    type: PROGRAM_TYPES.POWER,
    description: 'Fancy program!'
  },
  {
    id: 4,
    name: 'Program FF',
    type: PROGRAM_TYPES.POWER,
    description: 'Fancy program!'
  },
  {
    id: 5,
    name: 'FFF',
    type: PROGRAM_TYPES.POWER,
    description: 'Fancy program!'
  },
  {
    id: 6,
    name: 'XXX',
    type: PROGRAM_TYPES.POWER,
    description: 'Fancy program!'
  },
];

// Helpers
function delay(data, time) {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}


async function fetchPrograms({ page, limit }) {
  const start = page * limit;
  const end = start + limit;

  return delay({page, limit, total: programs.length, data: programs.slice(start, end)}, 0);
}

async function removeProgram(id) {
  programs = programs.filter(({id: programID}) => programID !== id);
  return delay({data: true}, 0);
}

async function fetchProgramExerisice(programId) {
  const exercises = programExercises[programId] || [];
  return delay({data: exercises}, 0)
}

async function addProgramExersice(programId, exersiceId, exersice) {
  const id = programExercises[programId][exersiceId].length;
  programExercises[programId][exersiceId] = [...programExercises[programId][exersiceId], {...exersice, id}];
  console.log('programExercises', {programExercises})
}

async function addProgramExersiceDay(programId) {
  programExercises[programId] = programExercises[programId] ? [...programExercises[programId], []] : [[]];
}

async function deleteExersiceDay(programId, exersiceId, dayId) {
  programExercises[programId][exersiceId] = programExercises[programId][exersiceId].filter(({id}) => dayId !== id);
}

const api = {
  fetchPrograms,
  removeProgram,
  fetchProgramExerisice,
  addProgramExersice,
  addProgramExersiceDay,
  deleteExersiceDay 
};

export { PROGRAM_TYPES };
export default api;
