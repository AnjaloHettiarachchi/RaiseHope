import { useState } from "react";

export function useProfileInitialFields() {
  const [firstName, setFirstName] = useState<string>(undefined);
  const [lastName, setLastName] = useState<string>(undefined);
  const [city, setCity] = useState<string>(undefined);
  const [country, setCountry] = useState<string>(undefined);
  const [passion, setPassion] = useState<string>(undefined);

  return {
    firstName: {
      value: firstName,
      update: setFirstName,
    },
    lastName: {
      value: lastName,
      update: setLastName,
    },
    city: {
      value: city,
      update: setCity,
    },
    country: {
      value: country,
      update: setCountry,
    },
    passion: {
      value: passion,
      update: setPassion,
    },
  };
}
