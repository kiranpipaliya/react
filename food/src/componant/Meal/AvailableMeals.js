import { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    setIsLoading(true)

    const loadMeals = async () => {
      const response = await fetch("https://food-55699-default-rtdb.firebaseio.com/meals");
      console.log(response.ok);
      if (!response.ok) {
        console.log("response.ok");
        throw new Error("Something went wrong Please Try Again..");
      }
      const responseData = await response.json();

      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals);
      setIsLoading(false)
    }

    loadMeals().catch((error) => {
      setIsLoading(false)
      setHttpError(error.message)
    })

  }, [])

  if (isLoading) {
    return (
      <section className="loading">
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className="error">
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      key={meal.id}
    />
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
