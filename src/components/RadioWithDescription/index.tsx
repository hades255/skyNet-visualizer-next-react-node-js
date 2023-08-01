import { useState } from 'react';

type Plan = {
  name: string;
  price: number;
  description: string;
  cta?: string;
};

interface RadioProps {
  plans: Plan[];
}

const RadioWithDescription: React.FC<RadioProps> = ({ plans }) => {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const handleSelectPlan = (index: number) => {
    setSelectedPlan(index);
  };

  return (
    <>
      <h2>Choose Your Plan</h2>

      <div className="flex flex-row m-2">
        {plans.map((plan, index) => (
          <div
            className="p-4 w-1/4 flex flex-row mx-2 border rounded-md items-start"
            key={index}
          >
            <label className="flex flex-row" htmlFor={`plan${index}`}>
              <input
                type="radio"
                id={`plan${index}`}
                name="plan"
                checked={selectedPlan === index}
                onChange={() => handleSelectPlan(index)}
              />
              <div className="ml-2">
                <h3>{plan.name}</h3>
                <h4>{plan.price}</h4>
                <p>{plan.description}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioWithDescription;
