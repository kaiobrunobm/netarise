import React from 'react';

import LargeButton from '@/app/components/buttons/LargeButton';

interface PlanCardProps {
  planTitle: string;
  planDescription: string;  
  planBenefits: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({planTitle, planDescription, planBenefits}) => {
  return (
    <div>
      <div>
      <h2>{planTitle}</h2>
      <p>{planDescription}</p>
      </div>
      <LargeButton text='Entre em contato' formStatus='default'/>
      <ul>
        {planBenefits.map((benefit, index) => {
          return (
            <li key={index}>
              {benefit}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PlanCard;
