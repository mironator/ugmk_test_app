type ReturnType = {
  width: number;
  height: number;
};

export function calculateChartDimensions(
  screenWidth: number,
  height = 300,
): ReturnType {
  let width = 600;

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
