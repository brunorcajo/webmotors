import React, { useState, useEffect, useRef } from "react";

import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import { Container, Selected, Arrow, Label, SelectedItem, List, ListItem } from "./styles";

const Dropdown = ({ onChange, data = [], labelBeforeSelectedItem = "", removeLabelAfterSelectedItem = false, emptyLabel, value, dataValue = "value", dataLabel = "label", ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const selectRef = useRef(null);
  const disabled = data?.length === 0;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickListItem = (item) => {
    setSelectedItem(item);
    onChange(item[dataValue]);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [selectedItem]);

  useEffect(() => {
    setSelectedItem(data.find((item) => item[dataValue] === value));
  }, [dataValue, data, value]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <Container onClick={handleClick} ref={selectRef} {...rest} disabled={disabled}>
      <Selected>
        <Arrow>{isOpen && !disabled ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</Arrow>
        <Label>{removeLabelAfterSelectedItem && selectedItem ? "" : labelBeforeSelectedItem}</Label>
        <SelectedItem>{selectedItem?.[dataLabel] || emptyLabel}</SelectedItem>
      </Selected>
      <List>
        {data &&
          isOpen &&
          data.map((item) => {
            return (
              item[dataLabel] !== selectedItem?.[dataLabel] && (
                <ListItem
                  key={item[dataValue]}
                  onClick={() => {
                    handleClickListItem(item);
                  }}
                >
                  {item[dataLabel]}
                </ListItem>
              )
            );
          })}
      </List>
    </Container>
  );
};

export default Dropdown;
