import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const prizes = [
  { title: 'Second Prize', amount: 20000 },
  { title: 'First Prize', amount: 30000 },
  { title: 'Third Prize', amount: 10000 },
];

const Prizes = () => {
  return (
    <div className="flex justify-around items-center flex-wrap h-auto md:h-screen">
      {prizes.map((prize, index) => (
        <div
          key={index}
          className={`p-4 border border-gray-400 rounded-lg m-1 ${
            index === 1 ? 'w-full md:w-1/4' : 'w-full md:w-1/5'
          } text-center transition-shadow hover:shadow-lg`}
        >
          <FontAwesomeIcon icon={faTrophy} className="text-3xl mb-2" />
          <h3 className="text-xl font-bold">{prize.title}</h3>
          <p>{`Prize: $${prize.amount}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Prizes;
