import { useMemo, useState } from "react";

export function useCreatePostFields() {
  const [title, setTitle] = useState<string>(undefined);
  const [description, setDescription] = useState<string>(undefined);
  const [goalAmount, setGoalAmount] = useState<number>(undefined);
  const [goalDate, setGoalDate] = useState<Date>(new Date());
  const [coverImage, setCoverImage] = useState<string>(undefined);

  function clearAll() {
    setTitle(undefined);
    setDescription(undefined);
    setGoalAmount(undefined);
    setGoalDate(new Date());
    setCoverImage(undefined);
  }

  const hasDirtyFields = useMemo(
    () =>
      typeof title !== "undefined" ||
      typeof description !== "undefined" ||
      typeof goalAmount !== "undefined" ||
      typeof coverImage !== "undefined",
    [title, description, goalAmount, coverImage],
  );

  const isValid = useMemo(
    () =>
      typeof title !== "undefined" &&
      title !== "" &&
      typeof description !== "undefined" &&
      description !== "" &&
      typeof goalAmount !== "undefined" &&
      goalAmount > 0 &&
      typeof coverImage !== "undefined" &&
      coverImage !== "",
    [title, description, goalAmount, coverImage],
  );

  return {
    title: {
      value: title,
      update: setTitle,
    },
    description: {
      value: description,
      update: setDescription,
    },
    goalAmount: {
      value: goalAmount,
      update: setGoalAmount,
    },
    goalDate: {
      value: goalDate,
      update: setGoalDate,
    },
    coverImage: {
      value: coverImage,
      update: setCoverImage,
    },
    clearAll,
    hasDirtyFields,
    isValid,
  };
}
