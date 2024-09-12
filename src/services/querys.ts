export const GENERAL_QUERY = `
  query {
    countries {
      code
      name
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;
