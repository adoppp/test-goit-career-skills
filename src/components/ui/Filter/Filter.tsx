import { useState, ReactElement } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

import {
    Button,
    Form,
    FromInput,
    InputDiv,
    InputWrapperDiv,
    Label,
    Legend,
    MileageLabel,
    ToInput,
    WrapperDiv,
} from "./Filter.styled";

import PriceControl from "components/PriceControl/PriceControl";
import DropdownIndicator from "components/DropdownIndicator/DropdownIndicator";
import { OptionTypes } from "./Filter.types";

/**
 * Generate Array of price options for Select component
 *
 * @param {Number} min Minimum price amount as an option to choose
 * @param {Number} max Maximum price amount as an option to choose
 * @returns Array of option Objects for Select component
 */

const definePricesOptions = (min: number, max: number): OptionTypes[] => {
    let pricesOptions = [{ value: '', label: "- -" }];

    for (let i = min; i <= max; i += 10) {
        pricesOptions.push({ value: `$${i}`, label: `${i}` })
    }
    return pricesOptions;
};

const Filter = ({ setFilter, setPage }:
    {
        setFilter: (filter: object) => void,
        setPage: (number: number) => void,
    }): ReactElement =>  {

    const [inputMake, setInputMake] = useState(null);
    const [inputPrice, setInputPrice] = useState(null);
    const [inputFrom, setInputFrom] = useState("");
    const [inputTo, setInputTo] = useState("");

    // As mockapi.io doesn't provide an api to return array of all car brands mentioned in adverts
    // here is a solution to keep this array as a static information.
    //
    // Another solution is to create a hook in api.js file (to simulate backend) which will return
    // such array. But it's require to fetch all adverts and will increase page loading time.
    const brandOptions = [
        { value: null, label: "filter.defaultOption", selected: true },
        // ...makers.map(maker => ({ value: maker, label: maker })),
    ];

    /**
   * Set page to 1 and set filter data for fetching appropriate adverts
   *
   * @param {Event} e Event object
   */
    
    const handleFilterSubmit = (e: any): void => {
        e.preventDefault();

        const filter = {
            make: inputMake,
            price: inputPrice,
            mileage: {
                from: inputFrom,
                to: inputTo,
            },
        };

        setPage(1);
        setFilter(filter);
    };

    return (
        <Form onSubmit={handleFilterSubmit}>
        <WrapperDiv>
            <Label htmlFor="carBrand">{"filter.carBrand"}</Label>

            <Select
            inputId="carBrand"
            options={brandOptions}
            defaultValue={brandOptions[0]}
            styles={styles}
            onChange={(option: {value: string, label: string, selected: boolean}): void => setInputMake(option.value)}
            components={{ DropdownIndicator }}
            />
        </WrapperDiv>

        <WrapperDiv>
            <Label htmlFor="price">{t("filter.price")}</Label>

            <Select
            inputId="price"
            options={definePricesOptions(30, 800)}
            defaultValue={definePricesOptions(30, 800)[0]}
            styles={styles}
            onChange={option => setInputPrice(option.value)}
            components={{ Control: PriceControl, DropdownIndicator }}
            />
        </WrapperDiv>

        <fieldset>
            <Legend htmlFor="mileage">{t("filter.mileage")}</Legend>

            <InputWrapperDiv>
            <InputDiv>
                <MileageLabel htmlFor="from">{t("filter.from")}</MileageLabel>

                <FromInput
                type="number"
                id="from"
                value={inputFrom}
                onChange={({ target }) => setInputFrom(target.value)}
                />
            </InputDiv>

            <InputDiv>
                <MileageLabel htmlFor="to">{t("filter.to")}</MileageLabel>

                <ToInput
                type="number"
                id="to"
                value={inputTo}
                onChange={({ target }) => setInputTo(target.value)}
                />
            </InputDiv>
            </InputWrapperDiv>
        </fieldset>

        <Button>{t("filter.search")}</Button>
        </Form>
    );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,

    display: "flex",
    flexWrap: "nowrap",

    width: state.selectProps.inputId === "carBrand" ? "242px" : "136px",
    height: "48px",
    padding: "14px 18px",

    border: "none",
    borderRadius: "14px",

    backgroundColor: "#F7F7FB",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (_, state) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "0",

    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    transition: "transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,

    width: "100%",
    padding: "0",
  }),
  singleValue: () => ({ color: "#121417" }),
  placeholder: () => ({}),
  input: () => ({ display: "none" }),
  menu: baseStyles => ({
    ...baseStyles,

    zIndex: "3",

    marginTop: "4px",
    padding: "14px 8px 14px 18px",

    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
  }),
  menuList: (_, state) => ({
    height: state.selectProps.id === "carBrand" ? "272px" : "188px",

    marginTop: 0,
    overflowY: "auto",
  }),
  option: () => ({
    color: "rgba(18, 20, 23, 0.20)",
    lineHeight: `${20 / 16}`,
    padding: "4px 0",
    cursor: "pointer",

    "&:hover": {
      color: "#121417",
    },
  }),
};

export { Filter };