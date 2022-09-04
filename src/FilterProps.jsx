const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "constrast",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "Saturate",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 100,
    Range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    Range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    Range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    Range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

export default DEFAULT_OPTIONS;
