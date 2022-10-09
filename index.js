// Code your solution in this file!

const distanceFromHqInBlocks = (to_bl_numb, from_bl_numb = 42) => {
  return Math.abs(to_bl_numb - from_bl_numb);
};

const distanceFromHqInFeet = (to_bl_numb) => {
  const a = distanceFromHqInBlocks(to_bl_numb);
  return a * 264;
};

const distanceTravelledInFeet = (from_bl, to_bl) => {
  const b = distanceFromHqInBlocks(from_bl, to_bl);
  return b * 264;
};

const calculatesFarePrice = (from_bl, to_bl) => {
  if (distanceTravelledInFeet(from_bl, to_bl) < 400) {
    return 0;
  } else {
    if (
      distanceTravelledInFeet(from_bl, to_bl) >= 400 &&
      distanceTravelledInFeet(from_bl, to_bl) <= 2000
    ) {
      return 0.02 * (distanceTravelledInFeet(from_bl, to_bl) - 400);
    } else {
      if (
        distanceTravelledInFeet(from_bl, to_bl) > 2000 &&
        distanceTravelledInFeet(from_bl, to_bl) < 2500
      ) {
        return 25;
      } else if (distanceTravelledInFeet(from_bl, to_bl) > 2500) {
        return "cannot travel that far";
      }
    }
  }
};
