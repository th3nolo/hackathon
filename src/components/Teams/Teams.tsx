import React from 'react';

const nbaTeams = [
  {
    id: 1,
    name: 'Lakers',
    match: 'Warriors',
  },
  {
    id: 2,
    name: 'Warriors',
    match: 'Celtics',
  },
  {
    id: 3,
    name: 'Celtics',
    match: 'Lakers',
  },
  {
    id: 4,
    name: 'Chicago Bulls Chicago Bulls Chicago Bulls',
    match: 'New York Knicks',
  },
  {
    id: 5,
    name: 'New York Knicks',
    match: 'Warriors',
  },
];

const Teams = () => {
  return (
    <>
      <h1 className='mb-5 text-5xl font-bold'>{`Today's matches`}</h1>
      <p className='mb-5'>
        Here you can find the games that will take place on this day. In the
        prediction box you can add your prediction of all the games that will
        take place on this day.
      </p>

      {nbaTeams.map((match) => {
        return (
          <>
            <div className='flex w-full lg:flex-row  mb-5'>
              <div className='grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold'>
                {match.name}
              </div>
              <div className='divider lg:divider-horizontal'>VS</div>
              <div className='grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold'>
                {match.match}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Teams;