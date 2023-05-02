type ReturnType = {
  width: number;
  height: number;
};

export function calculateChartDimensions(screenWidth: number): ReturnType {
  let width = 600;
  const height = 300;

  if (screenWidth > 650) {
    width = 600;
  } else {
    width = screenWidth - 100;
  }

  return {
    width,
    height,
  };
}
