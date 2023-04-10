import { FC } from "react";
import { IFilter } from "../../types";
import { Box, Container, Input } from "./Filter.styled";
import { FaSearch } from "react-icons/fa";

const Filter: FC<IFilter> = ({ value, onChange }) => {
  return (
    <Container>
      <h2>Find contacts by name</h2>
      <Box>
        <FaSearch />
        <Input onChange={onChange} value={value} />
      </Box>
    </Container>
  );
};

export default Filter;
