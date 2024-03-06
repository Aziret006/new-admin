import React, { useState, useEffect } from 'react';
import './React.scss'; // Импортируйте ваш файл SCSS

const ProfileStrength = ({ profile }) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    // Проверяем, определен ли профиль, перед расчетом силы
    if (profile) {
      const calculatedStrength = calculateProfileStrength(profile);
      setStrength(calculatedStrength);
    }
  }, [profile]);

  const calculateProfileStrength = (profile) => {
    // Пример: Предполагается простой расчет на основе наличия фотографии профиля и заполненности базовой информации
    let calculatedStrength = 0;
    if (profile.picture) calculatedStrength += 50;
    if (profile.name && profile.email) calculatedStrength += 50;
    return calculatedStrength;
  };

  return (
    <div className="profile-strength-container">
      <h2>Сила профиля: {strength}%</h2>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${strength}%` }}
          role="progressbar"
          aria-valuenow={strength}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default ProfileStrength;
