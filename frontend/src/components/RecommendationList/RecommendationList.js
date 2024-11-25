import React from 'react';
import Logo from '../../logo-rd.png';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li
            key={index}
            className="mb-2 p-2 rounded-md shadow-md gap-2 grid border"
          >
            <span className="text-sm text-gray-500">
              {recommendation.category}
            </span>
            <div className="flex items-center gap-2 font-medium">
              <img src={Logo} alt="RD logo" className="max-h-4" />
              {recommendation.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
