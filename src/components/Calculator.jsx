import "../components/Calculator.css";

export default function Calculator({ onChangeProps, userInput }) {
  return (
    <>
      <form id="user-input">
        <div className="input-group">
          <p>
            <label>Inisial Investasi</label>
            <input
              type="number"
              onChange={(e) =>
                onChangeProps("initialInvestment", e.target.value)
              }
              value={userInput.initialInvestment}
            />
          </p>
          <p>
            <label>Investasi Tahunan</label>
            <input
              type="number"
              onChange={(e) =>
                onChangeProps("annualInvestment", e.target.value)
              }
              value={userInput.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Perkiraan balik modal</label>
            <input
              type="number"
              onChange={(e) => onChangeProps("expectedReturn", e.target.value)}
              value={userInput.expectedReturn}
            />
          </p>
          <p>
            <label>Durasi</label>
            <input
              type="number"
              onChange={(e) => onChangeProps("duration", e.target.value)}
              value={userInput.duration}
            />
          </p>
        </div>
      </form>
    </>
  );
}
