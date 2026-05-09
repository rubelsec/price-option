
import PriceOption from "../PriceOption";
const PriceOptions = () => {
   const options= [
  {
    "id": 1,
    "name": "Basic Plan",
    "price": 15,
    "currency": "USD",
    "features": [
      "Access to gym equipment",
      "Basic cardio machines",
      "Locker room access",
      "Open 6 AM - 10 PM"
    ]
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "price": 30,
    "currency": "USD",
    "features": [
      "All Basic Plan features",
      "Free group classes (Yoga, Zumba)",
      "Personal trainer consultation (monthly)",
      "Access to sauna"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plan",
    "price": 50,
    "currency": "USD",
    "features": [
      "All Standard Plan features",
      "Dedicated personal trainer",
      "Diet & nutrition plan",
      "Unlimited group classes",
      "24/7 gym access"
    ]
  },
  {
    "id": 4,
    "name": "Elite Plan",
    "price": 80,
    "currency": "USD",
    "features": [
      "All Premium Plan features",
      "1-on-1 coaching sessions",
      "Weekly body composition analysis",
      "Priority equipment access",
      "Spa & recovery services included"
    ]
  }
]
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {
            options.map(option=>(
             <PriceOption
              key={option.id} 
              option={option} >

              </PriceOption>))}
            </div>
        </div>
    );
};

export default PriceOptions;