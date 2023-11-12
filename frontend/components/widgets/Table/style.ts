import { components } from '../../../config/uiComponents';

export const getTableStyles = () => {
  const { table } = components;

  return {
    table: {
      ...table.table,
    },
    header: {
      ...table.header,
    },
    body: {
      ...table.body,
    },
    footer: {
      ...table.footer,
    },
    controls: {

    },
  };
};
