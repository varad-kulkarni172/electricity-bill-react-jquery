import React, { useState } from 'react';

function BillCalculator() {
  const [units, setUnits] = useState('');
  const [bill, setBill] = useState(0);

  const calculateBill = (units) => {
    let total = 0;

    if (units <= 50) {
      total = units * 3.5;
    } else if (units <= 150) {
      total = 50 * 3.5 + (units - 50) * 4.0;
    } else if (units <= 250) {
      total = 50 * 3.5 + 100 * 4.0 + (units - 150) * 5.2;
    } else {
      total = 50 * 3.5 + 100 * 4.0 + 100 * 5.2 + (units - 250) * 6.5;
    }

    return total.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBill(calculateBill(Number(units)));
  };

  return (
    <div className="card shadow p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="units" className="form-label">
            Enter Units Consumed:
          </label>
          <input
            type="number"
            className="form-control"
            id="units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            placeholder="e.g., 120"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Calculate Bill
        </button>
      </form>
      <div className="mt-4">
        <h3>Your Bill: ₹{bill}</h3>
      </div>
    </div>
  );
}

export default BillCalculator;
