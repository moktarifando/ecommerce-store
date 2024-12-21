import { useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onPriceChange: (min: number, max: number) => void;
}

export default function PriceRangeSlider({
  min,
  max,
  onPriceChange,
}: PriceRangeSliderProps) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    onPriceChange(value, maxValue);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    onPriceChange(minValue, value);
  };

  return (
    <div className="relative w-80 mx-auto">
      {/* Track Background */}
      <div className="absolute h-2 w-full bg-gray-300 rounded-full"></div>

      {/* Selected Range Background */}
      <div
        className="absolute h-2 bg-blue-500 rounded-full"
        style={{
          left: `${(minValue / 100) * 100}%`,
          width: `${((maxValue - minValue) / 100) * 100}%`,
        }}
      ></div>

      {/* Min Thumb */}
      <input
        type="range"
        min="0"
        max="100"
        value={minValue}
        onChange={handleMinChange}
        className="absolute w-full -top-2 appearance-none pointer-events-auto z-30 h-2 bg-transparent"
      />

      {/* Max Thumb */}
      <input
        type="range"
        min="0"
        max="100"
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute w-full -top-2 appearance-none pointer-events-auto z-20 h-2 bg-transparent"
      />

      {/* Min/Max Labels */}
      <div className="flex justify-between mt-6 text-gray-700">
        <span>Min: {minValue}</span>
        <span>Max: {maxValue}</span>
      </div>

      {/* Custom Thumb Styling */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 9999px; /* Fully rounded */
          background-color: #ffffff; /* White background */
          border: 2px solid #3b82f6; /* Tailwind's blue-500 color */
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 9999px;
          background-color: #ffffff;
          border: 2px solid #3b82f6;
          cursor: pointer;
        }

        input[type="range"]::-ms-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 9999px;
          background-color: #ffffff;
          border: 2px solid #3b82f6;
          cursor: pointer;
        }

        /* Focus shadow for better accessibility */
        input[type="range"]:focus::-webkit-slider-thumb {
          box-shadow: 0 0 5px 1px rgba(59, 130, 246, 0.75); /* Blue shadow */
        }

        input[type="range"]:focus::-moz-range-thumb {
          box-shadow: 0 0 5px 1px rgba(59, 130, 246, 0.75);
        }

        input[type="range"]:focus::-ms-thumb {
          box-shadow: 0 0 5px 1px rgba(59, 130, 246, 0.75);
        }
      `}</style>
    </div>
  );
}
