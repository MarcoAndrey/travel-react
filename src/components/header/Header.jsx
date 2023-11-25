import {
  faHotel,
  faCalendarDays,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adulto: 0,
    niños: 0,
    habitacion: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotel</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Vuelos</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>

        <h1 className="headerTitle">
          Vive como un local en casas de huéspedes, hostales y apartamentos
        </h1>
        <p className="headerDesc">
          No importa lo que estés buscando, estamos seguros de que podemos
          ayudarte a encontrar la experiencia de hotel perfecta para ti.
        </p>
        <button className="headerBtn">HOTELES DE LUJO</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faHotel} className="headerIcon" />
            <input
              type="text"
              placeholder="Hoteles Deluxe"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText">{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adulto} Adulto · ${options.niños} Niños · ${options.habitacion} Habitacion`}</span>
            { openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adulto</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adulto <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("adulto", "d")}>
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adulto}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adulto", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Niños</span>
                <div className="optionCounter">
                  <button
                    disabled={options.niños <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("niños", "d")}>
                    -
                  </button>
                  <span className="optionCounterNumber">{options.niños}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("niños", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Habitacion</span>
                <div className="optionCounter">
                  <button
                    disabled={options.habitacion <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("habitacion", "d")}>
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.habitacion}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("habitacion", "i")}>
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div>
            <button className="headerBtnsearch">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
